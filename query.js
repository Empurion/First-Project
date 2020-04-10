const User = require('./userdata/user.js');
const mysql = require('mysql');
const bot = require('./bot.js')



db = mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '',
        multipleStatements: true,
        database: 'empernet',
        charset: 'utf8mb4'
    });

    

//////NEW USER QUERY
async function newUser(userID){
    await db.query(`
    INSERT INTO users (id, rank, credits, sigils, bank_credits, bank_sigils)
    VALUES ('${userID}', 'Beginner', '2000', '0', '0', '0');

    INSERT INTO user_combat (user_id, health_rank, health_exp, strength_rank, strength_exp, defense_rank, defense_exp, martial_arts_rank, martial_arts_exp) 
    VALUES ('${userID}', 'Beginner', '0', 'Beginner', '0', 'Beginner', '0', 'Beginner', '0');

    INSERT INTO user_skills (user_id, finance_rank, finance_exp, material_rank, material_exp, math_rank, math_exp, research_rank, research_exp, science_rank, science_exp, social_rank, social_exp, stealth_rank, stealth_exp) 
    VALUES ('${userID}', 'Beginner', '0', 'Beginner', '0', 'Beginner', '0', 'Beginner', '0', 'Beginner', '0', 'Beginner', '0', 'Beginner', '0');
    `);
    return 'succes'
}

///////////////////////////////////////////SELECT QUERY///////////////////////////////////////////////////////
//////GET USER DATA
async function getUser(userID, callback) {
    await db.query(`SELECT * FROM users, user_combat, user_skills, user_status WHERE users.id = ? AND users.id = user_skills.user_id AND users.id = user_status.user_id AND users.id = user_combat.user_id `, userID, function(err, rows) {
        if (err) {
            callback(err, null);
        } else 
            callback(null, rows);
        });
}
//////GET COMPANY DATA
async function getCompany(callback){
    await db.query(`SELECT * FROM companies`, company, function(err, rows) {
        if (err) {
            callback(err, null);
        } else 
            callback(null, rows);
    });
}

///////////////////////////////////////////USER FUNCTIONS/////////////////////////////////////////////////////
//////UPGRADE USER RANK
async function upgradeUserRank(userID, rank){
    await db.query(`UPDATE user_skills SET ${skill}_rank = ${rank} WHERE user_id = '${userID}'`)
return 'succes'
}

///////////////////////////////////////////SKILL FUNCTIONS////////////////////////////////////////////////////
//////ADD SKILL EXP
async function addSkillExp(userID, exp, skill){
    await db.query(`UPDATE user_skills SET ${skill}_exp = ${exp} WHERE user_id = '${userID}'`)
    return 'succes'
}
//////UPGRADE SKILL RANK
async function upgradeRank(userID, rank, skill){
    await db.query(`UPDATE user_skills SET ${skill}_rank = ${rank} WHERE user_id = '${userID}'`)
    return 'succes'
}

///////////////////////////////////////////WORK FUNCTIONS////////////////////////////////////////////////////
//////START WORKING
async function startWorking(userID, time){
    await db.query(`UPDATE user_status SET active = '1', time = '${time}' WHERE user_id = '${userID}'`)
}
async function stopWorking(userID, callback){
    await db.query(`UPDATE user_status SET active = '0' WHERE user_id = '${userID}'`)
    result = "succes"
    callback(null, result)
}

///////////////////////////////////////////COMPANY FUNCTIONS/////////////////////////////////////////////////
//////CREATE COMPANY
async function createCompany(name, balance, rank, score, requirement, location, owner, jobs){
    await db.query(`INSERT INTO companies (balance, rank, score, requirement, name, location, owner, jobs) VALUES (0, Beginner,'0,0,0,0,0,0,0,0,0,0', '10,5,5,0,3,0,0,0,0,0', ${name})`)
  
}

module.exports = {newUser, startWorking, stopWorking, upgradeRank, addSkillExp, upgradeUserRank, getUser, getCompany}