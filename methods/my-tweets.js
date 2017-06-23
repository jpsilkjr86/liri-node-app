
var Twitter = require('twitter');
const keys = require('../keys.js');

function myTweets() {
	console.log('myTweets() function called.');
	var client = new Twitter ({
		consumer_key: keys.twitterKeys.consumer_key,
		consumer_secret: keys.twitterKeys.consumer_secret,
		access_token_key: keys.twitterKeys.access_token_key,
		access_token_secret: keys.twitterKeys.access_token_secret
	});

	
	var params = {
		screen_name: 'jpsilkjr86',
		count: 2,
		include_rts: 1
	};

	client.get('statuses/user_timeline', params, function(error, tweets, response) {
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

module.exports = myTweets;