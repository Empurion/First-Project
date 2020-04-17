//PLUGINS
const fs = require('fs');


//DIRECTORIES


//CLASSES
const Blueprint = require("./class/blueprint.js")
const Channel = require("./class/channel.js")
const Company = require("./class/company.js")
const Continent = require("./class/continent.js")
const Contract = require("./class/contract.js")
const Cooldown = require("./class/cooldown.js")
const empernet = require('./class/empernet.js')
const House = require("./class/house.js")
const Inventory = require("./class/inventory.js") 
const Role = require("./class/roles.js")
const Shop = require("./class/shop.js")
const Skill = require("./class/skill.js")
const User = require("./class/user.js")


//FUNCTIONS
const db = require('./database/query.js')
const roles = require('./class/data/roles.json');




//////////////////////////Initialize Empernet
async function initializeEmpernet(){


Empernet = new empernet(


///GLOBAL
Global = new Continent(
    //NAME - ROLE ID - CATEGORY ID
    "Global", "none", "591738224561618971",
    //NAME - CHANNEL ID
    general = new Channel("general", "591738224561618972")
),


///EUROPE
Europe = new Continent(
    //NAME - ROLE ID - CATEGORY ID
    "Europe", "648708922361905152", "648707767909089300",
    //NAME - CHANNEL ID
    localChat = new Channel("local-chat", "648717555531382784"),
    roaming = new Channel("roaming", "648709925026922517"),
    shop = new Channel("shop", "699638248812707860"),
    bank = new Channel("bank", "648711020940099585"),
    auctionHouse = new Channel("action-house", "648710054304022528"),
    voice = new Channel("Europe", "700128491647271003")
),


///NORTH AMERICA
NorthAmerica = new Continent(
    //NAME - ROLE ID - CATEGORY ID
    "North America", "648708966121209860", "648707824381198337",
    //NAME - CHANNEL ID
    localChat = new Channel("local-chat", "648717501093380112"),
    roaming = new Channel("roaming", "648709537498660864"),
    shop = new Channel("shop", "648717284407508995"),
    bank = new Channel("bank", "648710999842488320"),
    auctionHouse = new Channel("action-house", "648710120167178273"),
    voice = new Channel("North America", "700128555920654397")
),


///SOUTH AMERICA
SouthAmerica = new Continent(
    //NAME - ROLE ID - CATEGORY ID
    "South America", "648708990800363540", "648707868211806239",
    //NAME - CHANNEL ID
    localChat = new Channel("local-chat", "648717533221879827"),
    roaming = new Channel("roaming", "648709552216211467"),
    shop = new Channel("shop", "648717316842061834"),
    bank = new Channel("bank", "648711011511173120"),
    auctionHouse = new Channel("action-house", "648710037602172948"),
    voice = new Channel("South America", "700128527009185930")
),


///AFRICA
Africa = new Continent(
    //NAME - ROLE ID - CATEGORY ID
    "Afica", "648709056588152862", "648707886935179285",
    //NAME - CHANNEL ID
    localChat = new Channel("local-chat", "648717586090950657"),
    roaming = new Channel("roaming", "648709936989208596"),
    shop = new Channel("shop", "648717347917398026"),
    bank = new Channel("bank", "648711034718388235"),
    auctionHouse = new Channel("action-house", "648710071064330270"),
    voice = new Channel("Africa", "700128459107729409")
),


///ASIA
Asia = new Continent(
    //NAME - ROLE ID - CATEGORY ID
    "Asia", "648708946374426665", "648707843926786058",
    //NAME - CHANNEL ID
    localChat = new Channel("local-chat", "648717606265815081"),
    roaming = new Channel("roaming", "648710543032582144"),
    shop = new Channel("shop", "648717364367589395"),
    bank = new Channel("bank", "648711044465688590"),
    auctionHouse = new Channel("action-house", "648710570752606257"),
    voice = new Channel("Asia", "700128426387832842")
),


///AUSTRALIA
Australia = new Continent(
    //NAME - ROLE ID - CATEGORY ID
    "Australia", "648709014385066000", "648708018988515330",
    //NAME - CHANNEL ID
    localChat = new Channel("local-chat", "648717643288674304"),
    roaming = new Channel("roaming", "648710554034110490"),
    shop = new Channel("shop", "648717382726189074"),
    bank = new Channel("bank", "648711056541351947"),
    auctionHouse = new Channel("action-house", "648710587647524877"),
    voice = new Channel("Australia", "700128384176488551")
),


///THE RING
TheRing = new Continent(
    //NAME - ROLE ID - CATEGORY ID
    "The Ring", "687327097387352084", "591738224561618971",
    //NAME - CHANNEL ID
    localChat = new Channel("local-chat", "648717555531382784"),
    roaming = new Channel("roaming", "648709925026922517"),
    shop = new Channel("shop", "699638248812707860"),
    bank = new Channel("bank", "648711020940099585"),
    auctionHouse = new Channel("action-house", "648710054304022528"),
    voice = new Channel("Europe", "700128491647271003")

)
)

    //reward systems
    setInterval(rewardGathering, 60000);
}


async function initializeUser(userID){

    await db.getInventory(userID, function(err, inventory){
        console.log(inventory)
    db.getUser(userID, function(err, user){
        console.log(user)
    currentUser = new User(userID, user, inventory)
    console.log(currentUser)
    saveData("user", currentUser, userID)
    })
    })

}


async function rewardGathering(){
    db.getUserStats("gathering", list)
    console.log(list)


}


///////////////////////////Travel Empernet
async function travel(destination, source, userID, client){
    client.guilds.get('591738224561618969').members.get(userID).addRole(roles[destination].id)
    client.guilds.get('591738224561618969').members.get(userID).removeRole(roles[source].id)
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


module.exports = {rewardGathering, initializeEmpernet, initializeUser, travel, saveData}

