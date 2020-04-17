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
  let user = require('../empernet/user.js');
  let users = requireDir('../empernet/users');


  const userID = message.author.id;
  
  if (message.member.roles.has(roles.newcomer.id)){
    db.createUser(userID)
    message.member.removeRole(roles.newcomer.id)
  } else {
  

  
  //SET CONSTANT USERID VAR

  console.log(message.content);


  //CHECK IF USER IS CACHED
  if(!users[userID]){
      message.reply("Please wait while i get your user files.")
      message.reply(empernet.initializeUser(userID))
  } 


  //RUN IF USER IS CACHED
  else {
    discordHandler.message(empernet.initializeUser(userID),userID, users, message, client, Empernet);
  }
  }
});

} 




module.exports = {run}