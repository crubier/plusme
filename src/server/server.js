var Restify = require('restify');
var Hexastore = require('hexastore');

var server = Restify.createServer();
var db = new Hexastore();
db.importZip("palmaresdata");

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  return next();
}



function findAthleteYear(req,res,next) {
var result=db.search([
  [["team"],"has participation",["participation"]],
  [["participation"],"in race",["race"]],
  [["race"],"in competition",["competition"]],
  [["competition"],"date",req.params.year],
  [["competition"],"place",["place"]],
  [["participation"],"with ranking",["ranking"]],
  [req.params.name,"in team",["team"]]
  ]);
  res.send(JSON.stringify(result));
}




server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.get('/athlete/:name/:year', findAthleteYear);
server.head('/athlete/:name/:year', findAthleteYear);


server.listen(process.env.PORT || 5000, function() {
  console.log('%s listening at %s', server.name, server.url);
});
