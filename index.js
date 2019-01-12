/*
 * Primary file for the API
 */

// Dependencies
const server = require('./lib/server');
const handlers = require('./lib/handlers');

// Declare the app
const app = {};

// Init function
app.init = function() {

  // Instantiate a new server
  var s = new server.Server();

  // Set some handlers
  s.router.path('/sample')
    .method('GET', handlers.sample);

  s.router.path('/ping')
    .method('*', handlers.ping);

  s.router.path('/users')
    .method('GET', handlers.listUsers)
    .method('POST', handlers.createUser);

  // Start listening
  s.start();

};

// Execute
app.init();

// Export the app
module.exports = app;
