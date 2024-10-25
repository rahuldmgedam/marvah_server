const mongoose = require("mongoose")

const BankTranSchema = mongoose.Schema({
    bank : {
        type: mongoose.Schema.ObjectId,
        ref: "Bank",
        require: true,
    },
    tranType : {
        type: String,
        require: true,
    },
    mode: {
        type: String,
        require: true,
    },
    chequeNo: {
        type: Number,
        // unique: true,
        // require: true,
    },
    amount: {
        type: Number,
        require: true,
        trim: true,
    },
    particulars : {
        type: String,
        // require: true,
        trim: true,
    },
    nerration : {
        type: String,
        // require: true,
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now, 
    }

},{timestamps : true})

module.exports   = mongoose.model("BankTran", BankTranSchema)