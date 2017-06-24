var request = require('request');
var keys = require('./keys.js');

function movieInfo(movie) {
	var omdbApiKey = keys.omdbKeys.apiKey;

	// query URL for OMDB API
	var queryURL = 'https://www.omdbapi.com/?apikey=' + omdbApiKey 
				+ '&t=' + movie + '&tomatoes=true';

	request(queryURL, function (error, response, body) {
		if(error) {
			return console.log(error);
		}
		var result = JSON.parse(body);
		console.log('\n'
			+ 'Title: ' + result.Title + '\n'
			+ 'Year Released: ' + result.Year + '\n'
			+ 'IMDB Rating: ' + result.imdbRating + '\n'
			+ 'Country: ' + result.Country + '\n'
			+ 'Language: ' + result.Language + '\n'
			+ 'Plot: ' + result.Plot + '\n'
			+ 'Actors:' + result.Actors + '\n'
			+ 'Rotten Tomatoes URL: ' + result.tomatoURL + '\n');
	});
}

module.exports = movieInfo;