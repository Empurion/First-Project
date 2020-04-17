//PLUGINS


//DIRECTORIES


//CLASSES


//FILES
const main = require('./empernet/main.js')
const listener = require('./discord/listener.js');

//TEMP VAR
let Empernet = ""

//intialises Empernet
main.initializeEmpernet(Empernet)


//runs the discord listener
listener.run(Empernet);