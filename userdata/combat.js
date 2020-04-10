const Discord = require('discord.js');
inventory = require("./inventory.json");
bank = require("./bank.json");
const fs = require('fs')
bot = require("../bot.js")

    //query constants
  //gets user data
  const getUser = `SELECT * FROM users WHERE id = ?`
  //gets all items from shop
  const getShop = 'SELECT * FROM shop'
  //


  //using above query statements
var query = db.query(getUser, userID, (err, user, field) => {
if (err) throw err;
var query = db.query(getShop, (err, resultShop, field) => {
if (err) throw err;





    });
  });