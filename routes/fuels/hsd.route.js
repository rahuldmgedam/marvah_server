
const express = require("express")

const {createHsd,getHsd,updateHsd,deleteHsd}  = require("../../controller/fuels/hsd.controller")

 const HsdRouter = express.Router()

  HsdRouter.post("/create", createHsd)
  HsdRouter.get("/", getHsd)
  HsdRouter.patch("/update/:msId", updateHsd)
  HsdRouter.delete("/delete/:msId", deleteHsd)


 module.exports = {
    HsdRouter
 }