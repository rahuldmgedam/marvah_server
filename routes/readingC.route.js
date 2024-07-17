const express = require("express");
const {   insertReading,
    showReading,
    updateReading,
    deleteReading, } = require("../controller/readingC.controller");

const ReadingCRouter = express.Router();

//all routes will be appear here
ReadingCRouter.post("/create",insertReading)
ReadingCRouter.get("/",showReading)
ReadingCRouter.patch("/updatereading/:readingId",updateReading)
ReadingCRouter.delete("/deletereading/:readingId",deleteReading)

module.exports = {
    ReadingCRouter,
}