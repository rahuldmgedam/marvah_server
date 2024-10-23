const express = require("express");
const router = express.Router();

const { createBank, getBankData, changeStatus, deleteBank, createBankTran, getBankTranData, deleteBankTran, updateBankTran } = require("../../controller/bank/Bank")

router.post("/createBank", createBank)
router.get("/getBankData", getBankData)
router.patch("/changeStatus/:id", changeStatus)
router.delete("/deleteBank/:id", deleteBank)


router.post("/createBankTran", createBankTran)
router.get("/getBankTranData", getBankTranData)
router.post("/updateBankTran", updateBankTran)
router.delete("/deleteBankTran/:id", deleteBankTran)

module.exports = router