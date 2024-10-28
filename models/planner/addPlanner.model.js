// models/Planner.js
const mongoose = require('mongoose');

const AddPlannerSchema = new mongoose.Schema({
    category: {
        type: String,
        enum: ['Policy', 'Payment', 'Loan'],
        required: true,
    },
    holderName: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

// Get enum values programmatically
AddPlannerSchema.statics.getEnumValues = function() {
    return this.schema.path('category').enumValues;
};

module.exports = mongoose.model('AddPlanner', AddPlannerSchema);