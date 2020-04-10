const dbQuery = require('../query.js');
const bot = require('../bot.js');
const Requirement = require('./companyRequirment.json');

async function createCompany(name, ){
        await dbQuery.getUser(userID, function(err, user) {
          if (err) {
          console.log(err);
          res.send(err);  
          }
          userData [name] = {
                "rank": user[0].rank,
                "totalLevel": user[0].total,
                "credits": user[0].credits,
                "sigils": user[0].sigils,
                "bankedCredits": user[0].bank_credits,
                "bankedSigils": user[0].bank_sigils,
                "healthRank": user[0].health_rank,
                "healthExp": user[0].health_exp,
                "strengthRank": user[0].strength_rank,
                "strengthExp": user[0].strength_exp,
                "defenseRank": user[0].defense_rank,
                "defenseExp": user[0].defense_exp,
                "martialArtsRank": user[0].martial_arts_rank,
                "martialArtsExp": user[0].martial_arts_exp,
                "financeRank": user[0].finance_rank,
                "financeExp": user[0].finance_exp,
                "materialRank": user[0].material_rank,
                "materialExp": user[0].material_exp,
                "mathRank": user[0].math_rank,
                "mathExp": user[0].math_exp,
                "researchRank": user[0].research_rank,
                "researchExp": user[0].research_exp,
                "scienceRank": user[0].science_rank,
                "scienceExp": user[0].science_exp,
                "socialRank": user[0].social_rank,
                "socialExp": user[0].social_exp,
                "stealthRank": user[0].stealth_rank,
                "stealthExp": user[0].stealth_exp,
                "jobID": user[0].job_id,
                "companyID": user[0].company_id,
                "currentlyWorking": user[0].active,
                "time": user[0].time,
            }
        fs.writeFile("/etc/empernet/empernet-v0/userdata/user.json", JSON.stringify(userData, null, 4), err=>{
          if (err) throw err;
        });
      
      });
}

module.exports = createCompany