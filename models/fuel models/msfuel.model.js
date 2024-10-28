const mongoose = require("mongoose");

const msSchema = mongoose.Schema(
  {
    date: {
      type: Date,
      default:new Date(),
      required: true,
    },    

    reading: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  },
  {
    timestamps: true,
  }
);

const msfuel = mongoose.model("msfuel", msSchema);

module.exports = {
  msfuel,
};
