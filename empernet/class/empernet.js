//PLUGINS


//DIRECTORIES


//CLASSES


//Functions
const db = require('../functions/database.js')
const main = require('../../discord/main/listener.js')
const hub = require('../../discord/hub/listener.js')

//Datafiles
const empernet = require('../../empernet/localdata/discordServer.json')
const amount = require('../../empernet/localdata/amounts.json')
const rank = require('../localdata/ranks.json')
const shop = require('../localdata/shops.json')


//Empernet class
class Empernet {
    constructor(){
        this.channels = empernet
        this.amounts = amount
        this.ranks = rank
    }
    run(){
        main.run(this);
    }
    createUser(userID){

    }
    loadUser(userID){
        
    }
    travel(user, discordUser, source, destination){

    }
}




module.exports = Empernet