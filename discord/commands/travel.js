const empernet = require('../../empernet/main.js')

async function command(args, userID, message, client, Empernet){


if(!args[2]){args[2] = " "}
switch(args[1].toLowerCase() + " " + args[2].toLowerCase()){
    case message.channel.parent.name.toLowerCase() :
        message.reply("You're already there.")
    break;
    case Europe.name.toLowerCase() + "  " :
        empernet.travel("europe", message.channel.parent.name.toLowerCase(), userID, client, message)
    break;
    case NorthAmerica.name.toLowerCase():
        empernet.travel("northAmerica", message.channel.parent.name.toLowerCase(), userID, client, message)
    break;
    case SouthAmerica.name.toLowerCase() :
        empernet.travel("southAmerica", message.channel.parent.name.toLowerCase(), userID, client, message)
    break;
    case Africa.name.toLowerCase() + "  " :
        empernet.travel("africa", message.channel.parent.name.toLowerCase(), userID, client, message)
    break;
    case Asia.name.toLowerCase() + "  " :
        empernet.travel("asia", message.channel.parent.name.toLowerCase(), userID, client, message)
    break;
    case Australia.name.toLowerCase() + "  " :
        empernet.travel("australia", message.channel.parent.name.toLowerCase(), userID, client, message)
    break;
}
}
module.exports = {command}