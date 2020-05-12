const mysql = require('mysql');


db = mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '',
        multipleStatements: true,
        database: 'empernet_users',
        charset: 'utf8mb4'
});

async function createUser(userID){

    await db.query(`
    INSERT INTO user_blueprints (user_id, unlocked)
    VALUES ('${userID}', ' ');

    INSERT INTO user_currency (user_id, credits, sigils, bankedCredits, bankedSigils)
    VALUES ('${userID}', '2000', '0', '0', '0');

    INSERT INTO user_inventory (user_id, slot1, slot1Q, slot2, slot2Q, slot3, slot3Q, slot4, slot4Q, slot5, slot5Q, slot6, slot6Q, slot7, slot7Q, slot8, slot8Q, slot9, slot9Q, slot10, slot10Q, slot11, slot11Q, slot12, slot12Q, slot13, slot13Q, slot14, slot14Q, slot15, slot15Q)
    VALUES ('${userID}', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');

    INSERT INTO user_skills (user_id, healthExp, strengthExp, defenseExp, martialArtsExp, engineeringExp, financeExp, mathExp, researchExp, scienceExp, socialExp, stealthExp)
    VALUES ('${userID}', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');

    INSERT INTO user_status (user_id, status, location)
    VALUES ('${userID}', 'idle', 'The Ring');

    INSERT INTO user_techniques (user_id, unlocked)
    VALUES ('${userID}', ' ');`
    )


}

async function getStatus(status, callback){
    await db.query(`
    SELECT user_id, since
    FROM user_status 
    WHERE status = ?`, [status], function(err, result) {
        if (err) 
            callback(err,null);
        else
            callback(null,result);
            console.log(result)
    });

}

async function getUserInventory(userID, callback){

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

async function updateStatus(userID, status){

    await db.query(`
    UPDATE user_status
    SET status = '${status}'
    WHERE user_id = '${userID}'
    `)
}
module.exports = {createUser, getStatus, getUserInventory, updateStatus}