const mongoose = require("mongoose");

const WalletSchema = mongoose.Schema({
    bankName : {
        type: String,
        require: true,
        trim: true,
    },
    date: {
        type: Date,
        default : Date.now(),
    },
    status : {
        trim: true,
        type: String,
        default : "Open"
    },
    transaction : [{
        type : mongoose.Schema.ObjectId,
        ref: "WalletTran",
    }],

},{timestamps : true})


module.exports = mongoose.model("Wallet", WalletSchema);
