//PLUGINS


//DIRECTORIES


//CLASSES


//FILES


//Skill class
class Skill {
    //class constructor
    constructor(experience, skillname){

        this.exp = experience;
        this.name = skillname;
        if (experience >= 0){
            this.rank = "Beginner"
        }
        //Set skill dependencies

        //this.rank = rank;
        //this.requirment = rexp;
        //this.muliplier = multiplier;

        }
    // add skill exp
    addExp(amount){this.exp = this.exp + amount}
    
    //rank up function
    rankUp(){

        // define result
        let result = ""

        //execute switch if exp meets requirments
        if (this.exp > this.requirment){

            //switch through ranks
            switch (this.rank){

                //Execute when rank is Expert
                case "Expert": 
                    this.rank = "Master"
                    result = "Congratulations, you've ranked up your " + this.name + " skill to Master!"

                //Execute when rank is Advanced
                case "Advanced":
                    this.rank = "Expert"
                    result = "Congratulations, you've ranked up your " + this.name + " skill to Expert!"
                    break;

                //Execute when rank is Intermediate
                case "Intermediate":
                    this.rank = "Advanced"
                    result = "Congratulations, you've ranked up your " + this.name + " skill to Advanced!"
                    break;

                //Execute when rank is Adept
                case 'Adept':
                    this.rank = "Intermediate"
                    result = "Congratulations, you've ranked up your " + this.name + " skill to Intermediate!"
                    break;

                //Execute when rank is Experienced
                case 'Experienced':
                    this.rank = "Adept"
                    result = "Congratulations, you've ranked up your " + this.name + " skill to Adept!"
                    break;

                //Execute when rank is Beginner
                case 'Beginner':
                    this.rank = "Experienced"
                    result = "Congratulations, you've ranked up your " + this.name + " skill to Experienced!"
                    break;
            }
        }
        return result
    }
}

module.exports = Skill