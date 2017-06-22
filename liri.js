

var userCmd = process.argv;

// const fs = require('fs');
// var keys = {};
var keys = require('./keys.js');

if (userCmd[2] != null) {userCmd[2] = userCmd[2].toLowerCase();}

switch (userCmd[2]) {
	case 'my-tweets':
		// call myTweets() function
		myTweets();
		break;
	case 'spotify-this-song':
		// call spotifySong() function
		spotifySong('Hello Goodbye');
		break;
	case 'movie-this':
		// call movieInfo() function
		movieInfo('Some movie');
		break;
	case 'do-what-it-says':
		// call doWhatItSays() function
		doWhatItSays();
		break;
	default:
		// logs error message
		console.log('Valid arguments are:\n* my-tweets\n* spotify-this-song <some song>\n'
					+ '* movie-this <some movie>\n* do-what-it-says');
}

function myTweets() {
	console.log('myTweets() function called.');
}

function spotifySong(song) {
	console.log('spotifySong() function called.');
	console.log('Chosen Song: ' + song);
}

function movieInfo(movie) {
	console.log('movieInfo() function called.');
	console.log('Chosen Movie: ' + movie);
}

function doWhatItSays() {
	console.log('doWhatItSays() function called.');
}


