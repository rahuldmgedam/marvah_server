const mongoose = require("mongoose")

const petrolDecandationSchema = mongoose.Schema({
    invoice:{type:String, required:true},
    mskl:{type:Number, required:true},
    hsdkl:{type:Number, required:true},
    totalkl:{type:Number, required:true},
    tank1:{type:Number, required:true},
    tank2:{type:Number, required:true},
    tank3:{type:Number, required:true},
    tanktotalkl:{type:Number, required:true},
    date:{type:String, default:new Date},
    

},{
    versionKey:false
})

const petrolDecandationModel = mongoose.model("petrolDecantation", petrolDecandationSchema)


module.exports = {
    petrolDecandationModel
}