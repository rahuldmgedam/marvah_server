// controllers/plannerController.js
const addPlanner = require('../../models/planner/addPlanner.model')

// Add a new planner entry
exports.addPlanner = async (req, res) => {
    const { category, holderName, name, date } = req.body;

    try {
        const newEntry = new addPlanner({ category, holderName, name, date });
        await newEntry.save();
        res.status(201).json(newEntry);
    } catch (error) {
        res.status(400).json({ error: 'Failed to add planner entry' });
    }
};

// Get all planner entries by category
exports.getPlannerByCategory = async (req, res) => {
     const { category } = req.params;

    try {
        const entries = await addPlanner.find({category  });
        res.json(entries);
    } catch (error) {
        res.status(400).json({ error: 'Failed to fetch entries' });
    }
};

exports.getAllPlannerdata = async (req, res) => {
    // const { category } = req.params;

    try {
        const entries = await addPlanner.find({ });
        res.json(entries);
    } catch (error) {
        res.status(400).json({ error: 'Failed to fetch entries' });
    }
};

// Update an entry by ID
exports.updatePlannerEntry = async (req, res) => {
    const { id } = req.params;
    const { holderName, name, date } = req.body;

    try {
        const updatedEntry = await addPlanner.findByIdAndUpdate(
            id,
            { holderName, name, date },
            { new: true }
        );
        res.json(updatedEntry);
    } catch (error) {
        res.status(400).json({ error: 'Failed to update entry' });
    }
};

// Delete an entry by ID
exports.deletePlannerEntry = async (req, res) => {
    const { id } = req.params;
    try {
        await addPlanner.findByIdAndDelete(id);
        res.json({ message: 'Entry deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Failed to delete entry' });
    }
};