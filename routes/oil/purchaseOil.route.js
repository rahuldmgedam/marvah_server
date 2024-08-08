const express = require("express");
const {getPurchaseOil,createPurchaseOil,updatePurchaseOil,purchaseOilById} = require("../../controller/oil/purchaseOil.controller");

const purchaseOilRouter = express.Router();


purchaseOilRouter.get("/",getPurchaseOil);
purchaseOilRouter.get("/purchaseoilbyid/:id",purchaseOilById);

purchaseOilRouter.patch("/update/:id",updatePurchaseOil);

purchaseOilRouter.post("/create",createPurchaseOil);
// purchaseOilRouter.delete("/delete/:id",deleteOil);



module.exports = {purchaseOilRouter}