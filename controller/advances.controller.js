const { Client } = require("../models/client.model");
const { Advances } = require("../models/advances.model");


const createAdvances = async (req, res) => {
    try {
  
  console.log(req.body)
       const newAdvances = new Advances(req.body);
       await newAdvances.save();
      res.status(200).json({msg:"advances created successfully!",success:true});
    } catch (error) {
      console.log(error.message)
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get all advances records
  const getAllAdvancess = async (req, res) => {
    try {
      const advances = await Advances.find();
      res.status(200).json(advances);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a single advances record by ID
  const getAdvancesById = async (req, res) => {
    try {
      const { id } = req.params;
      const advances = await Advances.findById(id);
      if (!advances) {
        return res.status(404).json({ message: 'Advances not found' });
      }
      res.status(200).json(advances);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Update a advances record by ID
  const updateAdvances = async (req, res) => {
    try {
      const { id } = req.params;
      const { party_name } = req.body;
      const updatedAdvances = await Advances.findByIdAndUpdate(
        id,
        { party_name },
        { new: true }
      );
      if (!updatedAdvances) {
        return res.status(404).json({ message: 'Advances not found' });
      }
      res.status(200).json(updatedAdvances);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Delete a advances record by ID
  const deleteAdvances = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedAdvances = await Advances.findByIdAndDelete(id);
      if (!deletedAdvances) {
        return res.status(404).json({ message: 'Advances not found' });
      }
      res.status(200).json({ message: 'Advances deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  module.exports = {
      createAdvances,
      getAllAdvancess,
      getAdvancesById,
      updateAdvances,
      deleteAdvances,
  }