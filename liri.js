// Capture all user arguments in userCmd
var userCmd = process.argv;

// for use later in joining together any arguments from [3] and after
var searchArray = [];
var searchString = '';

const keys = require('./keys.js');

var Twitter = require('twitter');

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

function myTweets() {
	console.log('myTweets() function called.');
	var client = new Twitter ({
		consumer_key: keys.twitterKeys.consumer_key,
		consumer_secret: keys.twitterKeys.consumer_secret,
		access_token_key: keys.twitterKeys.access_token_key,
		access_token_secret: keys.twitterKeys.access_token_secret
	});

	var params = {
		screen_name: 'nodejs'
	};

	client.get('statuses/user_timeline', function(error, tweets, response) {
		if(error) {console.log(error);}
		else {
			console.log(tweets[0].text, '\n\n', tweets[1].text);  // text of tweets
		}
	  // console.log(response);  // Raw response object. 
	});
	// client.post('statuses/update', {status: "I'm using nodeJS to do this holy shit"})
	// .then(function (tweet) {
	// 	console.log(tweet);
	// })
	// .catch(function (error) {
	// 	throw error;
	// });
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


