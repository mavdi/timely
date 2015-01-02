var Hapi = require('hapi');

//Creating a new Hapi server
var server = new Hapi.Server();

//We ask Hapi to run it on http://localhost:8000
server.connection({ 
    host: 'localhost', 
    port: 8000 
});

//declaring our server routes here
server.route([
  //This line basically says "direct all paths that have no handlers defined to statuc files in my app directory"
  { method: 'GET',   path: '/{path*}', handler : {directory: { path: 'app' , listing: false, index: true }}}
]);

//starting server
server.start(function(err) {
  if (err) return callback('Failed to start server', err);

  console.log('Server started at: ', server.info.uri);
});

//exporting server so that we have access to it outside our module. eg: in gulp file
module.exports = server;