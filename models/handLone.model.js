const mongoose = require('mongoose');
const { Schema } = mongoose;

// Handloan Schema
const handloanSchema = new Schema({
    party_name: {
        type: String,
        required: true,
        unique: true,
    },
    transactions: [{
        date: {
            type: Date,
            required: true,
        },
        particular: {
            type: String,
            enum: ['Given', 'Received'],  // Only these values are allowed
            required: true,
        },
        amount_given: {
            type: Number,
            default: 0,
        },
        amount_rcvd: {
            type: Number,
            default: 0,
        },
        balance: {
            type: Number,
            required: true,
        },
        narration: {
            type: String,
            default: '',
        },
    }]
});

const Handloan = mongoose.model('Handloan', handloanSchema);

module.exports = { Handloan };