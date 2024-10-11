const mongoose = require("mongoose")

const BankTranSchema = mongoose.Schema({
    back : {
        type: mongoose.Schema.ObjectId,
        ref: "Back",
        require: true,
    },
    checkNo: {
        type: String,
        require: true,
        trim: true,
    },
    amount: {
        type: String,
        require: true,
        trim: true,
    },
    perticulars : {
        type: String,
        require: true,
        trim: true,
    },
    neration : {
        type: String,
        require: true,
        trim: true,
    },
    date: {
        type: date,
        default: Date.now, 
    }

},{timestamps : true})

model.exports = mongoose.model("BankTran", BankTranSchema)