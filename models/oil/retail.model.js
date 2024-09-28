const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const retailStockSchema = new Schema({
  srNo: Number,
  retailOilDate: { type: Date, default: Date.now },
  productName: String,
  grade: String,
  colour: String,
  volumePerPieces: Number,
  mrp: Number,
  opStock: Number,
  invardStock: Number,
  totOpStock: Number,
  qtySale: Number,
  balStock: Number,
  saleAmt: Number,
  discountAmt: Number,
  actualSaleAmt: Number,
},{timestamps:true});

const RetailStock = mongoose.model('RetailStock', retailStockSchema);

module.exports = RetailStock;
