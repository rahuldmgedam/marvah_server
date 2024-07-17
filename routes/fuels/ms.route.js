
const express = require("express")

const {createMs,getMs,updateMs,deleteMs}  = require("../../controller/fuels/ms.controller")

 const MsRouter = express.Router()

  MsRouter.post("/create", createMs)
  MsRouter.get("/", getMs)
  MsRouter.patch("/update/:msId", updateMs)
  MsRouter.delete("/delete/:msId", deleteMs)


 module.exports = {
    MsRouter
 }