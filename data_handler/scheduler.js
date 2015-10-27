var cron 	= require('cron');
var path 	= require('path');

var apiRequest 	= require(path.join(__dirname+'/../jcdecaux_api/api.requests.js'));
var stats 		= require(path.join(__dirname+'/../data_handler/stats.data.js'));
var config 		= require(path.join(__dirname+'/../config.js'));

var cronJob = cron.job("0 */1 * * * *", function(){
	//Default Callback : Save All Lyon Station every 5 minutes
	apiRequest.getAllStations(config.apiKey, "Lyon", function(stations) {
		///Add station to mongodb
		stats.createNewStationInfo(stations);
		console.info('cron job completed');
	});
});

var cronUtility = function(callback) {

	if (process.env.CRON_ENABLED) {
		if (callback != null) {
			console.log("Cron utility called with callback");
			cronJob = cron.job("0 */10 * * * *", callback);
		}
		cronJob.start();
	}
} 

module.exports.cronUtility = cronUtility;