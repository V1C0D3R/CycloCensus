var config = {};

//You can change your port number here
config.port = process.env.PORT || 8080;

//Default API Key :
//Grab it here : https://developer.jcdecaux.com/
config.apiKey = process.env.JCDECAUX_API_KEY || "";

module.exports = config;

