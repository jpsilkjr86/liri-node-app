// object with methods for calling methods via switch statements comparing parameters
var inputSwitch = {
	noArg: function (mainCmd) {
		// switch statement on the main command (userCmd[2])
		switch (mainCmd) {
			case 'my-tweets':
				var tweet = require('./tweet/tweet.js');
				// call myTweets() function
				tweet.myTweets();
				break;
			case 'do-what-it-says':
				// var doWhatItSays = require('./do-what-it-says/do-what-it-says.js');
				// call doWhatItSays() function
				inputSwitch.doWhatItSays();
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
	}, // end of noArg

	withArg: function (mainCmd, argString) {
		// switch statement on the main command (userCmd[2])
		switch (mainCmd) {
			// this case is repeated here in the event the user accidentally types an extra argument
			// after userCmd[2]. this allows the program to run do-what-it-says either way.
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
			// this case is repeated here in the event the user accidentally types an extra argument
			// after userCmd[2]. this allows the program to run do-what-it-says either way.
			case 'do-what-it-says':
				// var doWhatItSays = require('./do-what-it-says/do-what-it-says.js');
				// call doWhatItSays() function
				inputSwitch.doWhatItSays();
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
	}, // end of withArg
	doWhatItSays: function() {
		// grabs fs module
		var fs = require('fs');
		// reads from random.txt
		fs.readFile('./random.txt', 'utf8', function(err, data){
			// if there's a comma, split it at the comma and save data as an array
			if (data.search(',') !== -1) {
				var contents = data.split(',');
				// call inputSwitch again and send it contents[0] as mainCmd
				// and contents[1] as argString
				inputSwitch.withArg(contents[0], contents[1]);
			}
			else {
				// if there's no comma, just send data to inputSwitch.noArg()
				inputSwitch.noArg(data);
			}			
		}); // end of fs.readFile
	} // end of doWhatItSays
}; // end of inputSwitch object

module.exports = inputSwitch;