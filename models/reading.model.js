const mongoose = require("mongoose");

const readingSchema = mongoose.Schema(
    {
        tankNumber:{
            type:Number,
            required:true,
        },
        date:{
            type:Date,
            required:true,
            },
        nozzleName:{
            type:String,
            required:true,
        },
        fuleType:{
            type:String,
            required:true,
        },
        openingReading:{
            type:Number,
            required:true,
        },
        closingReading:{
            type:Number,
        },
        fuelSale: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'fuelSale' 
          },
    },
 
    {
        versionKey:false,
    },
    {
        timestamps:true,
    },
)

const Reading = mongoose.model("Reading",readingSchema);

module.exports = {
    Reading
}