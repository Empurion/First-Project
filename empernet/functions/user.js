//Plugins
const fs = require('fs');

async function create(){
    
}

async function save(user){
    //USER OBJECT LOCATION
    filePath = './empernet/localdata/users/' + user.id + ".json"
    //WRITE USER FILE SAVE
    fs.writeFileSync(filePath, JSON.stringify(user, null, 4), err=>{
      if (err) throw err;
    });
    console.log(user.id + " saved")
}

module.exports = {save}