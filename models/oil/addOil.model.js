const mongoose = require("mongoose");

const addOilSchema = mongoose.Schema({
    date: { type: Date, default: Date.now },
    srNo: { type: Number },
     opStock: { type: Number },
    productName: { type: String },
    grade: { type: String },
    colour: { type: String },
    mrp: { type: Number },
    volumePerPieces: { type: Number },
    volumeType: { type: String },
    pcsPerCase: { type: String },
    pcsType: { type: String},
    
},{timestamps:true})

module.exports = mongoose.model("addOilProduct",addOilSchema)