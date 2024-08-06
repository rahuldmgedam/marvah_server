const mongoose = require("mongoose")


const PetrolProductSchema = mongoose.Schema({
    ProductName:{type:String, required:true},
    rate:{type:Number, required:true},
    taxamount:{type:Number, required:true},
    vat:{type:Number, required:true},
    cess:{type:Number, required:true},
    tcs:{type:Number, required:true},
  
},{
    versionKey:false
})

const PetrolProductModel = mongoose.mongoose.model("petrolProduct",PetrolProductSchema )

module.exports = {
    PetrolProductModel
}