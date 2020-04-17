//PLUGINS


//DIRECTORIES


//CLASSES


//FILES


//Company class
class Company {
    constructor(newID, newName, newOwner, newBlueprint){
        this.id = newID;
        this.name = newName;
        this.rank = "Beginner";
        this.total = "0";
        this.owner = newOwner;
        this.blueprint = newBlueprint;
    }
}




module.exports = {Company}