var Restify = require('restify');
var Hexastore = require('hexastore');


// Cree le serveur Restify
var server = Restify.createServer();

// Cree et importe la base de donnee
var db = new Hexastore();
db.importZip('palmaresdata');


// Reponse aux requetes de type "hello/vincent"
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);
function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  return next();
}



// Reponse aux requetes "athlete/Lecrubier%20Vincent/2009"
server.get('/athlete/:name/:year', findAthleteYear);
server.head('/athlete/:name/:year', findAthleteYear);
function findAthleteYear(req,res,next) {
var result=db.search([
  [['team'],'has participation',['participation']],
  [['participation'],'in race',['race']],
  [['race'],'in competition',['competition']],
  [['competition'],'date',req.params.year],
  [['competition'],'place',['place']],
  [['participation'],'with ranking',['ranking']],
  [req.params.name,'in team',['team']]
  ]);
  res.send(result);
}




// Demarrage du serveur
server.listen(process.env.PORT || 5000, function() {
  console.log('%s listening at %s', server.name, server.url);
});
