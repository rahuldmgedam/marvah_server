const express = require("express");
const { createMachine, showMachine, updateMachine, deleteMachine, newMachineCreate } = require("../controller/machine.controller");

const MachineRouter = express.Router();

MachineRouter.post("/create",createMachine);
MachineRouter.post("/newMachineCreate",newMachineCreate);
MachineRouter.get("/",showMachine);
MachineRouter.patch("/update/:machineId",updateMachine);
MachineRouter.delete("/delete/:machineId",deleteMachine);

module.exports = {
    MachineRouter,
}