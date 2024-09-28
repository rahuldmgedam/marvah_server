const express = require("express");
const router = express.Router();

const { CreateWallet, getWalletData, deleteWallet, statusHandler, createWalletTran, getWalletTrans, deleteWalletTran} = require("../../controller/cards/Wallet");



router.post("/createWallet", CreateWallet)
router.get("/getWalletData", getWalletData)
router.post("/deleteWallet", deleteWallet)
router.patch("/statusHandler", statusHandler)
router.post("/createWalletTran", createWalletTran)
router.get("/getWalletTrans", getWalletTrans)
router.post("/deleteWalletTran", deleteWalletTran)

module.exports = router;