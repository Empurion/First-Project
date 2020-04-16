//PLUGINS


//DIRECTORIES


//CLASSES


//FILES


//Resource class
class Resource { 
    constructor(nr, name, iReq, iReqLv, iReq1, iReqLv1){
        this.ID = nr
        this.name = name
        this.req = iReq
        this.reqLv = iReqLv
        if(!iReq1 === "none"){this.req1 = iReq1, this.reqLv1 = iReqLv1}
    }
}




module.exports = {Resource}