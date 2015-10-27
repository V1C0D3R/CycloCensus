//https://download.data.grandlyon.com/ws/rdata/jcd_jcdecaux.jcdvelov.json

//Avoid issues calling non-existing variables
"use strict";

var request = require('request');
var api = require('./api.config.js');
var stats = require('../data_handler/stats.data.js');

var getStation = function(apiKey, contract, number, res)	{
	var url = stationNumberUrl(apiKey, contract, number);
	console.log(url);

	request(url, function (error, response, body) {
	  	if (!error && response.statusCode == 200) {
	  		//Success
	  		console.log("Request Success");
	  		var jsonObject = JSON.parse(body);
	  		
			///Add station to mongodb
			stats.createNewStationInfo(jsonObject);
			
	  		res.send(jsonObject);
	 	}
	 	else	{
	 		//Fail
	 		console.log("Request Fail");
	 		res.send(body);
	 	}
	});
};

module.exports.getStation = getStation;

var getAllStations = function(apiKey, contract, successCallback)	{
	var url = stationNumberUrl(apiKey, contract, null);
	console.log(url);

	request(url, function (error, response, body) {
	  	if (!error && response.statusCode == 200) {
	  		//Success
	  		console.log("Request Success");
	  		var jsonObject = JSON.parse(body);
	  		
	  		successCallback(jsonObject);
	 	}
	 	else	{
	 		//Fail
	 		console.log("Request Fail");
	 		console.log(body);
	 	}
	});
};

module.exports.getAllStations = getAllStations;

var contractsUrl = function(apiKey, contract) {
  	return stationNumberUrl(apiKey, contract, null);
};

var stationNumberUrl = function(apiKey, contract, number) {

  	return api.base + api.station + (number?"/"+number:"") + "?" + contractParam(contract) + "&" + keyParam(apiKey);
};

var keyParam = function(apiKey)	{
	return "apiKey=" + apiKey;
}

var contractParam = function(contract)	{
	return "contract=" + contract;
}



