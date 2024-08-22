


const express = require('express');
const router = express.Router();
const RetailStock = require('../../models/oil/retail.model'); // Assuming you have a RetailStock model

// POST route to save retail stock and sales data
const createRetail =  async (req, res) => {
  try {
    const newRecords = await RetailStock.insertMany(req.body);
    res.status(200).json({ message: "Data saved successfully!", data: newRecords });
  } catch (error) {
    res.status(500).json({ error: "Error saving data" });
  }
};

// GET route to fetch the saved retail stock and sales data
const getRetail =  async (req, res) => {
  try {
    const records = await RetailStock.find({});
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
};

module.exports = {getRetail,createRetail};
