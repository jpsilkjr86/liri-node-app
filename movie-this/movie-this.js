var request = require('request');
var keys = require('./keys.js');

function movieInfo(movie) {
	var omdbApiKey = keys.omdbKeys.apiKey;

	// query URL for OMDB API
	var queryURL = 'https://www.omdbapi.com/?apikey=' + omdbApiKey 
				+ '&t=' + movie + '&tomatoes=true';

	// requests data from omdb
	request(queryURL, function (error, response, body) {
		if(error) {
			return console.log(error);
		}
		// saves result as a JSON parsed object
		var result = JSON.parse(body);
		// if no valid response, display info. else, display Mr. Nobody default info.
		if (result.Response === 'True') {
			console.log('\n'
				+ 'Title: ' + result.Title + '\n'
				+ 'Year Released: ' + result.Year + '\n'
				+ 'IMDB Rating: ' + result.imdbRating + '\n'
				+ 'Country: ' + result.Country + '\n'
				+ 'Language: ' + result.Language + '\n'
				+ 'Plot: ' + result.Plot + '\n'
				+ 'Actors:' + result.Actors + '\n'
				+ 'Rotten Tomatoes URL: ' + result.tomatoURL + '\n');
		}
		else {
			console.log("\nSorry, your search did not yield any results.\n"
					+ "Please check your spelling and try again.\n"
					+ "In the meantime, checkout this movie!");
			movieInfo('Mr. Nobody');
		}
	});
}

module.exports = movieInfo;