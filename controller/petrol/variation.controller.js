const express = require("express");
const Variation = require("../../models/petrol/variation.model"); // Assuming the model is in models folder

// getVariation, createVariation, updateVariation
// Create new variation
const createVariation = async (req, res) => {
  try {
    const newVariation = new Variation(req.body);
    await newVariation.save();
    res
      .status(201)
      .json({
        newVariation,
        success: "true",
        message: "variation day data created successfully",
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getVariation = async (req, res) => {
  try {
    const variations = await Variation.find();
    res.status(200).json(variations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateVariation = async (req, res) => {
  try {
    const variation = await Variation.findById(req.params.id);
    if (!variation) {
      return res.status(404).json({ message: "Variation not found" });
    }
    res
      .status(200)
      .json({
        variation,
        success: "true",
        message: "variation day data updated successfully",
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getVariation, createVariation, updateVariation };
