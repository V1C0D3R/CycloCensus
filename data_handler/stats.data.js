//Avoid issues calling non-existing variables
"use strict";

//Requires
var express = require('express');
var mongoose = require ("mongoose");
var scheduler =  require('./scheduler.js');

var app = express();

var Station = require('../models/Station.js');

if ('development' == app.get('env')) {
	mongoose.connect(process.env.MONGODB_URI, function(err) {
	    if(err) {
	        console.log('Mongolab connection failed :', err);
	    } else {
	        console.log('Mongolab connection succeeded.');
	        //Launch cron (only work if process.env.CRON_EABLED is true)
			scheduler.cronUtility();
	    }
	});
} else if('production' == app.get('env')) {
	mongoose.connect(process.env.MONGODB_URI, function(err) {
	    if(err) {
	        console.log('Mongolab connection failed :', err);
	    } else {
	        console.log('Mongolab connection succeeded.');
	        //Launch cron (only work if process.env.CRON_EABLED is true)
			scheduler.cronUtility();
	    }
	});
} else if('local' == app.get('env')) {
	mongoose.connect('mongodb://localhost:27017/cyclocensus', function(err) {
	    if(err) {
	        console.log('Local Mongodb connection failed :', err);
	    } else {
	        console.log('Local Mongodb connection succeeded.');
	        //Launch cron (only work if process.env.CRON_EABLED is true)
			scheduler.cronUtility(function(){console.log("New cron callback!")});
	    }
	});
}

//CRUD implementation

//Create
var createNewStationInfo = function(station)	{
	//Write on mongodb database
	
	Station.create(station, function(err, stationObj){
    	if(err) console.log(err);
    	else {
    		console.log("Station successfuly created on mongo db: ");
    		for(var i in stationObj)
				console.log(JSON.stringify(stationObj[i]));
    	}
	});
};
module.exports.createNewStationInfo = createNewStationInfo;

//Read
var readStationInfo = function(findParameter)	{
	//Read on mongodb database
};
module.exports.readStationInfo = readStationInfo;

//Update
var updateStationInfo = function(number, availableStands, availableBikes, last_update)	{
	//Update in mongodb database
}
module.exports.updateStationInfo = updateStationInfo;

//Delete
var deleteStationInfo = function(number, availableStands, availableBikes, last_update)	{
	//Delete in mongodb database
}
module.exports.deleteStationInfo = deleteStationInfo;

