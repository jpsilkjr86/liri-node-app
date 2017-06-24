// Capture all user arguments in userCmd
var userCmd = process.argv;

// for use later in joining together any arguments from [3] and after
var argArray = [];
var argString = '';

// keeps the main command in lowercase for simplicity's sake
if (userCmd[2] != null) {
	userCmd[2] = userCmd[2].toLowerCase();
}

// joins arguments together with spaces if arguments exist after the main command.
// for example if the user types "node liri.js spotify-this-song Hello Goodbye",
// this will convert userCmd[3] and userCmd[4] into a single string "Hello Goodbye"
if (userCmd.length > 3) {
	for (let i = 3; i < userCmd.length; i ++) {
		argArray.push(userCmd[i]);
	}
	argString = argArray.join(' ');
}

// switch statement on the main command, at userCmd[2]
switch (userCmd[2]) {
	case 'my-tweets':
		var tweet = require('./tweet/tweet.js');
		// call myTweets() function
		tweet.myTweets();
		break;
	case 'new-tweet':
		var tweet = require('./tweet/tweet.js');
		// call myTweets() function
		tweet.newTweet(argString);
		break;
	case 'spotify-this-song':
		var spotifySong = require('./spotify-this-song/spotify-this-song.js');
		// call spotifySong() function
		spotifySong(argString);
		break;
	case 'movie-this':
		var movieInfo = require('./movie-this/movie-this.js');
		// call movieInfo() function
		movieInfo(argString);
		break;
	case 'do-what-it-says':
		var doWhatItSays = require('./do-what-it-says/do-what-it-says.js');
		// call doWhatItSays() function
		doWhatItSays();
		break;
	default:
		// default message
		console.log('\nValid arguments are:'
				+ '\n* my-tweets'
				+ '\n* new-tweet <tweet text>'
				+ '\n* spotify-this-song <some song>'
				+ '\n* movie-this <some movie>'
				+ '\n* do-what-it-says');
} // end of switch