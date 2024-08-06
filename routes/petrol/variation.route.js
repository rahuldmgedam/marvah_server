const express = require("express");
const { getVariation, createVariation, updateVariation } = require("../../controller/petrol/variation.controller");

const variationRouter = express.Router();

variationRouter.post('/create', createVariation);
variationRouter.get('/',getVariation);

variationRouter.patch('/update/:id', updateVariation);

module.exports = {
    variationRouter
}