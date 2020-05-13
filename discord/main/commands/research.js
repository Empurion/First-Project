const definition = require('../../../database/functions/definitionQueries.js')

async function command(args, DiscordUser, userID, message, DiscordServer, Empernet){

    var researching = "not found"
    var researchObject = "none"

    definition.getAllResources(function(err, resources){
    definition.getAllblueprints(function(err, blueprints){
    definition.getAllItems(function(err, items){
    definition.getAlltechniques(function(err, techniques){

        console.log(args[1])

        for (let i = 0; i < resources.length; i++){
            if(args[1] === resources[i].name){
                researching = resources[i].name
                researchObject = "resource"
                message.reply("research result of " + resources[i].name + " shown here")
            }
        }
        for (let i = 0; i < blueprints.length; i++){
            if(args[1] === blueprints[i].name){
                researching = blueprints[i].name
                researchObject = "blueprint"
                message.reply("research result of " + blueprints[i].name + " shown here")
            }
        }
        for (let i = 0; i < items.length; i++){
            if(args[1] === items[i].name){
                researching = items[i].name
                researchObject = "item"
                message.reply("research result of " + items[i].name + " shown here")
            }
        }
        for (let i = 0; i < techniques.length; i++){
            if(args[1] === techniques[i].name){
                researching = technique[i].name
                researchObject = "technique"
                message.reply("research result of " + techniques[i].name + " shown here")
            }
        }
        if (researching === "not found"){
            message.reply("You didn't specify a valid research. Do you have access to it?")
        }

    })
    })
    })
    })

} module.exports = {command}