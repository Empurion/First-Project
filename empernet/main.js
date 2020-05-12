//PLUGINS
const fs = require('fs');
const requireDir = require('require-dir');

//DIRECTORIES
let functions = requireDir('./functions');


//CLASSES


//FUNCTIONS
const db = require('./functions/database.js')
const roles = require('./localdata/roles.json');




//////////////////////////Initialize Empernet


async function initializeUser(User){

    await db.getInventory(userID, function(err, inventory){
        console.log(inventory)
        Inventory = {
            slot1 : inventory[0].slot1,
            slot2 : inventory[0].slot2,
            slot3 : inventory[0].slot3,
            slot4 : inventory[0].slot4,
            slot5 : inventory[0].slot5,
            slot6 : inventory[0].slot6,
            slot7 : inventory[0].slot7,
            slot8 : inventory[0].slot8,
            slot9 : inventory[0].slot9,
            slot10 : inventory[0].slot10,
            slot11 : inventory[0].slot11,
            slot12 : inventory[0].slot12,
            slot13 : inventory[0].slot13,
            slot14 : inventory[0].slot14,
            slot15 : inventory[0].slot15,
        }
    db.getUser(userID, function(err, user){
    currentUser = new User(userID, user, Inventory)
    saveData("user", currentUser, userID)
    })
    })

}


async function addInventory(user, item, quantity){

    i = 0
    Inventory = user.Inventory
    for (property in Inventory) {
        if (Inventory[property] === "empty"){
            Inventory[property] = item + "," + quantity
            return
        }
     }

}


async function rewardGathering(){
    db.getUserStatus("gathering",function(err, list){
    let i = 0;
    while (list[i]){
        console.log(list[i].user_id)
        i++
    }


})
}


async function setStatus(){



}

///////////////////////////Travel Empernet
async function travel(destination, userID, client, message){
    let user = client.guilds.get('591738224561618969').members.get(userID)
        message.reply("leaving in 3 seconds.")
    setTimeout(() => {
        user.addRole("648828708278239261")
        user.removeRole(TheRing.id)
        user.removeRole(Europe.id)
        user.removeRole(Asia.id)
        user.removeRole(NorthAmerica.id)
        user.removeRole(SouthAmerica.id)
        user.removeRole(Africa.id)
        user.removeRole(Australia.id)
    }, 3000)
    setTimeout(() => {
        client.guilds.get("591738224561618969").channels.get("700006164498350093").send("<@" + userID + ">, arriving in 3 seconds");
    }, 57000)
    setTimeout(() => {
        user.removeRole("648828708278239261")
        user.addRole(roles[destination].id)
    }, 60000)
}


//////////////////////////Save data
async function saveData(command, newData, userID){


    //COMMAND CHECK
    switch(command){


        //SAVE USER OBJECT
        case "user":


            //USER OBJECT LOCATION
            filePath = './empernet/users/' + userID + ".json"
            //WRITE USER FILE SAVE
            fs.writeFileSync(filePath, JSON.stringify(newData, null, 4), err=>{
              if (err) throw err;
            });
            result = "Succes"
            break;


        //SAVE BLUEPRINT OBJECT
        case "blueprint":


            //BLUEPRINT OBJECT LOCATION
            filepath = './empernet/class/data/blueprints.json'
            //WRITE USER FILE SAVE
            fs.writeFile(filePath, JSON.stringify(newData, null, 4), err=>{
                if (err) throw err;
              });
            break;


        //SAVE RESOURCE OBJECT    
        case "resource":


            //RESOURCE OBJECT LOCATION
            filepath = './empernet/class/data/resources.json'
            //WRITE USER FILE SAVE
            fs.writeFile(filePath, JSON.stringify(newData, null, 4), err=>{
                if (err) throw err;
              });
            break;


        //SAVE CONTRACT OBJECT
        case "contract":


            //CONTRACT OBJECT LOCATION
            filepath = './empernet/class/data/contracts.json'
            //WRITE USER FILE SAVE
            fs.writeFile(filePath, JSON.stringify(newData, null, 4), err=>{
                if (err) throw err;
              });
            break;


        //SAVE SKILL OBJECT
        case "skill":


            //SKILL OBJECT LOCATION
            filepath = './empernet/class/data/skills.json'
            //WRITE USER FILE SAVE
            fs.writeFile(filePath, JSON.stringify(newData, null, 4), err=>{
                if (err) throw err;
              });
            break;


        //SAVE INVENTORY OBJECT
        case "inventory":


            //INVENTORY OBJECT LOCATION
            filepath = './empernet/class/data/inventories.json'
            //WRITE USER FILE SAVE
            fs.writeFile(filePath, JSON.stringify(newData, null, 4), err=>{
                if (err) throw err;
              });
            break;


        //SAVE ITEM OBJECT
        case "item":


            //ITEM OBJECT LOCATION
            filepath = './empernet/class/data/items.json'
            //WRITE USER FILE SAVE
            fs.writeFile(filePath, JSON.stringify(newData, null, 4), err=>{
                if (err) throw err;
              });
            break;
    }    
    return result
}


module.exports = {initializeUser, addInventory, rewardGathering, travel, saveData}

