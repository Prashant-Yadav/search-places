var express = require('express'),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    jwt = require('jsonwebtoken');

var apis = require('./routes/apis.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/apis', apis);

module.exports = app;

//Get port from environment and store in Express
const port = '3000';
app.set('port', port);

//Create HTTP server
const server = http.createServer(app);

//Listen on provided port
server.listen(port, function () {
  console.log('API running on localhost:', port);
});
