
const express = require("express")

const {createSpeed,getSpeed,updateSpeed,deleteSpeed}  = require("../../controller/fuels/speed.controller")

 const SpeedRouter = express.Router()

  SpeedRouter.post("/create", createSpeed)
  SpeedRouter.get("/", getSpeed)
  SpeedRouter.patch("/update/:msId", updateSpeed)
  SpeedRouter.delete("/delete/:msId", deleteSpeed)


 module.exports = {
    SpeedRouter
 }