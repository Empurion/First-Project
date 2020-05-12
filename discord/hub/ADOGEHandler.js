//PLUGINS




//DIRECTORIES
const randomItem = require('random-item');

//CLASSES

//FILES
const Empernet = require('../empernet/class/data/discordServer.json')
const embed = require('../embed/embed.js')
const main = require('../empernet/main.js')



//MESSAGE COMES IN
async function message(user, message, client){
if (user.id === "192359884073730048" || "339366818571354113"){user.trusted = "true"}




//ASSIGN OBJECTS
var discordUser = client.guilds.get('591738224561618969').members.get(user.id)
var discordServer = client.guilds.get("591738224561618969")

const args = message.content.trim().split(/ +/g);


console.log(user)




/////////////////////FIRST WORD

switch(args[0]){

    case ".rule":


    break;

    case ".blacklist":


    break;
    
    case ".empernet":
        if(!userID.trusted === "true"){message.reply("You dont have the proper rights")}
        let cEmpernet = require('./commands/empernet.js')
        cEmpernet.command(args, discordUser, user, message, discordServer, Empernet)
    break;


    case ".travel":
        let cTravel = require('./commands/travel.js')
        cTravel.command(args, discordUser, user, message, discordServer, Empernet)
    break;


    case ".roam":
        let cRoam = require('./commands/roam.js')
        cRoam.command(args, discordUser, user, message, discordServer, Empernet)
    break;


    case ".work":
        let cWork = require('./commands/work.js')
        cWork.command(args, discordUser, user, message, discordServer, Empernet)
    break;

    case ".show":
        let cShow = require('/commands/show.js')
        cShow.command(args, discordUser, user, message, discordServer, Empernet)
    }

} module.exports = {message}