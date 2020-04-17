//PLUGINS
const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });
const requireDir = require('require-dir');


//DIRECTORIES


//CLASSES


//FILES
const db = require('../empernet/database/query.js')
const empernet = require('../empernet/main.js')
const discordHandler = require('./handler.js')
const auth = require('./auth.json');
const roles = require('../empernet/class/data/roles.json');


function run(Empernet) {


// CLIENT READY
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



//LOGIN FOR DISCORD
client.login(auth.token);


//GIVE START ROLES
client.on('guildMemberAdd', (guildMember) => {
  //dbQuery.newUser(guildMember.id);
  guildMember.addRole(roles.rank.id)
  guildMember.addRole(roles.newcomer.id)
  guildMember.addRole(roles.faction.id)
  guildMember.addRole(roles.location.id)
  guildMember.addRole(roles.currently.id)
})


//START OF MASSAGE HANDLER
client.on("message", (message) => {
  if (message.author.bot) return; 

  //GET USERDATA
  var users = requireDir('../empernet/users');

  
  
  //SET CONSTANT USERID VAR
  const userID = message.author.id;

  //GET USER FROM GUILD
  let tUser = client.guilds.get('591738224561618969').members.get(userID)



  //CREATE AND LOAD USER INTO CACHE
  if (tUser.roles.has(roles.newcomer.id)){
    message.reply("Seems like you don't have any files yet, I'll quickly make some for you.")
    db.createUser(userID)
    tUser.removeRole(roles.newcomer.id)
    empernet.initializeUser(userID)
    setTimeout(() => {
      message.reply("Files have been created, Goodluck!")
  }, 3000)
  } else {
  





  //CHECK IF USER IS CACHED, CACHE THEM IF THEY'RE NOT
  if(!users[userID]){
      message.reply("Please wait while i get your user files.")
      empernet.initializeUser(userID)
      setTimeout(() => {
        message.reply("Files loaded, Goodluck!")
    }, 3000)
  
  } 


  //RUN IF USER IS CACHED
  else {
    discordHandler.message(empernet.initializeUser(userID),userID, users, message, client, Empernet);
  }
  }
});

} 




module.exports = {run}