

// gets the user from the database and creates user object with skills
async function getUser(userID){
    await dbQuery.getUser(userID, function(err, user){
        if (err){
            console.log(err);
        } 
            //initialise health skill
            let health = new Skill( 
                user[0].health_exp, user[0].health_rank, 
                ranks[user[0].health_rank].rexp, ranks[user[0].health_rank].multiplier, 
                "health" );

            //initialise strength skill
            let strength = new Skill( 
                user[0].strength_exp, user[0].strength_rank, 
                ranks[user[0].strength_rank].rexp, ranks[user[0].strength_rank].multiplier, 
                "strength" );

            //initialise defense skill
            let defense = new Skill(
                user[0].defense_exp, user[0].defense_rank, 
                ranks[user[0].defense_rank].rexp, ranks[user[0].defense_rank].multiplier, 
                "defense");

            //initialise martial arts skill
            let martialArts = new Skill(
                user[0].martialArts_exp, user[0].martial_arts_rank, 
                ranks[user[0].martial_arts_rank].rexp, ranks[user[0].martial_arts_rank].multiplier, 
                "martialArts");

            //initialise finance skill
            let finance = new Skill(
                user[0].finance_exp, user[0].finance_rank, 
                ranks[user[0].finance_rank].rexp, ranks[user[0].finance_rank].multiplier, 
                "finance");

            //initialise material skill
            let material = new Skill(
                user[0].material_exp,user[0].material_rank, 
                ranks[user[0].material_rank].rexp, ranks[user[0].material_rank].multiplier, 
                "material");

            //initialise math skill
            let math = new Skill(
                user[0].math_exp, user[0].math_rank, 
                ranks[user[0].math_rank].rexp, ranks[user[0].math_rank].multiplier, 
                "math");

            //initialise research skill
            let research = new Skill(
                user[0].research_exp, user[0].research_rank, 
                ranks[user[0].research_rank].rexp, ranks[user[0].research_rank].multiplier, 
                "research");

            //initialise science skill
            let science = new Skill(
                user[0].science_exp, user[0].science_rank, 
                ranks[user[0].science_rank].rexp, ranks[user[0].science_rank].multiplier, 
                "science");

            //initialise social skill
            let social = new Skill(
                user[0].social_exp, user[0].social_rank, 
                ranks[user[0].social_rank].rexp, ranks[user[0].social_rank].multiplier, 
                "social");

            //initialise stealth skill
            let stealth = new Skill(
                user[0].stealth_exp, user[0].stealth_rank, 
                ranks[user[0].stealth_rank].rexp, ranks[user[0].stealth_rank].multiplier, 
                "stealth");
            
            //initialise new user
            let newUser = new User(
                //user definitions
                userID, user[0].total,
                //currency
                user[0].credits, user[0].sigils, user[0].bank_credits, user[0].bank_sigils,
                //combat skills
                health, strength, defense, martialArts, 
                //non combat
                finance, material, math, research, science, social, stealth
            );

            //sets user cache filepath
            filePath = './empernet/users/' + newUser.id + ".json"
            
            //creates user cache            
            fs.writeFile(filePath, JSON.stringify(newUser, null, 4), err=>{
            if (err) throw err;
            });
    })
} 
async function save(user, userID){
  filePath = '/etc/empernet/empernet/cache/users/' + userID + ".json"
  fs.writeFile(filePath, JSON.stringify(user, null, 4), err=>{
    if (err) throw err;
    });
}


module.exports = {getUser,save}