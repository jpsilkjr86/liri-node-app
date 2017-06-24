// Capture all user arguments in userCmd
var userCmd = process.argv;

// object with methods for handling user commands
var inputSwitch = require('./input-switch.js');

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
	// push all non-empty userCmd's onto argArray
	for (let i = 3; i < userCmd.length; i++) {
		if (userCmd[i] != null && userCmd[i] !== '' && userCmd[i] !== ' ') {
			argArray.push(userCmd[i]);
		}
	}
	// join all argArray elements together into a string with a space between each
	if (argArray.length > 0) {
		argString = argArray.join(' ');
	}
}

// for any inputs with no extra argument after userCmd[2]
if (argArray.length === 0) {
	// sends the main argument (userCmd[2]) to inputSwitch.noArg() function
	inputSwitch.noArg(userCmd[2]);
}

// for any inputs with an argument after the main command (userCmd[3] and after)
else {
	// sends the main argument (userCmd[2]) and the stringifed arguments from 
	// userCmd[3] and after to inputSwitch.withArg() function.
	inputSwitch.withArg(userCmd[2], argString);
}