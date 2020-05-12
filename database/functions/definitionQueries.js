const mysql = require('mysql');


db = mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '',
        multipleStatements: true,
        database: 'empernet_definitions',
        charset: 'utf8mb4'
});


async function createDefinition(){

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