const { MessageHandler } = require('discord-message-handler');

const db = require('../../empernet/database/query.js')
const fs = require('fs');
const definition = require('../../../database/functions/definitionQueries.js')






async function command(userID, user, message, client, Empernet){
    const amount = require('../../empernet/class/data/amount.json')

    const args = message.content.trim().split(/ +/g);

            ////////////////////SECOND WORD
            switch(args[1]){


                //SECOND WORD IS SAY
                case "say":
    
                    client.guilds.get("591738224561618969").channels.get(args[2]).send(message.content.split(" ").slice(3).join(" "));
    
                break;
    
    
                //SECOND WORD IS CREATE
                case "create":
    
                    ////////////////////////THIRD WORD
                    switch(args[2]){
    
                        //THIRD WORD IS RESOURCE
                        case "resource":
                            filepath = './empernet/class/data/amount.json'

                            if(!args[5]){
                                // 3 = NAME, 4 = 1ST_REQUIRED_SKILL, 5 = 2ND_REQUIRED_SKILL RANK, 6 = 3ND_REQUIRED_SKILL,
                                definition.createResource( args[3], args[4], "0", "0")
                                message.reply("Created resource:\nid : " + amount.resources + "\nnamed : " + args[3] + " \nrequirments : " + args[4])
                                client.guilds.get("591738224561618969").channels.get("699753336873943244").send(message.author.username + " has created the following resource\nid : " + amount.resources + " \nname : " + args[3]);
                                amount.resources++
                                fs.writeFileSync(filepath, JSON.stringify(amount, null, 4), err=>{
                                    if (err) throw err;
                                  });

                            }
                            if(args[4] === "2"){
                                // 3 = NAME, 4 = 1ST_REQUIRED_SKILL, 5 = 2ND_REQUIRED_SKILL RANK, 6 = 3ND_REQUIRED_SKILL,
                                definition.createResource( args[3], args[4], args[5], "0")
                                message.reply("Created resource:\nid : " + amount.resources + "\nnamed : " + args[3] + " \nrequirments : " + args[5] + " and " + args[6])
                                client.guilds.get("591738224561618969").channels.get("699753336873943244").send(message.author.username + " has created the following resource:\nid : " + amount.resources + " \nname : " + args[3]);
                                amount.resources++
                                fs.writeFileSync(filepath, JSON.stringify(amount, null, 4), err=>{
                                    if (err) throw err;
                                  });

                            }
                            if(args[4] === "3"){
                                // 3 = NAME, 4 = 1ST_REQUIRED_SKILL, 5 = 2ND_REQUIRED_SKILL RANK, 6 = 3ND_REQUIRED_SKILL,
                                definition.createResource( args[3], args[4], args[5], args[6])
                                message.reply("Created resource:\nid : " + amount.resources + "\nnamed : " + args[3] + " \nrequirments : " + args[4] + " and " + args[5] + " and " +args[6])
                                client.guilds.get("591738224561618969").channels.get("699753336873943244").send(message.author.username + " has created the following resource:\nid : " + amount.resources + " \nname : " + args[3]);
                                amount.resources++
                                fs.writeFileSync(filepath, JSON.stringify(amount, null, 4), err=>{
                                    if (err) throw err;
                                  });
                            }
                            break;
    
                        //THIRD WORD IS COMPANY
                        case "company":


    
                        //THIRD WORD IS BLUEPRINT
                        case "blueprint":
                            filepath = './empernet/class/data/amount.json'
                            // 3 = NAME, 4 = TYPE, 5 = ITEM1, 6 = ITEM2,
                            definition.createBlueprint( args[3], args[4], args[5], args[6])
                            message.reply("Created resource:\nid : " + amount.blueprints + "\nnamed : " + args[3] + "\ntype : " + args[4] + " \nrequirments : " + args[5] + " and " + args[6])
                            client.guilds.get("591738224561618969").channels.get("699753336873943244").send(message.author.username + " Has created the following blueprint:\nid : " + amount.blueprints + " \nname : " + args[3]);
                            amount.blueprints++
                            fs.writeFileSync(filepath, JSON.stringify(amount, null, 4), err=>{
                                if (err) throw err;
                              });
                    }
    
                case "set":
                    if(args[2] === "shop"){
                    switch(args[3]){
                        case "na":
                            guild.channels.get(NorthAmerica.shop.id).send(await embed.updateShop(args[1], client, "North america"))
                            break;
                        case "sa":
                            guild.channels.get(SouthAmerica.shop.id).send(await embed.updateShop(args[1], client, "South america"))
                            break;
                        case "eu":
                            guild.channels.get(Europe.shop.id).send(await embed.updateShop(args[1], client, "Europe"))
                            break;
                        case "af":
                            guild.channels.get(Africa.shop.id).send(await embed.updateShop(args[1], client, "Africa"))
                            break;
                        case "as":
                            guild.channels.get(Asia.shop.id).send(await embed.updateShop(args[1], client, "Asia"))
                            break;
                        case "au":
                            guild.channels.get(Australia.shop.id).send(await embed.updateShop(args[1], client, "Australia"))
                            break;
                        case "ring":
                            //client.guilds.get("591738224561618969").channels.get(channels.server.northAmerica.shop.id).send(embed.create(client, args[3]))
                            break;
                    }
                }


    
            }
        }

        module.exports = {command}
        