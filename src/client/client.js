



var React=require('react');

var HelloMessage = React.createClass({displayName: "HelloMessage",
render: function() {
  return React.createElement("div", null, "Hello, i received this : ", this.props.name);
}
});



// var Restify = require('restify');
// // Creates a JSON client
// var client = restify.createJsonClient({
//   url: 'https://plusme-crubier.herokuapp.com'
// });
//
//
// client.basicAuth('$login', '$password');
// client.get('/hello/Vincent', function(err, req, res, obj) {
//   assert.ifError(err);
//   console.log(JSON.stringify(obj, null, 2));
// });


var rest = require('rest-js');
var restApi = new rest.Rest('https://plusme-crubier.herokuapp.com/', {
  crossDomain: true
});

restApi.read('/hello/Vincent', function(error, data) {
  console.log(data);

  React.render(React.createElement(HelloMessage, {name: JSON.parse(data)}), document.getElementById('main'));


});
