const mongoose = require("mongoose")


const PetrolProductSchema = mongoose.Schema({
    ProductName:{type:String, required:true},
    date: { type: Date, default: Date.now },
    rate:{type:Number, required:true},
    taxamount:{type:Number, required:true},
    vat:{type:Number, required:true},
    cess:{type:Number, required:true},
    tcs:{type:Number, required:true},
    tds:{type:Number},
    lfrPerKl:{type:Number},
    cgst:{type:Number},
    sgst:{type:Number},
    tdsLfr:{type:Number}
  
},{
    versionKey:false,timestamps:true
})

const PetrolProductModel = mongoose.mongoose.model("petrolProduct",PetrolProductSchema )

module.exports = {
    PetrolProductModel
}