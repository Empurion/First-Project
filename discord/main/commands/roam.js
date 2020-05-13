const userQueries = require('../../../database/functions/userQueries.js')

async function command(args, DiscordUser, userID, message, DiscordServer, Empernet){

    switch(args[1]){
    
        default:
        userQueries.updateStatus(userID, "roaming")
        message.reply("You're now roaming")
        break;
        
    } 
} module.exports = {command}