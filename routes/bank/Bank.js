const express = require("express");
const router = express.Router();

const { createBank, getBankData, changeStatus } = require("../../controller/bank/Bank")

router.post("/createBank", createBank)
router.get("/getBankData", getBankData)
router.patch("/changeStatus/:id", changeStatus)

module.exports = router