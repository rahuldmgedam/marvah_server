const express = require("express");
const { handleCreatePetrol, handlegetPetrol, handleupdatePetrol, handledeletePetrol } = require("../../controller/petrol/PetrolProduct.controller");

const petrolProductRouter = express.Router();

//all routes will be appear here
petrolProductRouter.post("/create",handleCreatePetrol)
petrolProductRouter.get("/",handlegetPetrol)
petrolProductRouter.patch("/update/:id",handleupdatePetrol)
petrolProductRouter.delete("/delete/:id",handledeletePetrol)

module.exports = {
    petrolProductRouter,
}