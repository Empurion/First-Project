//PLlugins
const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });
const requireDir = require('require-dir');


//Directories


//Functions
const user = require('../../database/functions/userQueries.js')



//Files
const discordHandler = require('./handler.js')
const auth = require('./auth.json');
const roles = require('../../empernet/localdata/roles.json');


//Listener run function
function run(Empernet) {


// Client ready.
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


//Login to Discord
client.login(auth.token1);


//Give roles when a new person joins the server
client.on('guildMemberAdd', (guildMember) => {
  guildMember.addRole(roles.rank.id)
  guildMember.addRole(roles.newcomer.id)
  guildMember.addRole(roles.faction.id)
  guildMember.addRole(roles.location.id)
  guildMember.addRole(roles.currently.id)
})


//Start of message handler
client.on("message", (message) => {

  const userID = message.author.id;




  //Prepare userdata for user. 
  //First get the data from the cache.
  var cachedUsers = requireDir('../../empernet/localdata/users');

  //Then set the userID and create a new User object
  

  var date = new Date();
var timestamp = date.getTime();

  user.updateStatus(userID, "roaming")
  users = ""
  user.getStatus("roaming", function(err, users){
    console.log(users)
  });


  //Get the discordUser object
  let discordUser = client.guilds.get('591738224561618969').members.get(userID)





  //CREATE AND LOAD USER INTO CACHE
  if (discordUser.roles.has(roles.newcomer.id)){
    message.reply("Seems like you don't have any files yet, I'll quickly make some for you.")
    user.createUser(userID)
    discordUser.removeRole(roles.newcomer.id)
    setTimeout(() => {
      message.reply("Files have been created, Goodluck!")
  }, 3000)
  } else {
  
  //CHECK IF USER IS CACHED, CACHE THEM IF THEY'RE NOT


  //RUN IF USER IS CACHED
    discordHandler.message(Empernet, userID, message, client);
  }
});
} 

module.exports = {run}