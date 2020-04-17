//PLUGINS


//DIRECTORIES


//CLASSES
const Skill = require("./skill.js")
const Inventory = require("./inventory.js")
const empernet = require("../main.js")

//FILES


//User class
class User {
    constructor(userID, user, inventory) {


    //USER
    this.userID = userID;
    this.rank = user[0].rank;
    this.total = user[0].total;

    //CURRENCY
    this.credits = user[0].credits;
    this.sigils = user[0].sigils;
    this.bankedCredits = user[0].bank_credits;
    this.bankedSigils = user[0].bank_sigils;

    //SKILLS
    this.Health = new Skill(user[0].health_exp, "Health")
    this.Strength = new Skill(user[0].strength_exp, "Strength")
    this.Defense = new Skill(user[0].defense_exp, "Defense")
    this.MartialArts= new Skill(user[0].martial_arts_exp, "Martial Arts")
    this.Finance = new Skill(user[0].finance_exp, "Finance")
    this.Material = new Skill(user[0].material_exp, "Material")
    this.Math = new Skill(user[0].math_exp, "Math")
    this.Research = new Skill(user[0].research_exp, "Research")
    this.Science = new Skill(user[0].science_exp, "Science")
    this.Social = new Skill(user[0].social_exp, "Social")
    this.Stealth = new Skill(user[0].stealth_exp, "Stealth")

    this.Inventory = inventory
    }
    buy(itemID){
      let i = 0; 
      while (i < 14){
        i++
        console.log(this.inventory[i])
      if (this.inventory[i] === itemID){}
      
      }
    }
    save(){
      empernet.saveData("user", this, this.id)
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