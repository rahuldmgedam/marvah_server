const mongoose = require("mongoose");

const hsdSchema = mongoose.Schema(
  {
    date: {
      type: String,
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

const hsdfuel = mongoose.model("hsdfuel", hsdSchema);

module.exports = {
    hsdfuel,
};
