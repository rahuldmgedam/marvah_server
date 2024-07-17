
 const express = require("express")
const { createTank, getTank, updateTank, deleteTank } = require("../controller/tank.controller")

 const TankRouter = express.Router()

  TankRouter.post("/create", createTank)
  TankRouter.get("/", getTank)
  TankRouter.patch("/update/:tankId", updateTank)
  TankRouter.delete("/delete/:tankId", deleteTank)


 module.exports = {
    TankRouter
 }