const mongoose = require("mongoose");

const nozzleSchema = mongoose.Schema(
    {
        nozzleName: {
            type: String,
            // required: true,
          
        },
        fuletype: {
            type: String,
            // required: true,
        },
        
    },
    {
        versionKey: false,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Nozzle",nozzleSchema)

