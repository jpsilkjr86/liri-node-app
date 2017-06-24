var Spotify = require('node-spotify-api');
var keys = require('./keys.js');

function spotifySong(song) {
	// authentication object
	var spotify = new Spotify({
	  id: keys.spotifyKeys.id,
	  secret: keys.spotifyKeys.secret
	});

	// requests data from spotify
	spotify.search({ type: 'track', query: song}, function(err, data) {
		if (err) {
			return console.log('Error occurred: ' + err);
		}
		// if there are tracks results, display data from the first item
		if (data.tracks.total > 0) {
			var result = data.tracks.items[0];
			console.log('\nSong:', result.name);
			console.log('Artist:', result.artists[0].name);
			console.log('Album:', result.album.name);
			console.log('Preview URL:', result.preview_url);
			// console.log(result);
		}
		// default for no results is to display "The Sign" song info
		else {
			console.log("\nSorry, your search did not yield any results.\n"
					+ "Please check your spelling and try again.\n"
					+ "In the meantime, checkout this song!");
			spotifySong('The Sign Ace of Base');
		}
	});
}

module.exports = spotifySong;