const mongoose = require("mongoose");

const PetroCardSchema = mongoose.Schema({
    machineNo : {
        type: String,
        require: true,
        trim: true,
    },
    cardId : {
        type: String,
        trim: true,
        require: true,
    },
    lastBatchNo : {
        type: String,
        trim: true,
        require: true,
    },
    currentBatchNo : {
        type: String,
        trim: true,
    },
    date: {
        type: Date,
        default : Date.now(),
    },
    status : {
        trim: true,
        type: String,
    },
    transaction : [{
        type : mongoose.Schema.ObjectId,
        ref: "PetroCardTran",
    }],

},{timestamps : true})


module.exports = mongoose.model("PetroCard", PetroCardSchema);
