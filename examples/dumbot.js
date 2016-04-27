//setting stuff (dont mess with it)
{
    var Discord = require("../");
    // Get the email and password
    var AuthDetails = require("./auth.json");
    var bot = new Discord.Client();
    var request = require("superagent");
    fs = require('fs');
}

//global variables
{
    var counter = 0;
    var d = new Date(); //date: time = current time
    var time = d.toString();
}

//actual fuctions :P
{
    //wait func wait(ms)
    function wait(ms) {
        var d = new Date();
        var d2 = null;
        do { d2 = new Date(); }
        while (d2 - d < ms);
    }

    //check in arrays
    function isInArray(value, array) {
        return array.indexOf(value) > -1;
    }

    //clean
    function clean(msg, limit) {
        var myMsgs = msg.channel.messages.getAll("author", bot.user);
        for (var i = 0, len = myMsgs.length - limit; i < len; i++)
            bot.deleteMessage(myMsgs[i]);
    }

    //twitch
    function twitch(bot, msg, suffix) {
        require("request")("https://api.twitch.tv/kraken/streams/" + suffix,
        function (err, res, body) {
            var stream = JSON.parse(body);
            if (stream.stream) {
                bot.sendMessage(msg.channel, suffix
                    + " is online, playing "
                    + stream.stream.game
                    + "\n" + stream.stream.channel.status
                    + "\n" + stream.stream.channel.url)
            } else {
                bot.sendMessage(msg.channel, suffix + " is offline")
            }
        });
    }

    //image edit
    function edit(msg, meme) {
        var tags = msg.content.split('"');
        //bot.sendMessage(msg.channel,"tag 1:(" + tags[1]+") tag3:(" + tags[3] +")");
        var Imgflipper = require("imgflipper");
        var imgflipper = new Imgflipper(AuthDetails.imgflip_username, AuthDetails.imgflip_password);
        imgflipper.generateMeme(meme, tags[1] ? tags[1] : "", tags[3] ? tags[3] : "", function (err, image) {

            bot.sendMessage(msg.channel, image);
        });
    }

    //type can be "text" or "pic" or "gif"
    function action(msg, trigger, type, reply) {

        var message = filter(msg);
        if (typeof message === "string")
            message = message.trim();

        if (message == trigger) {

            if (type == "text")
                bot.sendMessage(msg.channel, reply);
            else if (type == "pic")
                bot.sendFile(msg.channel, reply, "pic.png");
            else if (type == "gif")
                bot.sendFile(msg.channel, reply, "pic.gif");
            else if (type == "clean") {
                clean(msg, 0);
                counter = 0;
            }
            else if (type == "join") {
                bot.joinServer(msg.content.substring(6));
                counter = 0;
            }
            else if (type == "twitch") {
                bot.sendMessage(msg.channel, twitch(bot, msg, msg.content.substring(8)));
            }
            else if (type == "disconnect") {
                //alert the console
                console.log("Disconnected!");
                //exit node.js with an error
                process.exit(1);
            }
            else if (type == "edit") {
                edit(msg, reply);
            }

            counter++;
            if (counter == 10) //to prevent spam
            {
                clean(msg, 1);
                counter = 0;
            }
        }
    }

    //the word filter
    function filter(msg) {
        //the filter
        {
            var commandFinder = new RegExp("!\\w+|!\\s");
            var message = msg.content.toLowerCase(); // use "message" for reading, use "msg" for writing
            var a = commandFinder.exec(message);
            if (a !== null)
                return message = " " + a + " ";
            //var command = message.cleanContent.match(commandFinder)[0].substring(1);
        }

    }

    //commands
    function command(msg, code) {
        var message = filter(msg);
        //testing
        if (code == 1) {
            action(msg, "!disco", "disconnect", "disco");
            action(msg, "!join", "join", "join")
            action(msg, "!server", "text", "servers: " + bot.servers);//prints all servers
            z = 0;
            action(msg, "!channels", "text", bot.servers[z].channels[0] + " 0" + bot.servers[z].channels[1] + " 1"
                + bot.servers[z].channels[2] + " 2" + bot.servers[z].channels[3] + " 3" + bot.servers[z].channels[4] + " 4"
                + bot.servers[z].channels[5] + " 5" + bot.servers[z].channels[6] + " 6" + bot.servers[z].channels[7] + " 7"); //prints seven channels of a server
            action(msg, "!test1", "text", msg.server); //whats the server name
            action(msg, "!time", "text", time); //whats the time

        }
        //boku no only
        if (code == 2) {
            action(msg, "!cutie", "pic", "C:/Users/Yousef/Google Drive/botfiles/!cutie.png");
            action(msg, "!boku", "pic", "C:/Users/Yousef/Google Drive/botfiles/!boku.png");
            action(msg, "rawr", "text", "VoHiYo how are you");
            action(msg, "!familiarfaces", "pic", "C:/Users/Yousef/Google Drive/botfiles/!familiarfaces.png");
        }
        //nochill only
        if (code == 4) {
            action(msg, "!peeves", "pic", "C:/Users/Yousef/Google Drive/botfiles/peeves/peeves" + Math.floor((Math.random() * 7) + 1) + ".png");
            action(msg, "!yumi", "pic", "C:/Users/Yousef/Google Drive/botfiles/!yumi.png");
            action(msg, "!ftm", "text", " SwiftRage **#FuckTheMods2016**  SwiftRage:flip");
        }
        //global
        {
            action(msg, "!todd", "edit", 65829746);
            action(msg, "!goodluck", "text", "https://www.youtube.com/watch?v=gjVmeKWOsEU");
            action(msg, "!nuclear", "text", "https://www.youtube.com/watch?v=gn7AKFy3h94");
            action(msg, "!shinyteeth", "text", "http://hestia.dance/");
            action(msg, "!lolidance", "text", "http://loli.dance/");
            action(msg, "!finalmix", "text", "https://www.youtube.com/watch?v=NpYqFJxVuBc");
            action(msg, "!ocelot", "text", "https://www.youtube.com/watch?v=kCcfhCvoEfI");
            action(msg, "!todduhira", "text", "https://www.youtube.com/watch?v=yvGXCisAaR4");
            action(msg, "!hentai", "text", "VoHiYo http://nhentai.net/g/" + Math.floor((Math.random() * 161915) + 1) + "/");
            action(msg, "!twitch", "twitch", "twitch");
            action(msg, "!completelyerect", "pic", "C:/Users/Yousef/Google Drive/botfiles/erect.png");
            action(msg, "!smug", "pic", "C:/Users/Yousef/Google Drive/botfiles/smug/smug" + Math.floor((Math.random() * 48) + 1) + ".png");
            action(msg, "!mmg", "pic", "G:/pics/lewdss/mech porn/mechs-monster-girl (" + Math.floor((Math.random() * 127) + 1) + ").jpg");
            action(msg, "!pleasure", "pic", "C:/Users/Yousef/Google Drive/botfiles/!pleasure.jpg");
            action(msg, "!waitwhat", "pic", "C:/Users/Yousef/Google Drive/botfiles/wait what.PNG");
            action(msg, "!faggot", "pic", "C:/Users/Yousef/Google Drive/botfiles/faggot.PNG");
            action(msg, "!objection", "pic", "C:/Users/Yousef/Google Drive/botfiles/objection.png");
            action(msg, "!prettygood", "pic", "C:/Users/Yousef/Google Drive/botfiles/prettygood.gif");
            action(msg, "!ora", "pic", "C:/Users/Yousef/Google Drive/botfiles/!ora.jpg");
            action(msg, "!stop", "pic", "C:/Users/Yousef/Google Drive/botfiles/!stop.png");
            action(msg, "!bruh", "pic", "C:/Users/Yousef/Google Drive/botfiles/bruh.png");
            action(msg, "!seriously", "pic", "C:/Users/Yousef/Google Drive/botfiles/seriously.gif");
            action(msg, "!ok", "pic", "C:/Users/Yousef/Google Drive/botfiles/ok.jpg");
            action(msg, "!anime", "pic", "C:/Users/Yousef/Google Drive/botfiles/anime.jpg");
            action(msg, "!fine", "pic", "C:/Users/Yousef/Google Drive/botfiles/this is fine.jpg");
            action(msg, "!notlying", "pic", "C:/Users/Yousef/Google Drive/botfiles/totally not lying.jpg");
            action(msg, "!undertale", "pic", "C:/Users/Yousef/Google Drive/botfiles/undertale.jpg");
            action(msg, "!fite", "pic", "C:/Users/Yousef/Google Drive/botfiles/fite.jpg");
            action(msg, "!boner", "pic", "C:/Users/Yousef/Google Drive/botfiles/boner.gif");
            action(msg, "!rekt", "pic", "C:/Users/Yousef/Google Drive/botfiles/rekt.gif");
            action(msg, "!muda", "pic", "C:/Users/Yousef/Google Drive/botfiles/roller.gif");
            action(msg, "!wrong", "pic", "C:/Users/Yousef/Google Drive/botfiles/wrong.jpg");
            action(msg, "!bullshit", "pic", "C:/Users/Yousef/Google Drive/botfiles/bullshit.jpg");
            action(msg, "!notlikethis", "pic", "C:/Users/Yousef/Google Drive/botfiles/notlikethis.png");
            action(msg, "!stfu", "pic", "C:/Users/Yousef/Google Drive/botfiles/stfu.png");
            action(msg, "!moe", "pic", "C:/Users/Yousef/Google Drive/botfiles/MOE.jpg");
            action(msg, "!ragecancel", "pic", "C:/Users/Yousef/Google Drive/botfiles/ragecancel.gif");
            action(msg, "!lewd", "pic", "C:/Users/Yousef/Google Drive/botfiles/lewd/lewd" + Math.floor((Math.random() * 5) + 1) + ".png");
            action(msg, "!spoopy", "pic", "C:/Users/Yousef/Google Drive/botfiles/spooky/spook" + Math.floor((Math.random() * 5) + 1) + ".gif");
            action(msg, "!cute", "pic", "C:/Users/Yousef/Google Drive/botfiles/cute/cute" + Math.floor((Math.random() * 3) + 1) + ".png");
            action(msg, "!gitgud", "pic", "C:/Users/Yousef/Google Drive/botfiles/gitgud/gitgud" + Math.floor((Math.random() * 9) + 1) + ".png");
            action(msg, "!dio", "pic", "C:/Users/Yousef/Google Drive/botfiles/dio.jpg");
            action(msg, "!pleasure", "pic", "C:/Users/Yousef/Google Drive/botfiles/!pleasure.jpg");
            action(msg, "!erected", "pic", "C:/Users/Yousef/Google Drive/botfiles/!erected.jpg");
            action(msg, "!feelsgood", "pic", "C:/Users/Yousef/Google Drive/botfiles/!feelsgood.jpg");
            action(msg, "!hard", "pic", "C:/Users/Yousef/Google Drive/botfiles/!hard.png");
            action(msg, "!jackass", "pic", "C:/Users/Yousef/Google Drive/botfiles/!jackass.png");
            action(msg, "!nope", "pic", "C:/Users/Yousef/Google Drive/botfiles/!no.png");
            action(msg, "!sigh", "pic", "C:/Users/Yousef/Google Drive/botfiles/!sigh.png");
            action(msg, "!ys", "pic", "C:/Users/Yousef/Google Drive/botfiles/!ys.jpg");
            action(msg, "!asahi", "pic", "C:/Users/Yousef/Google Drive/botfiles/!asahi.jpg");
            action(msg, "!awoof", "pic", "C:/Users/Yousef/Google Drive/botfiles/!awoof.jpg");
            action(msg, "!lucifer", "pic", "C:/Users/Yousef/Google Drive/botfiles/!lucifer.png");
            action(msg, "!discomfort", "pic", "C:/Users/Yousef/Google Drive/botfiles/!discomfort.png");
            action(msg, "!merkabah", "pic", "C:/Users/Yousef/Google Drive/botfiles/!merkabah.png");
            action(msg, "!elienokiseki", "pic", "C:/Users/Yousef/Google Drive/botfiles/!elienokiseki.jpg");
            action(msg, "!camplaslow", "pic", "C:/Users/Yousef/Google Drive/botfiles/camplaslow.png");
            action(msg, "!trailsintheshill", "pic", "C:/Users/Yousef/Google Drive/botfiles/!trailsintheshill.png");
            action(msg, "!short", "pic", "C:/Users/Yousef/Google Drive/botfiles/!short.jpg");
        }
        //clean
        action(msg, "!clean", "clean", "clean")
    }
}

//when the bot is ready
bot.on("ready", function () {
    bot.setPlayingGame(" with no one");
    console.log("starting at " + time);
    console.log("Ready to begin! Serving in " + bot.channels.length + " channels, " + bot.servers.length + " servers");
    console.log("servers: " + bot.servers)
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
    if (msg != null) {
        if (msg.author == bot.user) {
        }
        else {
            //sever specific commands
            for (var i = 0; i < bot.servers.length; i++) {
                var serv = bot.servers[i];
                //check server
                if (isInArray(msg.channel, serv.channels)) {//this is kinda useless but its for safty, and i dont want to remove it now :P
                    if (serv == "testing")
                        command(msg, 1);
                    if (serv == "Boku no Video Games" || serv == "Boku no Lewds")
                        command(msg, 2);
                    if (serv == "Camp Laslow")
                        command(msg, 3);
                    if (serv == "Hype Nig (No Space)" && msg.channel == bot.channels[3]) //nochill only
                        command(msg, 4);
                }
            }
        }
    }
});

bot.login(AuthDetails.email, AuthDetails.password);