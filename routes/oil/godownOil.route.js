const express = require("express");
const { createGodownOil,getGodownOil } = require("../../controller/oil/godownOil.controller");

const godownOilRouter = express.Router();


godownOilRouter.get("/",getGodownOil);

godownOilRouter.post("/create",createGodownOil);



module.exports = {godownOilRouter}