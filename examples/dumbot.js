﻿
//setting stuff (dont mess with it)
{
    var Discord = require("../");
    // Get the email and password
    var AuthDetails = require("./auth.json");
    var bot = new Discord.Client();
    var request = require("superagent");
}


//actual fuctions :P
{
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

    //check in arrays
    {
        function isInArray(value, array) {
            return array.indexOf(value) > -1;
        }
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

    //for error catching :P
    if (a !== null)
        message = " " + a + " ";

    //sever specific commands
    for (var i = 0; i < bot.servers.length; i++) {
        var serv = bot.servers[i];
        //check server
        if (isInArray(msg.channel, serv.channels)) {//this is kinda useless but its for safty, and i dont want to remove it now :P
            if (serv == "testing")
                command(msg, 0);
            if (serv == "Boku no Video Games" || serv == "Boku no Lewds")
                command(msg, 3);
            if (serv == "Camp Laslow")
                command(msg, 2);
            if (serv == "Hype Nig (No Space)" && msg.channel == bot.channels[3]) //nochill only
                command(msg, 1);
        }
        
    }
});

bot.login(AuthDetails.email, AuthDetails.password);

function command(msg, code)
{

    //var setting for the filter
    {
        var commandFinder = new RegExp("!\\w+|!\\S");
        var message = msg.content.toLowerCase(); // use "message" for reading, use "msg" for writing
        var a = commandFinder.exec(message);
        if (a !== null)
            message = " " + a;
        //var command = message.cleanContent.match(commandFinder)[0].substring(1);
    }
        
    //testing
    if (code == 0) {
        {
            if (message.includes("!join") == true) {
                bot.joinServer(msg.content.substring(6));
            }
                
        };
    }
 
    //boku no video games only
    if (code == 3) {
        if (message.includes("!cutie") == true) {
            bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!cutie.png", "!Cutie.png");
        }
        if (message.includes("rawr") == true) {
            wait(3000);
            bot.sendMessage(msg.channel, "VoHiYo how are you?")
        }
        if (message.includes("!members") == true) {
            bot.sendMessage(msg.channel, "the number of members in this server: " + serv.members.length);
        }
        if (message.includes("!erect") == true) {
            bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/erect.jpg", "erect.png")
        }
        if (message.includes("!smug") == true) {
            bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/smug/smug" + Math.floor((Math.random() * 47) + 1) + ".png", "lewd.png")
        }
        if (message.includes("!familiarfaces") == true) {
            bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!familiarfaces.jpg", "!familiarfaces.png");
        }

    }

//global
    
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
    if (message.includes("!animu") == true) {
        bot.sendMessage(msg.author, "VoHiYo http://www.crunchyroll.com/random/anime?random_ref=topbar");
    } 
}

//fun shit (text)
{
    //dice roll
    if (message.includes("!roll") == true) {
        bot.sendMessage(msg.channel, "you got " + Math.floor((Math.random() * msg.content.substring(6)) + 1));
    }
    //coin toss
    if (message.includes("!coin") == true) {
        if (Math.floor((Math.random() * 2) + 1) == 1)
            bot.sendMessage(msg.channel, "heads");
        else
            bot.sendMessage(msg.channel, "tailes");
    }
    //stare
    if (message.includes("!stare")) {
        bot.sendMessage(msg.channel, "ಠ_ಠ")
    }   
}

