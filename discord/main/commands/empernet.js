const Discord = require('discord.js');
const db = require('../../../database/functions/userQueries.js')
const fs = require('fs');
const definition = require('../../../database/functions/definitionQueries.js')






async function command(args, DiscordUser, userID, message, DiscordServer, Empernet){


let health = 0
let strength = 0
let defense = 0
let martialArts = 0
let engineering = 0
let finance = 0
let math = 0
let research = 0
let science = 0
let social = 0
let stealth = 0

            ////////////////////SECOND WORD
            switch(args[1]){


                //SECOND WORD IS SAY
                case "say":
    
                    DiscordServer.channels.get(args[2]).send(message.content.split(" ").slice(3).join(" "));
    
                break;

                case "show":

                    switch(args[2]){
                        case "resources":
                            definition.getAllResources(function(err,result){
                                const embed = new Discord.RichEmbed()
                                .setAuthor(message.author.username)
                                .setTitle("All resources")
                                for (let i = 0; i < result.length; i++){
                                    let id = result[i].resource_id
                                    let name = result[i].name
                                    embed.addField(id, name, true)
                                }
                                message.reply(embed)
                            })
                            break;
                        case "company":
                            break;
                        case "blueprint":
                            definition.getAllBlueprints(function(err,result){
                                const embed = new Discord.RichEmbed()
                                .setAuthor(message.author.username)
                                .setTitle("All blueprints")
                                for (let i = 0; i < result.length; i++){
                                    let id = result[i].resource_id
                                    let name = result[i].name
                                    embed.addField(id, name, true)
                                }
                                message.reply(embed)
                            })
                            break;
                        case "item":
                            definition.getAllitems(function(err,result){
                                const embed = new Discord.RichEmbed()
                                .setAuthor(message.author.username)
                                .setTitle("All items")
                                for (let i = 0; i < result.length; i++){
                                    let resourceid = result[i].resource_id
                                    let name = result[i].name
                                    embed.addField(resourceid, name, true)
                                }
                                message.reply(embed)
                            })
                            break;
                        case "technique":
                            definition.getAllTechiques(function(err,result){
                                const embed = new Discord.RichEmbed()
                                .setAuthor(message.author.username)
                                .setTitle("All techniques")
                                for (let i = 0; i < result.length; i++){
                                    let id = result[i].technique_id
                                    let name = result[i].name
                                    embed.addField(id, name, true)
                                }
                                message.reply(embed)
                            })
                            break;
                    }
    
    
                //SECOND WORD IS CREATE
                case "create":
    
                    ////////////////////////THIRD WORD
                    switch(args[2]){
    
                        //THIRD WORD IS RESOURCE
                        case "resource":
                            var name  = args[3] 
                            DiscordServer.channels.get("699753336873943244").send(message.author.username + " has created the following resource\nname : " + name);
                            definition.createResource(name)
                            break;
    
                        //THIRD WORD IS COMPANY
                        case "company":
                            
                            break;
                        //.empernet create blueprint name 1 2 health 300
                        //THIRD WORD IS BLUEPRINT
                        case "blueprint":
                            var name = args[3]
                            var requirement1 = args[4]
                            var requirement2 = args[5]
                            for (i = 6; i < args.length; i++){
                                x = 7;
                            switch (args[i]){
                                case "health":
                                    health = args[x]
                                    break;
                                case "strength":
                                    strength = args[x]
                                    break;
                                case "defense":
                                    defense = args[x]
                                    break;
                                case "martialArts":
                                    martialArts = args[x]
                                    break;
                                case "engineering":
                                    engineering = args[x]
                                    break;
                                case "finance":
                                    finance = args[x]
                                    break;  
                                case "math":
                                    math = args[x]
                                    break;
                                case "science":
                                    science = args[x]
                                    break;
                                case "social":
                                    social = args[x]
                                    break;
                                case "stealth":
                                    stealth = args[x]
                                    break;
                            }
                            x++
                            }
                            DiscordServer.channels.get("699753336873943244").send(message.author.username + " has created the following blueprint\nname : " + name + "\nrequirement 1 : " + requirement1 + " \nrequirement 2 : " + requirement2);
                            definition.createBlueprint(name, requirement1, requirement2, health, strength, defense, martialArts, engineering, finance, math, research, science, social, stealth)
                            break;
                        
                        //THIRD WORD IS ITEM
                        case "item":

                            break;
                        //THIRD WORD IS TECHNIQUE
                        case "technique":
                            var name = args[3]
                            var produces = args[4]
                            for (i = 5; i < args.length;){
                                x = 6;
                
                            switch (args[i]){
                                case "health":
                                    health = args[x]
                                    break;
                                case "strength":
                                    strength = args[x]
                                    break;
                                case "defense":
                                    defense = args[x]
                                    break;
                                case "martialArts":
                                    martialArts = args[x]
                                    break;
                                case "engineering":
                                    engineering = args[x]
                                    break;
                                case "finance":
                                    finance = args[x]
                                    break;  
                                case "math":
                                    math = args[x]
                                    break;
                                case "science":
                                    science = args[x]
                                    break;
                                case "social":
                                    social = args[x]
                                    break;
                                case "stealth":
                                    stealth = args[x]
                                    break;
                            }
                            i++
                            x++
                            }
                            DiscordServer.channels.get("699753336873943244").send(message.author.username + " has created the following technique\nname : " + name + "\nproduces : " + produces);
                            definition.createTechnique(name, produces, health, strength, defense, martialArts, engineering, finance, math, research, science, social, stealth)
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
        