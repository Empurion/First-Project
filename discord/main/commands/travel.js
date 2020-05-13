const roles = require('../../../empernet/localdata/roles.json')
const userQueries = require('../../../database/functions/userQueries.js')



///////////////////////////Travel Empernet
async function travel(destination, discordUser, userID, discordServer, message, Empernet)
{
	

        message.reply("leaving in 5 seconds.")
    setTimeout(() => {
        discordUser.addRole("648828708278239261")
        discordUser.removeRole(roles.theRing.id)
        discordUser.removeRole(roles.europe.id)
        discordUser.removeRole(roles.asia.id)
        discordUser.removeRole(roles.northAmerica.id)
        discordUser.removeRole(roles.southAmerica.id)
        discordUser.removeRole(roles.africa.id)
        discordUser.removeRole(roles.australia.id)
    }, 5000)
    setTimeout(() => {
        discordServer.channels.get("700006164498350093").send("<@" + userID + ">, arriving in 5 seconds");
    }, 55000)
    setTimeout(() => {
        discordUser.removeRole("648828708278239261")
        discordUser.addRole(roles[destination].id)
    }, 60000)
}



async function command(args, discordUser, userID, message, discordServer, Empernet){


if(!args[2]){args[2] = " "}
switch(args[1].toLowerCase() + " " + args[2].toLowerCase()){


    case Empernet.channels.Europe.name.toLowerCase() + "  " :
        if(discordUser.roles.has(roles.europe.id)){message.reply("You're already there!")}
        else {
		userQueries.getLocation(userID,function(err, location){
		destination = "Europe"
		 var distance = Math.sqrt((Empernet.channels[destination].cords.xcord-Empernet.channels[location].cords.xcord)*(Empernet.channels[destination].cords.xcord-Empernet.channels[location].cords.xcord)+(Empernet.channels[destination].cords.ycord-Empernet.channels[location].cords.ycord)-(Empernet.channels[destination].cords.ycord-Empernet.channels[location].cords.ycord))
		 var price = distance/10
		 message.reply("The price is " + price)
		});
		
		
		travel("europe", discordUser, userID, discordServer, message, Empernet)}
    break;


    case Empernet.channels.NorthAmerica.name.toLowerCase():
        if(discordUser.roles.has(roles.northAmerica.id)){message.reply("You're already there!")}
        else {	userQueries.getLocation(userID,function(err, location){
        destination = "NorthAmerica"
		 var distance = Math.sqrt((Empernet.channels[destination].cords.xcord-Empernet.channels[location].cords.xcord)*(Empernet.channels[destination].cords.xcord-Empernet.channels[location].cords.xcord)+(Empernet.channels[destination].cords.ycord-Empernet.channels[location].cords.ycord)-(Empernet.channels[destination].cords.ycord-Empernet.channels[location].cords.ycord))
		 var price = distance/10
		 message.reply("The price is " + price)
		});
		
		travel("northAmerica", discordUser, userID, discordServer, message, Empernet)}
    break;


    case Empernet.channels.SouthAmerica.name.toLowerCase() :
        if(discordUser.roles.has(roles.southAmerica.id)){message.reply("You're already there!")}
        else {	userQueries.getLocation(userID,function(err, location){
		destination = "SouthAmerica"
		 var distance = Math.sqrt((Empernet.channels[destination].cords.xcord-Empernet.channels[location].cords.xcord)*(Empernet.channels[destination].cords.xcord-Empernet.channels[location].cords.xcord)+(Empernet.channels[destination].cords.ycord-Empernet.channels[location].cords.ycord)-(Empernet.channels[destination].cords.ycord-Empernet.channels[location].cords.ycord))
		 var price = distance/10
		 message.reply("The price is " + price)
		});
		
		
		travel("southAmerica", discordUser, userID, discordServer, message, Empernet)}
    break;


    case Empernet.channels.Africa.name.toLowerCase() + "  " :
        if(discordUser.roles.has(roles.africa.id)){message.reply("You're already there!")}
        else {
			userQueries.getLocation(userID,function(err, location){
		destination = "Africa"
		 var distance = Math.sqrt((Empernet.channels[destination].cords.xcord-Empernet.channels[location].cords.xcord)*(Empernet.channels[destination].cords.xcord-Empernet.channels[location].cords.xcord)+(Empernet.channels[destination].cords.ycord-Empernet.channels[location].cords.ycord)-(Empernet.channels[destination].cords.ycord-Empernet.channels[location].cords.ycord))
		 var price = distance/10
		 message.reply("The price is " + price)
		});
		
		travel("africa", discordUser, userID, discordServer, message, Empernet)}
    break;


    case Empernet.channels.Asia.name.toLowerCase() + "  " :
        if(discordUser.roles.has(roles.asia.id)){message.reply("You're already there!")}
        else {
			userQueries.getLocation(userID,function(err, location){
        destination = "Asia"
        location = location[0].location
        console.log(Empernet.channels[location].cords)
		 var distance = Math.sqrt((Empernet.channels[destination].cords.xcord-Empernet.channels[location].cords.xcord)*(Empernet.channels[destination].cords.xcord-Empernet.channels[location].cords.xcord)+(Empernet.channels[destination].cords.ycord-Empernet.channels[location].cords.ycord)-(Empernet.channels[destination].cords.ycord-Empernet.channels[location].cords.ycord))
		 var price = distance/10
		 message.reply("The price is " + price)
		});
		
		travel("asia", discordUser, userID, discordServer, message, Empernet)}
    break;


    case Empernet.channels.Australia.name.toLowerCase() + "  " :
        if(discordUser.roles.has(roles.australia.id)){message.reply("You're already there!")}
        else {
			userQueries.getLocation(userID,function(err, location){
		destination = "Australia"
		 var distance = Math.sqrt((Empernet.channels[destination].cords.xcord-Empernet.channels[location].cords.xcord)*(Empernet.channels[destination].cords.xcord-Empernet.channels[location].cords.xcord)+(Empernet.channels[destination].cords.ycord-Empernet.channels[location].cords.ycord)-(Empernet.channels[destination].cords.ycord-Empernet.channels[location].cords.ycord))
		 var price = distance/10
		 message.reply("The price is " + price)
		});
		
		travel("australia", discordUser, userID, discordServer, message, Empernet)}
    break;

    default: 
    message.reply(`That's not a valid location! \nCurrent locations are: Europe, North America, South America, Asia, Africa and Australia`)
}
}
module.exports = {command}