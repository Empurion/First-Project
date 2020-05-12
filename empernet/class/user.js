//PLUGINS
const fs = require('fs');
const requireDir = require('require-dir');


//DIRECTORIES


//CLASSES
const skill = require("../functions/skill.js")
const Inventory = require("./inventory.js")

//Functions
const db = require('../functions/database.js')
const empernet = require('../main.js')



//User class
class User {
    constructor(userID, cachedUsers) {
    //this.id = userID;
//
    //    //Sets user Information
    //    this.rank = cachedUsers[this.id].rank
    //    this.credits = cachedUsers[this.id].credits
    //    this.sigils = cachedUsers[this.id].sigils
    //    this.bankedCredits = cachedUsers[this.id].bankedCredits
    //    this.bankedSigils = cachedUsers[this.id].bankedSigils
    //
    //    //Sets user skills
    //    this.Health = new Skill(cachedUsers[this.id].Health, Empernet)
    //    this.Strength = new Skill(cachedUsers[this.id].Strength, Empernet)
    //    this.MartialArts = new Skill(cachedUsers[this.id].MartialArts, Empernet)
    //    this.Finance = new Skill(cachedUsers[this.id].Finance, Empernet)
    //    this.Material = new Skill(cachedUsers[this.id].Material, Empernet)
    //    this.Math = new Skill(cachedUsers[this.id].Math, Empernet)
    //    this.Research = new Skill(cachedUsers[this.id].Research, Empernet)
    //    this.Science = new Skill(cachedUsers[this.id].Science, Empernet)
    //    this.Social = new Skill(cachedUsers[this.id].Social, Empernet)
    //    
    //    //Sets user inventory
    //    this.Inventory = new Inventory.Inventory(cachedUsers[this.id].Inventory)
    
    }
    create(){
      db.createUser(this.id)
    }   
    get(){
      db.getUser(this.id, userData)
      this.credits = userData[0].credits
    }
    loadCache(cachedUsers){

    
    //Sets user Information
    this.rank = cachedUsers[this.id].rank
    this.credits = cachedUsers[this.id].credits
    this.sigils = cachedUsers[this.id].sigils
    this.bankedCredits = cachedUsers[this.id].bankedCredits
    this.bankedSigils = cachedUsers[this.id].bankedSigils

    //Sets user skills
    this.Health = new Skill(cachedUsers[this.id].Health, Empernet)
    this.Strength = new Skill(cachedUsers[this.id].Strength, Empernet)
    this.MartialArts = new Skill(cachedUsers[this.id].MartialArts, Empernet)
    this.Finance = new Skill(cachedUsers[this.id].Finance, Empernet)
    this.Material = new Skill(cachedUsers[this.id].Material, Empernet)
    this.Math = new Skill(cachedUsers[this.id].Math, Empernet)
    this.Research = new Skill(cachedUsers[this.id].Research, Empernet)
    this.Science = new Skill(cachedUsers[this.id].Science, Empernet)
    this.Social = new Skill(cachedUsers[this.id].Social, Empernet)
    
    //Sets user inventory
    this.Inventory = new Inventory.Inventory(cachedUsers[this.id].Inventory)


    console.log("cache load succesful")
    }
    buy(itemID){
      let i = 0; 
      while (i < 14){
        i++
        console.log(this.inventory[i])
      if (this.inventory[i] === itemID){}
      
      }
    }
    cache(){
      console.log("caching " + this.id)
      console.log(this.Social)
      //USER OBJECT LOCATION
      var filePath = './empernet/users/' + this.id + ".json"
      //WRITE USER FILE SAVE
      fs.writeFileSync(filePath, JSON.stringify(this, null, 4), err=>{
        if (err) throw err;
      });
      console.log("succesfully cached")
    }
    checkRank(userID, skill){
      userData[userID].totalLevel++
    }
    totalCredit(userID){
      totalCredits = userData[userID].credits + userData[userID].bankedCredits
      return totalCredits
    }
    addCredit(amount){
      this.credits = this.credits + amount
      return this.credits
    }
    startWork(userID, time){
      dbQuery.startWorking(userID, time)
    }
    stopWork(userID){
      dbQuery.stopWorking(userID)
  
    }
    createProfile(){
      console.log(companyID)
    }
  }
  module.exports = User