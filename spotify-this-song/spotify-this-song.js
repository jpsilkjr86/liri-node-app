var Spotify = require('node-spotify-api');
var keys = require('./keys.js');

function spotifySong(song) {
	var spotify = new Spotify({
	  id: keys.spotifyKeys.id,
	  secret: keys.spotifyKeys.secret
	});

	spotify.search({ type: 'track', query: song}, function(err, data) {
		if (err) {
			return console.log('Error occurred: ' + err);
		}
		var result = data.tracks.items[0];

		console.log(data);
		// console.log('Song:', result.name);
		// console.log('Artist:', result.artists[0].name);
		// console.log('Album:', result.album.name);
		// console.log('Preview URL:', result.href);
	});
}

module.exports = spotifySong;