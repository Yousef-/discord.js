"use strict";

class test {
    constructor()
    {
    }
}

function Do(serv, msg)
{
    var message = msg.content.toLowerCase();


    //TODO: manage info
    if (message.includes("!info") == true) {
        var index = msg.content.indexOf("@");
        if (index > 5)
            bot.sendMessage(msg.channel, "<" + msg.content.substring(index) + " : " + serv.rolesOfUser("<" + msg.content.substring(index)));//
    }


    //TODO: manage roles
    if (message.includes("!roles") == true) {
        bot.sendMessage(msg.channel, "the roles of this server are: " + serv.roles[0]);
    }
    //if (message.includes("!members") == true) {
    //    bot.sendMessage(msg.channel, "the number of members in this server: " + serv.members.length);
    //}


    if (message.includes("!test") == true) {
        bot.sendMessage(msg.channel, "VoHiYo " + serv);
    }

    //if (message.includes("!test5") == true) {
    // var usr = @159386718712102912;
    //var user_permissions = msg.channel.permissionsOf(usr);

    //var can_mention_everyone = user_permissions.hasPermission("mentionEveryone");

    //bot.sendMessage(msg.channel,);

    //bot.banMember("<" + msg.content.substring(index), serv);

    //kickMember(user, server, function (err) { console.log(err) })
    //kickMember(user, server, function(err){console.log(err)}).catch(console.log)

    //}


    if (message.includes("!love")) {
        bot.sendMessage(msg.channel, msg.author + " I love you <<33")
    }

}
