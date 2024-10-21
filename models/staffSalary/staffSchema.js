
const mongoose = require('mongoose');
const { Schema } = mongoose;

const staffSchema = new mongoose.Schema({
    staffName: String,
    ms: String,
    sp: String,
    hsd: String,
    holidays: String,
    workingDays: String,
    total: String,
    average: String,
    salary: String,
    mscommission: Number,
    spcommission: Number,
    hsdcommission: Number,
  });
  
  // Create a model for staff
  const StaffSalary = mongoose.model('StaffSalary', staffSchema);

  module.exports = { StaffSalary };