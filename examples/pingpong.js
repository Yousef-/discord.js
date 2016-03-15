/*
	this bot is a ping pong bot, and every time a message
	beginning with "ping" is sent, it will reply with
	"pong!".
*/

var Discord = require("../");

// Get the email and password
var AuthDetails = require("./auth.json");

var bot = new Discord.Client();

//date: time = current time
{
    var d = new Date();
    var time = d.toString();
}

//wait func wait(ms)
{
    function wait(ms) {
        var d = new Date();
        var d2 = null;
        do { d2 = new Date(); }
        while (d2 - d < ms);
    }
}

//when the bot is ready
bot.on("ready", function () {
    console.log("starting at "+ time );
    console.log("Ready to begin! Serving in " + bot.channels.length + " channels, " + bot.servers.length + " servers");
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
    bot.setPlayingGame("your mom")

   

    // commands
    {
        //var setting for the filter
        {
            var commandFinder = new RegExp("!\\w+\\s\\w+|!\\w+");
            var message = msg.content.toLowerCase(); // only use message for reading, use msg for writing
            var a = commandFinder.exec(message);
        }

        //bypass the filter
        {
            if (msg.everyoneMentioned == true) {
                //wait(4000);
                bot.sendMessage(msg.author, "SwiftRage dont use @ Everyone again SwiftRage !!");
            }
        }

        //for error catching :P
        if (a == null) {
            // do nothing lol
        }

        //the commands
        else {
            message = " " + a + " ";

            //testing shit
            {
                if (message.includes("!fuck") == true) {
                    bot.sendMessage(msg.channel,"~fuck");
                    wait(300);
                }

            }

            //dm shit
            {
                if (message.includes("!hentai") == true) {
                    if (Math.floor((Math.random() * 2) + 1) == 1) {
                        bot.sendMessage(msg.author, "VoHiYo http://www.tsumino.com/Browse/Random");
                    }
                    else {
                        bot.sendMessage(msg.author, "VoHiYo http://nhentai.net/random/");
                    }
                }

                //

                if (message.includes("!animu") == true) {
                    bot.sendMessage(msg.author, "VoHiYo http://www.crunchyroll.com/random/anime?random_ref=topbar");
                    }
            }

            //fun shit (text)
            {
                //dice roll
                if (message.includes("!d6") == true) {
                    bot.sendMessage(msg.channel, "you got " + Math.floor((Math.random() * 6) + 1));
                }
                //coin toss
                if (message.includes("!coin") == true) {
                    if (Math.floor((Math.random() * 2) + 1) == 1)
                        bot.sendMessage(msg.channel, "heads");
                    else
                        bot.sendMessage(msg.channel, "tailes");
                }
            }

            //fun shit (links)
            {
                if (message.includes("!good luck") == true) {
                    bot.sendMessage(msg.channel, "https://www.youtube.com/watch?v=gjVmeKWOsEU");
                }

                if (message.includes("!sao") == true) {
                    bot.sendMessage(msg.channel, "http://www.hulu.com/sword-art-online");
                }
            }

            //twitch links
            {
                if (message.includes("!arcadea") == true) {
                    bot.sendMessage(msg.channel, "https://www.twitch.tv/arcadealive");
                }
                if (message.includes("!mat") == true) {
                    bot.sendMessage(msg.channel, "https://www.twitch.tv/matthewmcmuscles");
                }
                if (message.includes("!best friends") == true) {
                    bot.sendMessage(msg.channel, "https://www.twitch.tv/superbestfriendsplay");
                }
                if (message.includes("!karp") == true) {
                    bot.sendMessage(msg.channel, "https://www.twitch.tv/usefulmagikarp");
                }
                if (message.includes("!dood") == true) {
                    bot.sendMessage(msg.channel, "https://www.twitch.tv/maximilian_dood");
                }
                if (message.includes("!trihard") == true) {
                    bot.sendMessage(msg.channel, "https://www.twitch.tv/trihex");
                }
                if (message.includes("!cirno") == true) {
                    bot.sendMessage(msg.channel, "https://www.twitch.tv/cirno_tv");
                }
            }

            //commands
            {
                if (message.includes("!commands") == true) {
                    bot.sendMessage(msg.channel, "http://pastebin.com/79mjZSBV");
                }
            }
            //TODO: add !rip

            //fun shit (pics)
            {
                
                if (message.includes("!dio") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/dio.jpg", "dio.png");
                }
                if (message.includes("!familiarfaces") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!familiarfaces.jpg", "!familiarfaces.png");
                }
                if (message.includes("!asahi") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!asahi.jpg", "!asahi.png");
                }
                if (message.includes("!awoof") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!awoof.jpg", "!awoof.png");
                }
                if (message.includes("!lucifer") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!lucifer.png", "!lucifer.png");
                }
                if (message.includes("!merkabah") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!merkabah.png", "!merkabah.png");
                }
                //TODO: add more !stop pics
                if (message.includes("!stop") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!stop.png", "!stop.png");
                }
                if (message.includes("!elienokiseki") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!elienokiseki.jpg", "elienokiseki.png");
                }
                if (message.includes("!camplaslow") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/camplaslow.png", "camplaslow.png");
                }
                if (message.includes("!trailsintheshill") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!trailsintheshill.png", "trailsintheshill.png");
                }
                if (message.includes("!short") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!short.jpg", "short.png");
                }
                if (message.includes("!bruh") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/bruh.png", "bruh.png");
                }
                if (message.includes("!seriously") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/seriously.gif", "seriously.gif");
                }
                if (message.includes("!ok") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/ok.jpg", "ok.png");
                }
                if (message.includes("!anime") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/anime.jpg", "anime.png");
                }
                if (message.includes("!thisisfine") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/this is fine.jpg", "fine.png");
                }
                if (message.includes("!not lying") == true || message.includes("!notlying") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/totally not lying.jpg", "this is a lie.png");
                }
                if (message.includes("!undertale") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/undertale.jpg", "undertale.png");
                }
                if (message.includes("!fite") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/fite.jpg", "fite.png");
                }
                if (message.includes("!boner") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/boner.gif", "boner.gif");
                }
                if (message.includes("!rekt") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/rekt.gif", "rekt.gif");
                }
                if (message.includes("!muda") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/roller.gif", "roller.gif");
                }
                if (message.includes("!wrong") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/wrong.jpg", "wrong.png")
                }
                if (message.includes("!bullshit") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/bullshit.jpg", "bullshit.png")
                }
                if (message.includes("!erect") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/erect.jpg", "erect.png")
                }
                if (message.includes("!notlikethis") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/notlikethis.png", "notlikethis.png")
                }
                if (message.includes("!stfu") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/stfu.png", "stfu.png")
                }
                if (message.includes("!moe") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/MOE.jpg", "MOE.png")
                }
                if (message.includes("!ragecancel") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/ragecancel.gif", "ragecancel.gif")
                }
                if (message.includes("!lewd") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/lewd/lewd" + Math.floor((Math.random() * 4) + 1) + ".png", "lewd.png")
                }
                if (message.includes("!smug") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/smug/smug" + Math.floor((Math.random() * 47) + 1) + ".png", "lewd.png")
                }
                if (message.includes("!spoopy") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/spooky/spook" + Math.floor((Math.random() * 5) + 1) + ".gif", "spoopy.gif")
                }
                if (message.includes("!cute") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/cute/cute" + Math.floor((Math.random() * 3) + 1) + ".png", "cute.png")
                }
                if (message.includes("!gitgud") == true) {
                    bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/gitgud/gitgud" + Math.floor((Math.random() * 9) + 1) + ".png", "gitgud.png")
                }
            }

            //control commands
            {
                if (message.includes("!join") == true) {
                    bot.joinServer(msg.content.substring(6));
                }

                if (message.includes("!clean") == true) {
                    // DELETE ALL MESSAGES WITH BOT AS AUTHOR
                    {
                        var myMsgs = msg.channel.messages.getAll("author", bot.user);
                        for (var i = 0, len = myMsgs.length; i < len; i++) {
                            bot.deleteMessage(myMsgs[i]);
                        }
                    }
                }
            }
        }
    }
});

bot.login(AuthDetails.email, AuthDetails.password);