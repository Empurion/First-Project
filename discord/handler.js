//PLUGINS
const Discord = require('discord.js');
const requireDir = require('require-dir');
const fs = require('fs');
var SelfReloadJSON = require('self-reload-json');


//DIRECTORIES
const randomItem = require('random-item');

//CLASSES

//FILES



//MESSAGE COMES IN
async function message(dummy, userID, user, message, client, Empernet){
if (userID === "192359884073730048"){userID.trusted = "true"}


var guild = client.guilds.get("591738224561618969")
const args = message.content.trim().split(/ +/g);

console.log(message.content)



/////////////////////FIRST WORD
switch(args[0]){

    case ".empernet":
        if(!userID.trusted === "true"){message.reply("You dont have the proper rights")}
        let cEmpernet = require('./commands/empernet.js')
        cEmpernet.command(args, userID, user, message, client, Empernet)
    break;


    case ".travel":
        let travel = require('./commands/travel.js')
        travel.command(args, userID, user, message, client, Empernet)
    break;


    case ".roam":
        let roam = require('./commands/roam.js')
        roam.command(args, userID, user, message, client, Empernet)
    break;


    case ".work":
        let work = require('./commands/work.js')
        work.command(args, userID, user, message, client, Empernet)
    break;

    case "show":

        switch(args[1]){
            case "resources":
                break;
            
            case "blueprints":

                break;

            case "make":
                blueprints.forEach(element => {
                    if (blueprints === args[1]){
                        Blueprint.create(name, resources[blueprints.item1], resources[blueprints.item1])
                    }
                });
            }
    }

} module.exports = {message}