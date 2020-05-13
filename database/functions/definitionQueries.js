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


async function createBlueprint(name, requirement1, requirement2, health, strength, defense, martialArts, engineering, finance, math, research, science, social, stealth){

    await db.query(`
    INSERT INTO definition_blueprint (name, requirement1, requirement2, health, strength, defense, martialArts, engineering, finance, math, research, science, social, stealth)
    VALUES ('${name}', '${requirement1}', '${requirement2}', '${health}', '${strength}', '${defense}', '${martialArts}', '${engineering}', '${finance}', '${math}', '${research}', '${science}', '${social}', '${stealth}');
    `)
}

async function createItem(){

}

async function createTechnique(name, produces, health, strength, defense, martialArts, engineering, finance, math, research, science, social, stealth){

    await db.query(`
    INSERT INTO definition_technique (name, produces, health, strength, defense, martialArts, engineering, finance, math, research, science, social, stealth)
    VALUES ('${name}', '${produces}', '${health}', '${strength}', '${defense}', '${martialArts}', '${engineering}', '${finance}', '${math}', '${research}', '${science}', '${social}', '${stealth}');
    `)
}

async function createResource(name){
    await db.query(`
    INSERT INTO definition_resource (name)
    VALUES ('${name}');
    `)

}

async function getAllResources(callback){
    await db.query(`
    SELECT *
    FROM definition_resource
    WHERE 1`, function(err, result) {
        if (err) {
            callback(err, null);
        } else 
            callback(null, result);
    });
}

async function getAllblueprints(callback){
    await db.query(`
    SELECT *
    FROM definition_blueprint
    WHERE 1`, function(err, result) {
        if (err) {
            callback(err, null);
        } else 
            callback(null, result);
    });
}

async function getAlltechniques(callback){
    await db.query(`
    SELECT *
    FROM definition_technique
    WHERE 1`, function(err, result) {
        if (err) {
            callback(err, null);
        } else 
            callback(null, result);
    });
}

async function getAllItems(callback){
    await db.query(`
    SELECT *
    FROM definition_item
    WHERE 1`, function(err, result) {
        if (err) {
            callback(err, null);
        } else 
            callback(null, result);
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
} module.exports = {createBlueprint, createItem, createResource, createTechnique, getBlueprint, getItem, getResource, getAllResources, getAllblueprints, getAllItems, getAlltechniques}