const mongoose = require("mongoose");

const tankSchema = mongoose.Schema(
  {
    date: {type:String,default:new Date},
    tankNo: { type: Number, required: true },
    product: { type: String, required: true },
    capacity: { type: Number, required: true },
    nozzels: { type: Number, required: true },
    opStock:{ type: Number, required: true }
  },
  {
    versionKey: false,
  },{
    timestamps:true
  }
);

const TankModel = mongoose.model("tank", tankSchema);

module.exports = {
  TankModel,
};
