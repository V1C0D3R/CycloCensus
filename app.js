//Avoid issues calling non-existing variables
"use strict";

var express = require('express');
var app     = express();
var path    = require('path');
var cons    = require('consolidate');

//Render Engine
app.engine('html', cons.swig);

// set .html as the default extension
app.set('view engine', 'html');
app.set('views', __dirname + '/pages');

var apiRequest  = require(path.join(__dirname+'/jcdecaux_api/api.requests.js'));
var config      = require(path.join(__dirname+'/config.js'));

//Every URL access are redirected here :

app.get('/', function (req, res) {
  res.render('index');
  //res.sendFile('/index.html');
});

app.get('/about', function (req, res) {
  res.render('about');
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

//Server configuration
var server = app.listen(config.port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('CycloCensus app listening at http://%s:%s', host, port);
});

