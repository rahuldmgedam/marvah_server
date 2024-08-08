
const mongoose = require('mongoose');


const ClientSchema = mongoose.Schema({
    partyName : {type:String, required:true},
    Number : {type:Number, required:true},
    Remark : {type:String},
    Cheque_Amount : {type:Number,required:true},
    Cheque_Date : {type:String, default: new Date()},
    Cheque_number : {type:String},
    DespositeDetails : {type:String},
    Desposite_Bank : {type:String},
    Desposite_Date : {type:String, default: new Date()},
},{
    versionKey:false
})

const CreditClientModel = mongoose.model("creditClient", ClientSchema)

module.exports = {
    CreditClientModel
}