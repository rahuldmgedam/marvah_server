const express = require("express");
const addOilModel = require("../../models/oil/addOil.model");

const createOil = async (req, res) => {
//   const addOilProduct = req.body;
  try {
    const newAddedOil = await new addOilModel(req.body);
    await newAddedOil.save();
    res
      .status(201)
      .json({ message: "New Oil Product Added!", success: true, newAddedOil });
  } catch (error) {
    console.log(error);
  }
};

const getOils = async (req, res) => {
  try {
    const allOils = await addOilModel.find();
    res
      .status(201)
      .json({  success: true, allOils });
  } catch (error) {
    console.log(error);
  }
};

const updateOil = async (req, res) => {
    const { id } = req.params; // Assuming the oil product's ID is passed as a URL parameter
    const updates = req.body; // The fields to update
  
    try {
      // Find the oil product by ID and update it with the provided data
      const updatedOil = await addOilModel.findByIdAndUpdate(id, updates, {
        new: true // Return the updated document
      });
  
      if (!updatedOil) {
        return res
          .status(404)
          .json({ message: "Oil product not found", success: false });
      }
  
      res
        .status(200)
        .json({ message: "Oil Product Updated!", success: true, updatedOil });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error", success: false });
    }
  };

  const deleteOil = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedOil = await addOilModel.findByIdAndDelete(id);
  
      if (!deletedOil) {
        return res.status(404).json({ message: "Oil Product not found!", success: false });
      }
  
      res
        .status(200)
        .json({ message: "Oil Product deleted successfully!", success: true, deletedOil });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred while deleting the Oil Product.", success: false });
    }
  };
  


module.exports = {createOil,getOils,updateOil,deleteOil}