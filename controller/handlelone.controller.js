const { Handloan } = require("../models/handLone.model");

// Create a new handloan record
const createHandloan = async (req, res) => {
  try {
    const { party_name, transactions } = req.body;
    const newHandloan = new Handloan({ party_name, transactions });
    await newHandloan.save();
    res.status(201).json(newHandloan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all handloan records
const getAllHandloans = async (req, res) => {
  try {
    const handloans = await Handloan.find();
    res.status(200).json(handloans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single handloan record by ID
const getHandloanById = async (req, res) => {
  try {
    const { id } = req.params;
    const handloan = await Handloan.findById(id);
    if (!handloan) {
      return res.status(404).json({ message: 'Handloan not found' });
    }
    res.status(200).json(handloan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a handloan record by ID
const updateHandloan = async (req, res) => {
  try {
    const { id } = req.params;
    const { party_name, transactions } = req.body;
    const updatedHandloan = await Handloan.findByIdAndUpdate(
      id,
      { party_name, transactions },
      { new: true }
    );
    if (!updatedHandloan) {
      return res.status(404).json({ message: 'Handloan not found' });
    }
    res.status(200).json(updatedHandloan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a handloan record by ID
const deleteHandloan = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedHandloan = await Handloan.findByIdAndDelete(id);
    if (!deletedHandloan) {
      return res.status(404).json({ message: 'Handloan not found' });
    }
    res.status(200).json({ message: 'Handloan deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    createHandloan,
    getAllHandloans,
    getHandloanById,
    updateHandloan,
    deleteHandloan,
}