async function create(){
    
}

async function addExp(skill, amount){
    console.log(skill.exp)
    skill.exp = skill.exp + amount;
    console.log(skill.exp)
}

module.exports = {addExp}