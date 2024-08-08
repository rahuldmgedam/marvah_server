const express = require("express");
const { getOils, createOil, updateOil, deleteOil } = require("../../controller/oil/addOil.controller");

const addOilRouter = express.Router();


addOilRouter.get("/",getOils);
addOilRouter.patch("/update/:id",updateOil);

addOilRouter.post("/create",createOil);
addOilRouter.delete("/delete/:id",deleteOil);



module.exports = {addOilRouter}