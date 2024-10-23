

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fuelSalesSchema = new Schema({
  date: { type: Date, default: Date.now },
  sideNo: { type: Number, required: true },
  nozzleNo: { type: Number, required: true },
  nozzleProduct: { type: String, required: true },
  tank: { type: Number, required: true },
  opMeterReading: { type: Number, required: true },
  closing: { type: Number },
  sale: { type: Number },
  testing: { type: Number },
  saleAct: { type: Number },
  rate: { type: Number },
  saleActTotal: { type: Number },
  totalAmount: { type: Number },
    // Adding a reference to the Reading schema
    reading: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Reading' 
    }
});

module.exports = mongoose.model('fuelSale', fuelSalesSchema);
