const mongoose = require("mongoose");

const tankSchema = mongoose.Schema(
  {
    tankNo: { type: Number, required: true },
    product: { type: String, required: true },
    capacity: { type: Number, required: true },
    nozzels: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

const TankModel = mongoose.model("tank", tankSchema);

module.exports = {
  TankModel,
};
