const mongoose = require("mongoose");


// MWMR (Machine Wise Meter Reading)

const MWMRSchema = mongoose.Schema(
    {
        machineAndSerial: {
            type: String,
            required: true,
          
        },
        side: {
            type: Number,
            required: true,
        },
        nozzleNo: {
            type: Number,
            required: true,
        },
        nozzleAndProduct: {
            type: String,
            required: true,
        },
        tankNo:{
            type: Number,
            required: true,
        },
        openingMeterReading:{
            type: Number,
            required: true,
        },
    },
    {
        versionKey: false,
    },
    {
        timestamps: true,
    }
);

const MWMR = mongoose.model("mwmr",MWMRSchema)

module.exports = {
    MWMR
}