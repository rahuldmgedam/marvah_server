const express = require("express");
const {   MeterReadingCreate,
    showMeterReading,
    updateMeterReading,
    deleteMeterReading, } = require("../controller/meterReading.controller");

const ReadinRouter = express.Router();

//all routes will be appear here
ReadinRouter.post("/create",MeterReadingCreate)
ReadinRouter.get("/",showMeterReading)
ReadinRouter.patch("/updatereading/:readingId",updateMeterReading)
ReadinRouter.delete("/deletereading/:readingId",deleteMeterReading)

module.exports = {
    ReadinRouter,
}