//PLUGINS



//DIRECTORIES

//Functions

//CLASSES

//FILES



//MESSAGE COMES IN
async function message(Empernet, userID, message, client){
    const requireDir = require('require-dir');
    let cachedUsers = requireDir('../../empernet/localdata/users');



//ASSIGN OBJECTS
var DiscordUser = client.guilds.get('591738224561618969').members.get(userID)
var DiscordServer = client.guilds.get("591738224561618969")

const args = message.content.trim().split(/ +/g);



/////////////////////FIRST WORD

switch(args[0]){

    case ".empernet":
        let cEmpernet = require('./commands/empernet.js')
        cEmpernet.command(args, DiscordUser, userID, message, DiscordServer, Empernet)
    break;


    case ".travel":
        let cTravel = require('./commands/travel.js')
        cTravel.command(args, DiscordUser, userID, message, DiscordServer, Empernet)
    break;


    case ".roam":
        let cRoam = require('./commands/roam.js')
        cRoam.command(args, DiscordUser, userID, message, DiscordServer, Empernet)
    break;


    case ".work":
        let cWork = require('./commands/work.js')
        cWork.command(args, DiscordUser, userID, message, DiscordServer, Empernet)
    break;

    case ".show":
        let cShow = require('./commands/show.js')
        cShow.command(args, DiscordUser, userID, message, DiscordServer, Empernet)
    break;

    case ".research":
        let cResearch = require('./commands/research.js')
        cResearch.command(args, DiscordUser, userID, message, DiscordServer, Empernet)

    }
       
} module.exports = {message}

