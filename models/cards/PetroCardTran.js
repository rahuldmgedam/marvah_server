const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
    PetroCard: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "PetroCard",
        required: true, 
    },
    currentBatchNo: {
        type: Number,
        required: true,
    },
    lastBatchNo: {
        type: Number,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now, 
    }
});

module.exports = mongoose.model("PetroCardTran", TransactionSchema);
