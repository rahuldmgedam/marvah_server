const mongoose = require("mongoose");

const readingSchema = mongoose.Schema(
    {
        tankNumber:{
            type:Number,
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
        }
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