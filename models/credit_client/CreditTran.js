const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Credit",
        required: true, 
    },
    billNo: {
        type: Number,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    productName: {
        type: String,
        require: true,
        trim: true,
    },
    rate: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now, 
    }
});

module.exports = mongoose.model("CreditTran", TransactionSchema);
