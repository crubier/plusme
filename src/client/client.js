// var React=require('react');
// var Restify = require('restify');
//
// var HelloMessage = React.createClass({displayName: "HelloMessage",
// render: function() {
//   return React.createElement("div", null, "Hello ", this.props.name);
// }
// });
//
// React.render(React.createElement(HelloMessage, {name: "John"}), document.getElementById('main'));
//
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
});
