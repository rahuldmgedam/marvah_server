const mongoose = require('mongoose');

const nozzleproductwiseSchema = new mongoose.Schema({
//   srNo: { type: Number },
  date:{type:String,default:new Date()},
  nozzle: { type: String, required: true },
  openingReading: { type: Number, default: '' },
  closingReading: { type: Number, default: '' },
  sale: { type: Number, default: '' }
});

const Data1 = mongoose.model('Data1', nozzleproductwiseSchema);
const Data2 = mongoose.model('Data2', nozzleproductwiseSchema);
const Data3 = mongoose.model('Data3', nozzleproductwiseSchema);

module.exports = { Data1, Data2,Data3};
