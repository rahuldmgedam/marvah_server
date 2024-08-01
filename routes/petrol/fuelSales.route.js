const express = require("express");
const { getfuelSales, saveFuelSales, updateFuelSales } = require("../../controller/petrol/fuelSales.controller");

const fuelSalesRouter = express.Router();

fuelSalesRouter.post('/create', saveFuelSales);
fuelSalesRouter.get('/',getfuelSales);

fuelSalesRouter.patch('/update/:id', updateFuelSales);

module.exports = {
    fuelSalesRouter
}