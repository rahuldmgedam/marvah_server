// const mongoose = require('mongoose');

// const purchaseOilSchema = new mongoose.Schema({
//   invoiceNo: Number,
//   totalAmount: Number,
//   stockInCases: [
//     {
//         srNo: Number ,
//       productName: String,
//       grade: String,
//       colour: String,
//       mrp: Number,
//       volumePerPieces: Number,
//       volumeType: String ,
//       pcsPerCase: Number,
//       purchaseTCases: Number,
//       totalPCS: Number
//     }
//   ],
//   stockInLiters: [
//     {
//         srNo: Number ,
//         volumePerPieces: Number,
//       volumeType: String ,
//       totalPCS: Number,
//       totalLtrs: Number,
//       ratePerUnit: Number,
//       taxableValue: Number
//     }
//   ],
//   taxDetails: {
//     srNo: Number ,
//     taxableValue: Number,
//     discount: Number,
//     balanceAmt: Number,
//     cgst: Number,
//     sgst: Number,
//     tcs: Number,
//     totalAmt: Number,
//     totalPCS: Number,
//     landingPrice: Number
//   },
//   reports: [
//     {
//         srNo: Number ,
//       productName: String,
//       volumePerPieces: Number,
//       mrp: Number,
//       landingPrice: Number,
//       difference: Number
//     }
//   ]
// });

// const PurchaseOil = mongoose.model('PurchaseOil', purchaseOilSchema);

// module.exports = PurchaseOil;


// models/OilProduct.js
const mongoose = require("mongoose");

const OilProductSchema = new mongoose.Schema({
  invoiceNo: Number,
  totInvAmt:Number,
  purchaseOilDate: { type: Date, default: Date.now },
  srNo: Number,
  productName: String,
  grade: String,
  colour: String,
  mrp: Number,
  volumePerPieces: Number,
  volumeType: String,
  pcsPerCase: Number,
  purchaseTCases: Number,
  totalPCS: Number,
  ratePerUnit: Number,
  taxableValue: Number,
  discount: Number,
  balanceAmt: Number,
  cgst: Number,
  sgst: Number,
  tcs: Number,
  totalAmt: Number,
  landingPrice: Number,
  difference: Number,
  otherDiscount:Number,
  totStockAmt:Number

},{timestamps:true});

const OilProduct = mongoose.model("purchaseoil", OilProductSchema);

module.exports = OilProduct;
