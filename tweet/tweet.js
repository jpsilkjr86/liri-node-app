
var Twitter = require('twitter');
const keys = require('./keys.js');

var client = new Twitter ({
	consumer_key: keys.twitterKeys.consumer_key,
	consumer_secret: keys.twitterKeys.consumer_secret,
	access_token_key: keys.twitterKeys.access_token_key,
	access_token_secret: keys.twitterKeys.access_token_secret
});

var tweet = {
	myTweets: function() {
		
		var params = {
			screen_name: 'jpsilkjr86',
			count: 20,
			include_rts: 1
		};

		client.get('statuses/user_timeline', params, function(error, tweets, response) {
			if(error) {return console.log(error);}

			for (let i = 0; i < tweets.length; i++) {
				console.log('\n' + tweets[i].text + '\n(' + tweets[i].created_at + ')');
			}		
		});		
	},

	newTweet: function(text) {
		client.post('statuses/update', {status: text})
		.then(function (tweet) {
			console.log('\nNew tweet posted:\n\n' + tweet.text + '\n(' + tweet.created_at + ')');
		})
		.catch(function (error) {
			throw error;
		});
	}
};

	

module.exports = tweet;