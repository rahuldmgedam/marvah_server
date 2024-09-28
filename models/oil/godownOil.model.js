const express = require("express");
const mongoose = require("mongoose");

const oilGodownSchema = new mongoose.Schema({
  srNo: Number,
  godownOilDate: { type: Date, default: Date.now },
  productName: String,
  grade: String,
  colour: String,
  volumePerPieces: Number,
  mrp: Number,
  opStock: Number,
  invStock: Number,
  totOpStock: Number,
  outRetail: Number,
  balStock: Number,
  balStockAmt: Number,
},{timestamps:true});

const OilGodown = mongoose.model("OilGodown", oilGodownSchema);

module.exports = OilGodown;
