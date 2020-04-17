const empernet = require('../../empernet/main.js')
const roles = require('../../empernet/class/data/roles.json')

async function command(args, userID, user, message, client, Empernet){
let tUser = client.guilds.get('591738224561618969').members.get(userID)


if(!args[2]){args[2] = " "}
switch(args[1].toLowerCase() + " " + args[2].toLowerCase()){


    case Europe.name.toLowerCase() + "  " :
        if(tUser.roles.has(roles.europe.id)){message.reply("You're already here!")}
        else {empernet.travel("europe", message.channel.parent.name.toLowerCase(), userID, client, message)}
    break;


    case NorthAmerica.name.toLowerCase():
        if(tUser.roles.has(roles.northAmerica.id)){message.reply("You're already here!")}
        else {empernet.travel("northAmerica", message.channel.parent.name.toLowerCase(), userID, client, message)}
    break;


    case SouthAmerica.name.toLowerCase() :
        if(tUser.roles.has(roles.southAmerica.id)){message.reply("You're already here!")}
        else {empernet.travel("southAmerica", message.channel.parent.name.toLowerCase(), userID, client, message)}
    break;


    case Africa.name.toLowerCase() + "  " :
        if(tUser.roles.has(roles.africa.id)){message.reply("You're already here!")}
        else {empernet.travel("africa", message.channel.parent.name.toLowerCase(), userID, client, message)}
    break;


    case Asia.name.toLowerCase() + "  " :
        if(tUser.roles.has(roles.asia.id)){message.reply("You're already here!")}
        else {empernet.travel("asia", message.channel.parent.name.toLowerCase(), userID, client, message)}
    break;


    case Australia.name.toLowerCase() + "  " :
        if(tUser.roles.has(roles.australia.id)){message.reply("You're already here!")}
        else {empernet.travel("australia", message.channel.parent.name.toLowerCase(), userID, client, message)}
    break;


}
}
module.exports = {command}