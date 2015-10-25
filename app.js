//Avoid issues calling non-existing variables
"use strict";

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/pages'));
//Store all HTML files in pages folder.

var apiRequest = require('./jcdecaux_api/api_requests.js');
var config = require('./config.js');
if (config == null) {
    console.log('Please fill config_example with data and rename it to config.js before running server.');
  }

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.get('/sayHello', function (req, res) {
  res.send('Hello World!');
});

//Stats on a specified station number
app.get('/stationInfo', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*"); // Configuration for Cross-Domain-Policy
	var apiKey = req.query.apiKey?req.query.apiKey:config.apiKey;
  var contract = req.query.contract?req.query.contract:"Lyon";
  var number = req.query.number;

  apiRequest.getStation(apiKey, contract, number, res);
});

var server = app.listen(config.port || 8080, function () {
  var host = server.address().address;
  var port = server.address().port;
  if (config == null) {
    server.close();
    console.log('Please fill config_example with data and rename it to config.js before running server.');
  }console.log('CycloCensus app listening at http://%s:%s', host, port);
});
