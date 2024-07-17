const express = require("express");
const { createMachineLayout, showMachineLayout, updateMachineLayout, deleteMachineLayout } = require("../controller/machineLayout.controller");

 const MachineLayoutRouter = express.Router();

MachineLayoutRouter.post("/create",createMachineLayout);
MachineLayoutRouter.get("/",showMachineLayout);
MachineLayoutRouter.patch("/update/:machineId",updateMachineLayout);
MachineLayoutRouter.delete("/delete/:machineId",deleteMachineLayout);

module.exports = {
    MachineLayoutRouter
}