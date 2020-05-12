var embed = require('./embed.json')
const Discord = require('discord.js');
const fs = require('fs')
const empernet = require('../../empernet/main.js')





async function command(){

    
    embed = new Discord.RichEmbed()
    .setAuthor(client.user.username)
    .setTitle("Profile")
    .addField(country,'**Blueprints**')
}

module.exports = {command}