//PLUGINS


//DIRECTORIES


//CLASSES


//FILES
const empernet = require('./empernet/empernet.js')
const listener = require('./discord/listener.js');

//TEMP VAR
let Empernet = ""

//intialises Empernet
empernet.initializeEmpernet(Empernet)


//runs the discord listener
listener.run(Empernet);