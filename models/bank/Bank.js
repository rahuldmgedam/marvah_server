const mongoose = require("mongoose");

const BankSchema = mongoose.Schema({
    BankName : {
        type: String,
        require: true,
        trim: true,
    },
    AccountNumber : {
        type: String,
        require: true,
        trim: true,
    },
    AccountName : {
        type: String,
        require: true,
        trim: true,
    },
    BranchName : {
        type: String,
        require: true,
        trim: true,
    },
    AccountType : {
        type: String,
        require: true,
        trim: true,
    },
    Amount: {
        type: Number,
        require: true,
    },
    date: {
        type: Date,
        default : Date.now(),
    },
    status : {
        type: Boolean,
        trim: true,
        default : true,
    },
    transaction : [{
        type : mongoose.Schema.ObjectId,
        ref: "BackTran",
    }],

},{timestamps : true})

module.exports = mongoose.model("Bank", BankSchema);