const express = require("express");
const { createAdvances, getAllAdvancess, getAdvancesById, updateAdvances, deleteAdvances } = require("../controller/advances.controller");

const advancesRouter = express.Router();

advancesRouter.post('/create', createAdvances);
advancesRouter.get('/',getAllAdvancess );
advancesRouter.patch('/gethandloansbyid/:id', getAdvancesById);
advancesRouter.patch('/updatehandloans/:id', updateAdvances);
advancesRouter.patch('/deletehandloans/:id', deleteAdvances);


module.exports = {
    advancesRouter
}