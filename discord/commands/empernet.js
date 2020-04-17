const amount = require('../../empernet/class/data/amount.json')
const db = require('../../empernet/database/query.js')

async function command(args, userID, message, client, Empernet){


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

                            if(!args[5]){
                                // 3 = NAME, 4 = 1ST_REQUIRED_SKILL, 5 = 2ND_REQUIRED_SKILL RANK, 6 = 3ND_REQUIRED_SKILL,
                                db.createResource( args[3], args[4], "0", "0")
                                message.reply("Created resource:\nid : " + amount.resources + "\nNamed : " + args[3] + " \nRequirments : " + args[4])
                                amount.resources++

                            }
                            if(args[4] === "2"){
                                // 3 = NAME, 4 = 1ST_REQUIRED_SKILL, 5 = 2ND_REQUIRED_SKILL RANK, 6 = 3ND_REQUIRED_SKILL,
                                db.createResource( args[3], args[4], args[5], "0")
                                message.reply("Created resource:\nid : " + amount.resources + "\nNamed : " + args[3] + " \nRequirments : " + args[5] + " and " + args[6])
                                amount.resources++

                            }
                            if(args[4] === "3"){
                                // 3 = NAME, 4 = 1ST_REQUIRED_SKILL, 5 = 2ND_REQUIRED_SKILL RANK, 6 = 3ND_REQUIRED_SKILL,
                                db.createResource( args[3], args[4], args[5], args[6])
                                message.reply("Created resource:\nid : " + amount.resources + "\nNamed : " + args[3] + " \nRequirments : " + args[4] + " and " + args[5] + " and " +args[6])
                                amount.resources++
                            }
                            break;
    
                        //THIRD WORD IS COMPANY
                        case "company":

                            db.createItem(args[3], args[4], args[5], args[6])
                            message.reply("Created item:\nid : " + amount.items + "\nNamed : " + args[3] + "\nBlueprint : " + args[4] + " \nType : " + args[5] + "\nBonus : " + args[6])
                            amount.items++
                            break;
    
    
                        //THIRD WORD IS BLUEPRINT
                        case "blueprint":
                            // 3 = NAME, 4 = 1ST_REQUIRED_SKILL, 5 = 2ND_REQUIRED_SKILL RANK, 6 = 3ND_REQUIRED_SKILL,
                            db.createBlueprint( args[3], args[4], args[5], args[6])
                            message.reply("Created resource:\nid : " + amount.blueprints + "\nNamed : " + args[3] + "\nType : " + args[4] + " \nRequirments : " + args[5] + " and " + args[6])
                            amount.blueprints++
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
        