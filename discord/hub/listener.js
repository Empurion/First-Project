//PLUGINS
const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });
const requireDir = require('require-dir');


//DIRECTORIES


//COMMANDS



//FILES
const db = require('../../empernet/functions/database.js')
const empernet = require('../../empernet/main.js')
const discordHandler = require('../main/handler.js')
const auth = require('../main/auth.json');
const roles = require('../../empernet/localdata/roles.json');


function run(Empernet) {

  // CLIENT READY
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



//LOGIN FOR DISCORD
client.login(auth.token2);

//GIVE START ROLES
client.on('guildMemberAdd', (guildMember) => {
  var role = member.guild.roles.find('name', 'Newcomer')
  member.addRole(role);
})


//START OF MASSAGE HANDLER
client.on("message", (message) => {

  console.log("test")
});

}
module.exports = {run}