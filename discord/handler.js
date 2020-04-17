//PLUGINS
const Discord = require('discord.js');
const requireDir = require('require-dir');
const fs = require('fs');
var SelfReloadJSON = require('self-reload-json');


//DIRECTORIES

const randomItem = require('random-item');

//CLASSES
const User = require('../empernet/class/user.js').default
const Inventory = require('../empernet/class/inventory.js')

//FILES
const empernet = require('../empernet/main.js')
const embeds = require('../discord/embed/embed.json')
const embed = require('../discord/embed/embed.js')
const roam = require("./commands/roam.js")
const resources = require("../empernet/class/data/resources.json")
var blueprints = require("../empernet/class/data/blueprints.json")



//MESSAGE COMES IN
async function message(dummy, userID, user, message, client, Empernet){
if (userID === "192359884073730048"){userID.trusted = "true"}


var guild = client.guilds.get("591738224561618969")



//console.log(randomItem(user[userID]))




    //if(message.member.roles.has("upper management")){upperManagement = true}
const args = message.content.trim().split(/ +/g);
let i = 0
let l = 15
    //while (i < l){ i++
    //    if(user[userID].inventory[i] === itemID)
    //    console.log(user[userID].inventory[i].quantity++)
    //    }


/////////////////////FIRST WORD
switch(args[0]){

    case ".empernet":
        if(!userID.trusted === "true"){message.reply("You dont have the proper rights")}
        let cEmpernet = require('./commands/empernet.js')
        cEmpernet.command(args, userID, message, client, Empernet)
    break;


    case ".travel":
        let travel = require('./commands/travel.js')
        travel.command(args, userID, message, client, Empernet)
    break;


    case ".roam":
        let roam = require('./commands/roam.js')
        roam.command(args, userID, message, client, Empernet)
    break;


    case ".work":
        let work = require('./commands/work.js')
        work.command(args, userID, message, client, Empernet)
    break;

            case "show":
                switch(args[1]){
                    case "resources":
                        console.log(resources)
                        break;
                }
                    case "blueprints":
                        console.log(blueprints)

                        break;
            case "make":
                blueprints.forEach(element => {
                    if (blueprints === args[1]){
                        Blueprint.create(name, resources[blueprints.item1], resources[blueprints.item1])
                    }
                });
                switch(args[1]){

            }

    }

} module.exports = {message}