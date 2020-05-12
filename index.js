//PLUGINS
//start server ( sudo nodemon index.js --ignore 'empernet/users/*.json' --ignore 'empernet/class/data/amount.json')

//DIRECTORIES


//CLASSES
const empernet = require('./empernet/class/empernet.js')

//FILES

Empernet = new empernet()


Empernet.run();