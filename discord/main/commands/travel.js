const main = require('../../empernet/main.js')
const roles = require('../../empernet/class/data/roles.json')



///////////////////////////Travel Empernet
async function travel(destination, discordUser, user, discordServer, message, Empernet){
        message.reply("leaving in 5 seconds.")
    setTimeout(() => {
        discordUser.addRole("648828708278239261")
        discordUser.removeRole(Empernet.TheRing.id)
        discordUser.removeRole(Empernet.Europe.id)
        discordUser.removeRole(Empernet.Asia.id)
        discordUser.removeRole(Empernet.NorthAmerica.id)
        discordUser.removeRole(Empernet.SouthAmerica.id)
        discordUser.removeRole(Empernet.Africa.id)
        discordUser.removeRole(Empernet.Australia.id)
    }, 5000)
    setTimeout(() => {
        discordServer.channels.get("700006164498350093").send("<@" + user.id + ">, arriving in 5 seconds");
    }, 55000)
    setTimeout(() => {
        discordUser.removeRole("648828708278239261")
        discordUser.addRole(roles[destination].id)
    }, 60000)
}


async function command(args, discordUser, user, message, discordServer, Empernet){


if(!args[2]){args[2] = " "}
switch(args[1].toLowerCase() + " " + args[2].toLowerCase()){


    case Europe.name.toLowerCase() + "  " :
        if(discordUser.roles.has(Empernet.Europe.id)){message.reply("You're already there!")}
        else {travel("europe", discordUser, user, discordServer, message, Empernet)}
    break;


    case NorthAmerica.name.toLowerCase():
        if(discordUser.roles.has(roles.northAmerica.id)){message.reply("You're already there!")}
        else {travel("northAmerica", discordUser, user, discordServer, message, Empernet)}
    break;


    case SouthAmerica.name.toLowerCase() :
        if(discordUser.roles.has(roles.southAmerica.id)){message.reply("You're already there!")}
        else {travel("southAmerica", discordUser, user, discordServer, message, Empernet)}
    break;


    case Africa.name.toLowerCase() + "  " :
        if(discordUser.roles.has(roles.africa.id)){message.reply("You're already there!")}
        else {travel("africa", discordUser, user, discordServer, message, Empernet)}
    break;


    case Asia.name.toLowerCase() + "  " :
        if(discordUser.roles.has(roles.asia.id)){message.reply("You're already there!")}
        else {travel("asia", discordUser, user, discordServer, message, Empernet)}
    break;


    case Australia.name.toLowerCase() + "  " :
        if(discordUser.roles.has(roles.australia.id)){message.reply("You're already there!")}
        else {travel("australia", discordUser, user, discordServer, message, Empernet)}
    break;

    default: 
    message.reply(`That's not a valid location! \nCurrent locations are: Europe, North America, South America, Asia, Africa and Australia`)
}
}
module.exports = {command}