// routes/machineReadings.js

const express = require('express');
const fuelSalesModel = require('../../models/petrol/fuelSales.model');

// GET /reading
const getfuelSales =  async (req, res) => {
  try {
    const fuelSales = await fuelSalesModel.find();
    res.json({ fuelSales });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// POST /save
const saveFuelSales = async (req, res) => {
    const tableData = req.body;
    console.log("TableData : ", tableData);
  
    try {
      await Promise.all(tableData.map(async (data) => {
        const machineReading = new fuelSalesModel(data);
        await machineReading.save();
      }));
  
      res.status(201).json({ message: 'FuelSales Data saved successfully!' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };


 const updateFuelSales =  async (req, res) => {
    try {
      // Find the machine reading by ID and update it
      const updatedReading = await fuelSalesModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true } // Return the updated document
      );
  
      if (!updatedReading) {
        return res.status(404).json({ message: 'Machine reading not found' });
      }
  
      res.json({ message: 'Fuel sales  updated', updatedReading });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
 
  

module.exports = {getfuelSales,saveFuelSales,updateFuelSales};
