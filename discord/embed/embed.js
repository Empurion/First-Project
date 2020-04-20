var embed = require('./embed.json')
const Discord = require('discord.js');
const fs = require('fs')
const empernet = require('../../empernet/main.js')


async function inventory(user, userID, message){

    console.log(user[userID])

embed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setTitle("Inventory")
.addField("1", user[userID].Inventory.slot1, true)
.addField("2", user[userID].Inventory.slot2, true)
.addField("3", user[userID].Inventory.slot3, true)
.addField("4", user[userID].Inventory.slot4, true)
.addField("5", user[userID].Inventory.slot5, true)
.addField("6", user[userID].Inventory.slot6, true)
.addField("7", user[userID].Inventory.slot7, true)
.addField("8", user[userID].Inventory.slot8, true)
.addField("9", user[userID].Inventory.slot9, true)
.addField("10", user[userID].Inventory.slot10, true)
.addField("11", user[userID].Inventory.slot11, true)
.addField("12", user[userID].Inventory.slot12, true)
.addField("13", user[userID].Inventory.slot13, true)
.addField("14", user[userID].Inventory.slot14, true)
.addField("15", user[userID].Inventory.slot15, true)

message.reply(embed)


}

async function profile(user, userID, message){

    console.log(user[userID])

embed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setTitle("Profile")
.addField("Rank", user[userID].rank, true)
.addField("Credits  banked", user[userID].credits + "      " + user[userID].bankedCredits, true)
.addField("banked", user[userID].bankedCredits, true)
.addField("Sigils", user[userID].sigils, true)
.addField("Banked", user[userID].bankedSigils, true)
.addField("---------------------------------------", "--------------------------------------")
.addField("Health", user[userID].Health.rank, true)
.addField("Strength", user[userID].Strength.rank, true)
.addField("Defense", user[userID].Defense.rank, true)
.addField("Martial arts", user[userID].MartialArts.rank, true)
.addField("Finance", user[userID].Finance.rank, true)
.addField("Material", user[userID].Material.rank, true)
.addField("Math", user[userID].Math.rank, true)
.addField("Research", user[userID].Research.rank, true)
.addField("Science", user[userID].Science.rank, true)
.addField("Social", user[userID].Social.rank, true)
.addField("Stealth", user[userID].Stealth.rank, true)

message.reply(embed)


}


 module.exports = {profile, inventory}