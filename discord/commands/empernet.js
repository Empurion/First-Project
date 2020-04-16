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
                            if(args[7] === "&"){
                                // 3 = ID, 4 = NAME, 5 = 1ST_REQUIRED_SKILL, 6 = 1ST_REQUIRED_SKILL RANK, 8 = 2ND_REQUIRED_SKILL, 9 = 2ND_REQUIRED_RANK
                                await Resource.create(args[3], args[4], args[5], args[6], args[8], args[9])
                                message.reply("Created resource:\nID : " + args[3] + "\nNamed : " + args[4] + " \nRequirments: " + args[5] + args[6] + args[7] + args[8])
                            }
                            else{
                                await Resource.create(args[3], args[4], args[5], args[6], "none")
                                message.reply("Created resource:\nID : " + args[3] + "\nNamed : " + args[4] + " \nRequirments: " + args[5] + args[6])
                            }
                            break;
    
                        //THIRD WORD IS COMPANY
                        case "company":
    
                            break;
    
    
                        //THIRD WORD IS BLUEPRINT
                        case "blueprint":
                            // 3 = NAME, 4 = 1ST_RESOURCE 5 = 2ND_RESOURCE
                            blueprints[blueprintCount] = await new Blueprint.Blueprint(args[4], args[5], args[6], args[7], args[8])
                            empernet.saveData("blueprint", blueprints)
                            message.reply("Created blueprint:\nID : " + args[3] + '\nNamed : ' + args[4] + "\nRequirments: " + args[5] + args[6] + args[7] + args[8])
                            break;
    
                            
    
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
        