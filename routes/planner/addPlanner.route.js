// routes/plannerRoutes.js
const express = require('express');
const addPlannerRouter = express.Router();
const {
    addPlanner,
    getPlannerByCategory,
    updatePlannerEntry,
    getAllPlannerdata,
    deletePlannerEntry
} = require('../../controller/planner/addPlanner.controller');

// Add a new planner entry
addPlannerRouter.post('/add', addPlanner);

// Get planner entries by category
addPlannerRouter.get('/:category', getPlannerByCategory);

// Update an entry by ID
addPlannerRouter.put('/update/:id', updatePlannerEntry);

addPlannerRouter.get('/', getAllPlannerdata)

addPlannerRouter.delete('/delete/:id', deletePlannerEntry)

module.exports = addPlannerRouter;