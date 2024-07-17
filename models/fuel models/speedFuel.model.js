const mongoose = require("mongoose");

const speedSchema = mongoose.Schema(
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

const speedfuel = mongoose.model("speedfuel", speedSchema);

module.exports = {
    speedfuel,
};
