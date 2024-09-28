const mongoose = require("mongoose");

const CreditSchema = mongoose.Schema({
    clientName : {
        type: String,
        require: true,
        trim: true,
    },
    mobileNo : {
        type: Number,
        required: true,
    },
    bankAccNo : {
        type: Number,
        required: true,
    },
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
        ref: "CreditTran",
    }],

},{timestamps : true})


module.exports = mongoose.model("Credit", CreditSchema);
