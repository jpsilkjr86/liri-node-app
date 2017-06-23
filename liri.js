// Capture all user arguments in userCmd
var userCmd = process.argv;

// for use later in joining together any arguments from [3] and after
var searchArray = [];
var searchString = '';

var myTweets = require('./my-tweets/my-tweets.js');
var spotifySong = require('./spotify-this-song/spotify-this-song.js');
var movieInfo = require('./movie-this/movie-this.js');
var doWhatItSays = require('./do-what-it-says/do-what-it-says.js');

// keeps the main command in lowercase for simplicity's sake
if (userCmd[2] != null) {
	userCmd[2] = userCmd[2].toLowerCase();
}

// joins arguments together with spaces if arguments exist after the main command.
// for example if the user types "node liri.js spotify-this-song Hello Goodbye",
// this will convert userCmd[3] and userCmd[4] into a single string "Hello Goodbye"
if (userCmd.length > 3) {
	for (let i = 3; i < userCmd.length; i ++) {
		searchArray.push(userCmd[i]);
	}
	searchString = searchArray.join(' ');
}

// switch statement on the main command, at userCmd[2]
switch (userCmd[2]) {
	case 'my-tweets':
		// call myTweets() function
		myTweets();
		break;
	case 'spotify-this-song':
		// call spotifySong() function
		spotifySong(searchString);
		break;
	case 'movie-this':
		// call movieInfo() function
		movieInfo(searchString);
		break;
	case 'do-what-it-says':
		// call doWhatItSays() function
		doWhatItSays();
		break;
	default:
		// logs error message
		console.log('Valid arguments are:\n* my-tweets\n* spotify-this-song <some song>\n'
					+ '* movie-this <some movie>\n* do-what-it-says');
} // end of switch




