//Avoid issues calling non-existing variables
"use strict";

var request = require('request');
var api = require('./api.config.js');

var getStation = function(apiKey, contract, number, res, callback)	{
	var url = stationNumberUrl(apiKey, contract, number);
	console.log(url);

	request(url, function (error, response, body) {
	  	if (!error && response.statusCode == 200) {
	  		//Success
	  		console.log("Success");
	  		var result = JSON.parse(body);
	  		res.send(result);
	 	}
	 	else	{
	 		//Fail
	 		console.log("Fail");
	 		res.send(body);
	 	}
	});
};

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

module.exports.getStation = getStation;
