const userQueries = require('../../../database/functions/userQueries.js')

async function command(args, DiscordUser, userID, message, DiscordServer, Empernet){

    switch(args[1]){
    
        default:
        userQueries.getStatus(userID, function (err, status){
        switch (status[0].status){

            case "working":
                message.reply("You're already working!")
            break;
            case "roaming":
                message.reply("You're currently roaming!")
            break;
            default:
                userQueries.updateStatus(userID, "working")
                message.reply("You're now working")
            break;
        }

        });        
    } 
} module.exports = {command}