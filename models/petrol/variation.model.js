const mongoose = require('mongoose');

const variationSchema = new mongoose.Schema({
    date:{type:String,default:new Date()},
  product: { type: String, required: true },
  openStock: { type: Number, required: true },
  receipt: { type: Number, required: true },
  totalStock: { type: Number, required: true },
  actualSale: { type: Number, required: true },
  balanceStock: { type: Number, required: true },
  actualBalance: { type: Number, required: true },
  variation: { type: Number, required: true },
  tVariation: { type: Number, required: true },
}, { timestamps: true });

const Variation = mongoose.model('Variation', variationSchema);

module.exports = Variation;
