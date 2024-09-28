const mongoose = require("mongoose");

const WalletTransactionSchema = new mongoose.Schema({
    wallet: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Wallet",
        required: true, 
    },
    noOfTran: {
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
}, {timestamps : true});

module.exports = mongoose.model("WalletTran", WalletTransactionSchema);