//text
{
    //dice roll
    if (message.includes("!roll") == true) {
        bot.sendMessage(msg.channel, "you got " + Math.floor((Math.random() * msg.content.substring(6)) + 1));
           
        //fun shit (links)
        {
            if (message.includes("!goodluck") == true) {
                bot.sendMessage(msg.channel, "https://www.youtube.com/watch?v=gjVmeKWOsEU");
            }

            if (message.includes("!sao") == true) {
                bot.sendMessage(msg.channel, "http://www.hulu.com/sword-art-online");
            }

            if (message.includes("!nuclear") == true) {
                bot.sendMessage(msg.channel, "https://www.youtube.com/watch?v=gn7AKFy3h94");
            }

            if (message.includes("!shinyteeth") == true) {
                bot.sendMessage(msg.channel, "http://hestia.dance/");
            }

            if (message.includes("!lolidance") == true) {
                bot.sendMessage(msg.channel, "http://loli.dance/");
            }

        }
        //coin toss
        if (message.includes("!coin") == true) {
            if (Math.floor((Math.random() * 2) + 1) == 1)
                bot.sendMessage(msg.channel, "heads");
            else
                bot.sendMessage(msg.channel, "tailes");
        }
        //stare
        if (message.includes("!stare")) {
            bot.sendMessage(msg.channel, "ಠ_ಠ")
        }
    }

    //links
    {
        if (message.includes("!goodluck") == true) {
            bot.sendMessage(msg.channel, "https://www.youtube.com/watch?v=gjVmeKWOsEU");
        }
        if (message.includes("!sao") == true) {
            bot.sendMessage(msg.channel, "http://www.hulu.com/sword-art-online");
        }
        if (message.includes("!nuclear") == true) {
            bot.sendMessage(msg.channel, "https://www.youtube.com/watch?v=gn7AKFy3h94");
        }
        if (message.includes("!shinyteeth") == true) {
            bot.sendMessage(msg.channel, "http://hestia.dance/");
        }
        if (message.includes("!lolidance") == true) {
            bot.sendMessage(msg.channel, "http://loli.dance/");
        }
        if (message.includes("!roxasvssora") == true) {
            bot.sendMessage(msg.channel, "https://youtu.be/_2e7bX2oVlQ");
        }
        if (message.includes("!finalmix") == true) {
            bot.sendMessage(msg.channel, "https://www.youtube.com/watch?v=NpYqFJxVuBc");
        }
        if (message.includes("!ocelot") == true) {
            bot.sendMessage(msg.channel, "https://www.youtube.com/watch?v=kCcfhCvoEfI");
        }
        if (message.includes("!todduhira") == true) {
            bot.sendMessage(msg.channel, "https://www.youtube.com/watch?v=yvGXCisAaR4");
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
        if (message.includes("!bestfriends") == true) {
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
        if (message.includes("!gc") == true) {
            bot.sendMessage(msg.channel, "https://www.twitch.tv/gcpositive");
        }
    }

    //pics
    {
        if (message.includes("!completelyerect") == true) {
            bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/erect.jpg", "erect.png")
        }
        if (message.includes("!smug") == true) {
            bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/smug/smug" + Math.floor((Math.random() * 48) + 1) + ".png", "lewd.png")
        }
        if (message.includes("!pleasure") == true) {
            bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!pleasure.jpg", "pleasure.png");
        }
        if (message.includes("!objection") == true) {
            bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/objection.png", "objection.png");
        }
        if (message.includes("!erected") == true) {
            bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!erected.jpg", "!erected.png");
        }
        if (message.includes("!feelsgood") == true) {
            bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!feelsgood.jpg", "!feelsgood.png");
        }
        if (message.includes("!hard") == true) {
            bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!hard.png", "!hard.png");
        }
        if (message.includes("!jackass") == true) {
            bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!jackass.png", "!jackass.png");
        }
        if (message.includes("!no") == true) {
            bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!no.png", "!no.png");
        }
        if (message.includes("!sigh") == true) {
            bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!sigh.png", "!sigh.png");
        }
        if (message.includes("!ys") == true) {
            bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!ys.jpg", "ys.png");
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
        if (message.includes("!discomfort") == true) {
            bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!discomfort.png", "!discomfort.png");
        }
        if (message.includes("!merkabah") == true) {
            bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!merkabah.png", "!merkabah.png");
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
        if (message.includes("!prettygood") == true) {
            bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/prettygood.gif", "prettygood.gif");
        }
        if (message.includes("!dio") == true) {
            bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/dio.jpg", "dio.png");
        }
        if (message.includes("!ora") == true) {
            bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!ora.jpg", "ora.png");
        }
        if (message.includes("!stop") == true) {
            bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!stop.png", "!stop.png");
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
        if (message.includes("!notlying") == true) {
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
            bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/lewd/lewd" + Math.floor((Math.random() * 5) + 1) + ".png", "lewd.png")
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
}

//fun shit (pics)
{
    if (message.includes("!dio") == true) {
        bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/dio.jpg", "dio.png");
    }
    if (message.includes("!ora") == true) {
        bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!ora.jpg", "ora.png");
    }
    if (message.includes("!stop") == true) {
        bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!stop.png", "!stop.png");
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
    if (message.includes("!notlying") == true) {
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
    if (message.includes("!spoopy") == true) {
        bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/spooky/spook" + Math.floor((Math.random() * 5) + 1) + ".gif", "spoopy.gif")
    }
    if (message.includes("!cute") == true) {
        bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/cute/cute" + Math.floor((Math.random() * 3) + 1) + ".png", "cute.png")
    }
    if (message.includes("!gitgud") == true) {
        bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/gitgud/gitgud" + Math.floor((Math.random() * 9) + 1) + ".png", "gitgud.png")
    }

    if (message.includes("!pleasure") == true) {
        bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!pleasure.jpg", "pleasure.png");
    }
    if (message.includes("!erected") == true) {
        bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!erected.jpg", "!erected.png");
    }
    if (message.includes("!feelsgood") == true) {
        bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!feelsgood.jpg", "!feelsgood.png");
    }
    if (message.includes("!hard") == true) {
        bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!hard.png", "!hard.png");
    }
    if (message.includes("!jackass") == true) {
        bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!jackass.png", "!jackass.png");
    }
    if (message.includes("!nope") == true) {
        bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!no.png", "!no.png");
    }
    if (message.includes("!sigh") == true) {
        bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!sigh.png", "!sigh.png");
    }
    if (message.includes("!smug") == true) {
        if (Math.floor((Math.random() * 2) + 1) == 1)
            bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!smug.png", "!smug.png");
        else
            bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/smug/smug" + Math.floor((Math.random() * 47) + 1) + ".png", "lewd.png")

    }
    if (message.includes("!ys") == true) {
        bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!ys.jpg", "ys.png");
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
    if (message.includes("!discomfort") == true) {
        bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!discomfort.png", "!discomfort.png");
    }
    if (message.includes("!merkabah") == true) {
        bot.sendFile(msg.channel, "C:/Users/Yousef/Google Drive/botfiles/!merkabah.png", "!merkabah.png");
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
    if (message.includes("!roxasvssora") == true) {
        bot.sendMessage(msg.channel, "https://youtu.be/_2e7bX2oVlQ");
    }
    if (message.includes("!finalmix") == true) {
        bot.sendMessage(msg.channel, "https://www.youtube.com/watch?v=NpYqFJxVuBc");
    }
    if (message.includes("!ocelot") == true) {
        bot.sendMessage(msg.channel, "https://www.youtube.com/watch?v=kCcfhCvoEfI");
    }
    if (message.includes("!todduhira") == true) {
        bot.sendMessage(msg.channel, "https://www.youtube.com/watch?v=yvGXCisAaR4");
    }

}

if (message.includes("!clean") == true) {
    var myMsgs = msg.channel.messages.getAll("author", bot.user);
    for (var i = 0, len = myMsgs.length; i < len; i++)
        bot.deleteMessage(myMsgs[i]);
}
  
}

bot.login(AuthDetails.email, AuthDetails.password);





