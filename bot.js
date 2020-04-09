const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });
const auth = require('./auth.json');
const config = require('./config.json');
const mysql = require('mysql');
const User = require('./userdata/user.js');
const Empernet = require('./empernet.js');
const dbQuery = require('./query')
const roles = require('./userdata/roles.json')
const userData = require('./userdata/user.json')


db = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '',
  multipleStatements: true,
  database: 'empernet',
  charset: 'utf8mb4'
});

//roles
roleMasterID = roles['Master'].id
roleMasterTotal = roles['Master'].total
roleExpertID = roles['Expert'].id
roleExpertTotal = roles['Expert'].total
roleAdvancedID = roles['Advanced'].id
roleAdvancedTotal = roles['Advanced'].total
roleIntermediateID = roles['Intermediate'].id
roleIntermediateTotal = roles['Intermediate'].total
roleAdeptID = roles['Adept'].id
roleAdeptTotal = roles['Adept'].total
roleExperiencedID = roles['Experienced'].id
roleExperiencedTotal = roles['Experienced'].id
roleBeginnerID = roles['Beginner'].id
roleBeginnerTotal = roles['Beginner'].total
roleNewcomerID = roles['Newcomer'].id


// Client ready and started
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
//Login for discord
client.login(auth.token);

//Give newcomer role
client.on('guildMemberAdd', (guildMember) => {
  dbQuery.newUser(userID);
  guildMember.addRole(roleBeginnerID)
})
// start of message handler
client.on("message", (message) => {
  if (message.author.bot) return;

  //Constant userID variable
  const userID = message.author.id;
  //Timestamp variable
  timeStamp = message.createdTimestamp;
  timeStamp = timeStamp.toString().slice(3,10)
  parseInt(timeStamp);


  //create entries
  if (message.channel.type !== "dm") {
  if (message.member.roles.has(roleNewcomerID)){
    dbQuery.newUser(userID);
    message.member.removeRole(roleNewcomerID);
    message.member.addRole(roleBeginnerID);
  }
  } 


  //if (message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();



  let currentUser = new User.User(userID);
  let empernet = new Empernet;


 

  currentUser.getData(userID);

//////////////////// START COMMANDS ///////////////////////////////////////

if (command){
  //Kick command
  if (command === "kick") {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You do not have the rights to perform this command.");
    let member = message.mentions.members.first();
    member.kick();
}
  dbQuery.getUser(userID, function(err, user) {
    if (err) {
    console.log(err);
    res.send(err);  
    }

//////////////////// WORK COMMANDS ////////////////////////////////////////
//work variables
currentUser.working = user[0].active

    console.log(userData[userID].credits)
    console.log(userData[userID].rank)


    currentUser.rank = user[0].rank;



if (command === 'work'){
  if (currentUser.working === '0'){
    currentUser.startWork(userID, timeStamp);
    message.reply("You've started working!")
    client.guilds.get('591738224561618969').members.get(message.author.id).addRole('688814067527319661')
  }
  message.reply("You're already working.")
}

if (command === 'stop'){
  if (args[0] === 'working'){
    if (currentlyWorking === "1"){
      currentUser.stopWork(userID)
      currentlyWorking = "0";
      let data = db.query(`UPDATE user_status SET active = ${currentlyWorking}, time = '0' WHERE user_id = '${userID}'`)
      timeWorked = timeStamp - timeWorking;
      client.guilds.get('591738224561618969').members.get(message.author.id).removeRole('688814067527319661')
      message.reply(timeWorked + currentlyWorking)

    }
  }
}

if (command ==='show'){
  if (args[0] === 'profile'){
    let mentionID = message.mentions.users.first().id;
    if (mentionID){userID = mentionID}
    var embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(client.user.avatarURL)
    .setTitle("Profile")
    .addField('Rank',userData[userID].rank, true)
    .addField('total credits',userData[userID].credits + userData[userID].bankedCredits, true)
    .addField('total sigils',userData[userID].sigils + userData[userID].bankedSigils, true)
    .addField('--------------------------','--------Combat--------')
    .addField('Health',userData[userID].healthRank, true)
    .addField('Strength',userData[userID].strengthRank, true)
    .addField('Defense',userData[userID].defenseRank, true)
    .addField('Martial Arts',userData[userID].martialArtsRank, true)
    .addField('--------------------------','----------Skills----------')
    .addField('Finance',userData[userID].financeRank, true)
    .addField('Material',userData[userID].materialRank, true)
    .addField('Math',userData[userID].mathRank, true)
    .addField('Research',userData[userID].researchRank, true)
    .addField('Science',userData[userID].scienceRank, true)
    .addField('Social',userData[userID].socialRank, true)
    .addField('Stealth',userData[userID].stealthRank, true)

    message.reply(embed)
  }
}



if (command === 'Empernet'){
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You cannot control me!");
  if (agrs[0] === 'build') {
    if(args[1] === 'user') {
      let mentionID = message.mentions.users.first().id;
      dbQuery.newUser(mentionID);
    }
    if(agrs[1] === 'company'){
        let mentionID = message.mentions.users.first().id;
        if (!mentionID) {message.reply(query.newUser(userID))}
        message.reply(query.newUser(mentionID))
    }
    if(args[1] === 'job'){
      
    }
    }
  if (args[0] === 'check'){
    if (args[1] === 'profile'){
    let mentionID = message.mentions.users.first().id;
    var embed = new Discord.RichEmbed()
    .setTitle("Profile")
    .addField('Rank',userData[mentionID].rank, true)
    .addField('total credits',userData[mentionID].credits + userData[mentionID].bankedCredits, true)
    .addField('total sigils',userData[mentionID].sigils + userData[mentionID].bankedSigils, true)
    .addField('--------------------------','--------Combat--------')
    .addField('Health',userData[mentionID].healthRank, true)
    .addField('Strength',userData[mentionID].strengthRank, true)
    .addField('Defense',userData[mentionID].defenseRank, true)
    .addField('Martial Arts',userData[mentionID].martialArtsRank, true)
    .addField('--------------------------','----------Skills----------')
    .addField('Finance',userData[mentionID].financeRank, true)
    .addField('Material',userData[mentionID].materialRank, true)
    .addField('Math',userData[mentionID].mathRank, true)
    .addField('Research',userData[mentionID].researchRank, true)
    .addField('Science',userData[mentionID].scienceRank, true)
    .addField('Social',userData[mentionID].socialRank, true)
    .addField('Stealth',userData[mentionID].stealthRank, true)

    message.reply(embed)
    }
  }
  }























  if (command === "companies"){
      var getJobs =  `SELECT * FROM companies`
      query = db.query(getJobs,(err, jobs, field) => {
        if (err) throw err;
        var company = jobs[0].name;
        var location = jobs[0].location;
        var jobs = jobs[0].jobs;
        var embed = new Discord.RichEmbed()
        .setTitle("Jobs")
        .setColor(16771840)
        .addField('Company:',company, true)
        .addField('Location:', location, true)
        .addField('Open positions:', jobs, true)
        message.channel.send({ embed });
      });
  }     

  if (command === "apply"){
    var getJobs =  `SELECT * FROM companies`
    query = db.query(getJobs,(err, companies, field) => {
    if (err) throw err;
    var company = companies[0].name;
    var companyID = companies[0].id;
    var getStatus = `SELECT * FROM user_status WHERE user_id = ?`
    query = db.query(getStatus, userID, (err, status, field) => {
    if (err) throw err;
    var cJob = status[0].job_id;
    var cCompany = status[0].company_id;
    if (args[0] === "mine"){
      let data2 = db.query(`UPDATE user_status SET company_id = ${companyID}, job_id = '1' WHERE user_id = '${userID}'`)  
    }  
    });
    });
  }
  

  if (command === "stop"){
    if (args[0] === "working"){
      const getStatus = `SELECT * FROM user_status WHERE user_id = ?`
      query = db.query(getStatus, userID, (err, status, field) => {
        if (err) throw err;
        var skill = status[0].skill;
        var time = status[0].time;
        parseInt(time);
        var status = status[0].name;
        message.reply(time);
        message.reply(timeStamp); 
        message.reply(status);
        if (status === "working"){
          timeStamp = timeStamp - time;
          timeStamp = timeStamp / 60;
          Math.round(timeStamp.toFixed(0));
          message.reply(timeStamp)
          message.reply(skill)
          client.guilds.get('591738224561618969').members.get(message.author.id).removeRole('688814067527319661')
      let data2 = db.query(`UPDATE user_skills SET ${skill} = ${timeStamp} WHERE user_id = '${userID}'`)
        }
      });
    }
  }

  //rank command
  if (command === 'rank'){
      //gets user data
    query = db.query(getUser, userID, (err, user, field) => {
      if (err) throw err;
       const cRank = user[0].rank
      var embed = new Discord.RichEmbed()
      .setTitle("Rank") 
      .addField('User Rank', cRank)
      message.reply(embed);
    });
  }

//  if (command === 'bank'){
//    if (args[0] === 'credits'){
//      var query = db.query(getUser, userID, (err, user, field) => {
//        if (err) throw err;
//      var cCR = user[0].credits;
//      var cSGL = user[0].sigils;
//      var bCR = user[0].bank_credits;
//      var bSGL = user[0].bank_sigils;
//      bCR = bCR + cCR
//      bSGL = bSGL + cSGL
//      aCR = cCR - cCR
//      aSGL = cSGL - cSGL
//      let data = db.query(`UPDATE users SET credits = ${aCR}, sigils = ${aSGL}, bank_credits = ${bCR}, bank_sigils = ${bSGL}  WHERE id = '${userID}'`);
//      var embed = new Discord.RichEmbed()
//      .setTitle("Wallet")
//      .setAuthor(message.author.username)
//      .setColor(16771840)
//      .setThumbnail(client.user.avatarURL)
//      .addField('Bank transfer','Ive transferred ' +  cCR + ' credits ' + cSGL + ' sigils to your account')
//      .addField('__________','User')
//      .addField("Credits", aCR, true)
//      .addField("Sigils", aSGL, true)
//      .addField('__________' , 'Bank')
//      .addField("Credits", bCR, true)
//      .addField("Sigils", bSGL, true)
//      message.channel.send({ embed });
//      });
//    }
//  }

  //let endUpdate = db.query(`UPDATE users SET credits = ${userCR}, sigils = ${userSGL}, bank_credits = ${bankCR}, bank_sigils = ${bankSGL}   WHERE id = '${userID}'`)
});
}
});