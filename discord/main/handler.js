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
        if(!cachedUsers[userID].trusted === "true"){message.reply("You dont have the proper rights")}
        let cEmpernet = require('./commands/empernet.js')
        cEmpernet.command(User, Empernet, DiscordUser, DiscordServer)
    break;


    case ".travel":
        let cTravel = require('./commands/travel.js')
        cTravel.command(User, Empernet, DiscordUser, DiscordServer)
    break;


    case ".roam":
        let cRoam = require('./commands/roam.js')
        cRoam.command(User, Empernet, DiscordUser, DiscordServer)
    break;


    case ".work":
        let cWork = require('./commands/work.js')
        cWork.command(User, Empernet, DiscordUser, DiscordServer)
    break;

    case ".show":
        let cShow = require('/commands/show.js')
        cShow.command(User, Empernet, DiscordUser, DiscordServer)
    break;

    }
       
} module.exports = {message}

