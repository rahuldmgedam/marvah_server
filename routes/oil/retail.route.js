const express = require("express");
const { createRetail,getRetail } = require("../../controller/oil/retail.controller");

const retailOilRouter = express.Router();


retailOilRouter.get("/",getRetail);

retailOilRouter.post("/create",createRetail);



module.exports = {retailOilRouter}