const requireDir = require('require-dir');
const mysql = require('mysql');
const fs = require('fs');


const User = require('../user.js');
const userData = requireDir('../users');



db = mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '',
        multipleStatements: true,
        database: 'empernet',
        charset: 'utf8mb4'
});



////////////////////////CREATE QUERIES
async function createUser(userID){

    await db.query(`
    INSERT INTO users (id, rank, total, credits, sigils, bank_credits, bank_sigils)
    VALUES ('${userID}', 'Beginner', 11, '2000', '0', '0', '0');

    INSERT INTO user_skills (user_id, health_exp, strength_exp, defense_exp, martial_arts_exp, finance_exp, material_exp, math_exp, research_exp, science_exp, social_exp, stealth_exp) 
    VALUES ('${userID}', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');

    INSERT INTO user_status (user_id, company_id, currently, since)
    VALUES ('${userID}', '0', '0', '0', '0');

    INSERT INTO user_inventory (user_id, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
    VALUES ('${userID}', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');`
    )
}

async function createBlueprint(name, type, item1, item2){

    await db.query(`
    INSERT INTO blueprints (name, type, item1, item2)
    VALUES ("${name}", "${type}", "${item1}", "${item2}")`
    )
}

async function createItem(name, blueprint, type, bonus){

    await db.query(`
    INSERT INTO items (name, blueprint, type, bonus)
    VALUES ("${name}", "${blueprint}", "${type}", "${bonus}")`
    )
}

async function createResource(name, skill1, skill2, skill3){

    await db.query(`
    INSERT INTO resources (name, skill1, skill2, skill3)
    VALUES ("${name}", "${skill1}", "${skill2}", "${skill3}");`
    )


}
///////////////////////
///////////////////
//////////////


////////////////////////GET QUERIES

async function getUser(userID, callback){

    await db.query(`
    SELECT * 
    FROM users, user_skills, user_status 
    WHERE users.id = ? AND users.id = user_skills.user_id AND users.id = user_status.user_id `, [userID], function(err, result) {
        if (err) 
            callback(err,null);
        else
            callback(null,result);
    });
}

async function getInventory(userID, callback){

    await db.query(`
    SELECT * 
    FROM user_inventory
    WHERE user_id = ?`, [userID], function(err, result) {
        if (err) 
            callback(err,null);
        else
            callback(null,result);
    });
}

async function getBlueprint(blueprintName, callback){

    await db.query(`
    SELECT * 
    FROM blueprints
    WHERE name = ?`, blueprintName, function(err, rows) {
        if (err) {
            callback(err, null);
        } else 
            callback(null, rows);
    });
}

async function getItem(itemName, callback){

    await db.query(`
    SELECT * 
    FROM items
    WHERE name = ?`, itemName, function(err, rows) {
        if (err) {
            callback(err, null);
        } else 
            callback(null, rows);
    });
}

async function getResource(resourceName, callback){

    await db.query(`
    SELECT * 
    FROM resources
    WHERE name = ?`, resourceName, function(err, rows) {
        if (err) {
            callback(err, null);
        } else 
            callback(null, rows);
    });
}

module.exports = {createUser, getInventory, createBlueprint, createItem, createResource, getUser, getBlueprint, getResource, getItem}
