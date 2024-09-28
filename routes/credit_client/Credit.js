const express = require("express");
const router = express.Router();

const { createCredit, getCreditData, creatCreditTran, getCreditTranData, deleteCreditTranData } = require("../../controller/credit_client/Credit");



router.post("/createCredit", createCredit)
router.get("/getCreditData", getCreditData)
router.post("/creatCreditTran", creatCreditTran)
router.get("/getCreditTranData", getCreditTranData)
router.post("/deleteCreditTranData", deleteCreditTranData)

module.exports = router;