const mongoose = require('mongoose');

const purchaseOilSchema = new mongoose.Schema({
  invoiceNo: String,
  totalAmount: Number,
  stockInCases: [
    {
        srNo: Number ,
      productName: String,
      grade: String,
      colour: String,
      mrp: Number,
      volumePerPCS: Number,
      pcsPerCase: Number,
      purchaseTCases: Number,
      totalPCS: Number
    }
  ],
  stockInLiters: [
    {
        srNo: Number ,
      volumePerPCS: Number,
      totalPCS: Number,
      totalLtrs: Number,
      ratePerUnit: Number,
      taxableValue: Number
    }
  ],
  taxDetails: {
    srNo: Number ,
    taxableValue: Number,
    discount: Number,
    balanceAmt: Number,
    cgst: Number,
    sgst: Number,
    tcs: Number,
    totalAmt: Number,
    totalPcs: Number,
    landingPrice: Number
  },
  reports: [
    {
        srNo: Number ,
      productName: String,
      volumePerPCS: Number,
      mrp: Number,
      landingPrice: Number,
      difference: Number
    }
  ]
});

const PurchaseOil = mongoose.model('PurchaseOil', purchaseOilSchema);

module.exports = PurchaseOil;
