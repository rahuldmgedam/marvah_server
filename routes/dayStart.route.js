const express = require("express");
const { showStartDayReading, createStartDayReading, updateStartDayReading } = require("../controller/dayStart.controller");

const dayStartRouter = express.Router();

dayStartRouter.post('/', createStartDayReading);
dayStartRouter.get('/show/:date',showStartDayReading );
dayStartRouter.patch('/update/:date', updateStartDayReading);

module.exports = {
    dayStartRouter
}