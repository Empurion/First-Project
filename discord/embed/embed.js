var embed = require('./embed.json')
const Discord = require('discord.js');
const fs = require('fs')
const empernet = require('../../empernet/empernet.js')


async function updateShop(command, client, country, itemId){
if(command === "set"){
    embed = new Discord.RichEmbed()
    .setAuthor(client.user.username)
    .setTitle("Shop")
    .addField(country,'**Blueprints**')

    embed[country] = embed
}
if(command ==="add"){
    embed[country] = new Discord.RichEmbed()
    .addfield(itemId)

}
if(command === "delete"){

}

    return embed[country]
} module.exports = {updateShop}