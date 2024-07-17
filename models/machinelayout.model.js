const mongoose = require("mongoose");

const machineLayoutSchema = mongoose.Schema(
    {
        machineAndSerial: {
            type: String,
            required: true,
          
        },
        mpdName: {
            type: String,
            required: true,
        },
        nozzles: {
            type: Number,
            required: true,
        },
        product: {
            type: String,
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

const MachineLayout = mongoose.model("MachineLayout",machineLayoutSchema)

module.exports = {
    MachineLayout
}