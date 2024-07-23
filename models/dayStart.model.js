const mongoose = require('mongoose');

const dayStartSchema = new mongoose.Schema(
    {
        date: {
            type: String,
            required: true,
            unique: true
        },
        ms: {
            type: Number,
            required: true
        },
        speed: {
            type: Number,
            required: true
        },
        hsd: {
            type: Number,
            required: true
        },
        msdiff: {
            type: Number
        },
        speeddiff: {
            type: Number
        },
        hsddiff: {
            type: Number
        },
    },
    {
        timestamps: true,
    }
);

const DayStart = mongoose.model('DayStart', dayStartSchema);

module.exports = DayStart;