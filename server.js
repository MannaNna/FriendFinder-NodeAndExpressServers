// Dependencies
// NPM packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// Database
var friends = express();
var app = express();
// Initial port
var PORT = process.env.PORT || 4000; 

// Static assets in the public folder available 
app.use(express.static('app/public'));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Routes
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

// Start the server to begin listening
app.listen(process.env.PORT || 4000);