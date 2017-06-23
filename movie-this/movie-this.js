var request = require('request');
var keys = require('./keys.js');

function movieInfo(movie) {
	var omdbApiKey = keys.omdbKeys.apiKey;

	// query URL for OMDB API
	var queryURL = 'https://www.omdbapi.com/?apikey=' + omdbApiKey 
				+ '&t=' + movie;

	request(queryURL, function (error, response, body) {
		if(error) {
			return console.log(error);
		}
		var result = JSON.parse(body);
		console.log(result);
	});
}

module.exports = movieInfo;