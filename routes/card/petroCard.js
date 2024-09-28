const express = require("express");
const router = express.Router();


const { createPetroCard, getPetroCardData, statusHandler, editPetroCard, getOpenPetroCardData, createPetroCardTran, getPetroCardTran, editPetroCardTran } = require("../../controller/cards/petroCard");


router.post("/createPetroCard", createPetroCard);
router.get("/getPetroCardData", getPetroCardData);
router.get("/getOpenPetroCardData", getOpenPetroCardData);
router.patch("/statusHandler", statusHandler);
router.patch("/editPetroCard", editPetroCard);
router.post("/createPetroCardTran", createPetroCardTran);
router.get("/getPetroCardTran", getPetroCardTran);
router.patch("/editPetroCardTran", editPetroCardTran);

module.exports = router;