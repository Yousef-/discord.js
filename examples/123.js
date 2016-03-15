/*
	this bot is a ping pong bot, and every time a message
	beginning with "ping" is sent, it will reply with
	"pong!".
*/

var Discord = require("../");

// Get the email and password
var AuthDetails = require("./modAuth.json");

var bot = new Discord.Client();

//when the bot is ready
bot.on("ready", function () {
	console.log("Ready to begin! Serving in " + bot.channels.length + " channels");
});

//when the bot disconnects
bot.on("disconnected", function () {
	//alert the console
	console.log("Disconnected!");

	//exit node.js with an error
	process.exit(1);
});

//when the bot receives a message
bot.on("message", function (msg) {

    if (msg.content.indexOf("ping") === 0)
    {
        bot.setChannelName(msg.channel, "new name");
    }

    if (msg.content.indexOf("~fuck") === 0) {
        bot.kickMember(msg.author, bot.server);
    }



});

bot.login(AuthDetails.email, AuthDetails.password);