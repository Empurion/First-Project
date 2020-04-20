//PLUGINS
const Discord = require('discord.js');
const requireDir = require('require-dir');
const fs = require('fs');
var SelfReloadJSON = require('self-reload-json');
const MessageHandler = require('discord-message-handler').MessageHandler;
const handler = new MessageHandler();


//DIRECTORIES
const randomItem = require('random-item');

//CLASSES

//FILES
const embed = require('./embed/embed.js')
const main = require('../empernet/main.js')



//MESSAGE COMES IN
async function message(dummy, userID, user, message, client, Empernet){
if (userID === "192359884073730048" || "339366818571354113"){userID.trusted = "true"}




//ASSIGN DISCORD OBJECTS
var discordUser = client.guilds.get('591738224561618969').members.get(userID)
var discordServer = client.guilds.get("591738224561618969")
const args = message.content.trim().split(/ +/g);


console.log(message.content)
main.addInventory(user[userID])



/////////////////////FIRST WORD

handler.onCommand("/travel").do((args, rawArgs, message) => {
    message.channel.send(`test...`)
});
switch(args[0]){

    case ".empernet":
        if(!userID.trusted === "true"){message.reply("You dont have the proper rights")}
        let cEmpernet = require('./commands/empernet.js')
        cEmpernet.command(args, discordUser, user, message, discordServer, Empernet)
    break;


    case ".travel":
        let travel = require('./commands/travel.js')
        travel.command(args, discordUser, user, message, discordServer, Empernet)
    break;


    case ".roam":
        let roam = require('./commands/roam.js')
        roam.command(args, discordUser, user, message, discordServer, Empernet)
    break;


    case ".work":
        let work = require('./commands/work.js')
        work.command(args, discordUser, user, message, discordServer, Empernet)
    break;

    case ".show":
        let show = require('/commands/show.js')
        show.command(args, discordUser, user, message, discordServer, Empernet)
    }

} module.exports = {message}