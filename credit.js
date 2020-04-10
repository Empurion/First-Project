const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const auth = require('./auth.json');
const config = require('./config.json');
const express = require('express');
const mysql = require('mysql');
const query = require('./query.js')
const main = require('./bot.js');
const XP = require('./experience.js');
const talkedRecently = new Set();
const ms = require('ms')


exports.returnCR = function(min, max){
     min = Math.ceil(min);
     max = Math.floor(max);
     return Math.floor(Math.random() * (max - min + 1)) + min;
};
