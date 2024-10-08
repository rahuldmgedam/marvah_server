const mongoose = require('mongoose');

const nozzleSchema = new mongoose.Schema({
  nozzleNo: { type: Number, required: true },
  nozzleProduct: { type: String, required: true },
  tank: { type: Number, required: true },
  opMeterReading: { type: Number,  required: true }
});

const sideSchema = new mongoose.Schema({
  sideNo: { type: Number, required: true },
  nozzles: [nozzleSchema]
});

const machineSchema = new mongoose.Schema({
  date: { type: String, default:new Date() },
  serial: { type: String, required: true },
  name: { type: String, required: true },
  noOfNozzles: { type: Number, required: true },
  product: { type: String, required: true },
  sides: [sideSchema]
},{timestamps:true});

// const ReadingC = mongoose.model('Machine', machineSchema);
const ReadingC = mongoose.models.Machine || mongoose.model('Machine', machineSchema);
module.exports = ReadingC;
