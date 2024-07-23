const express = require('express');
const { DayStart } = require('../models/dayStart.model');
const router = express.Router();


const showStartDayReading = async (req, res) => {
    const dayStart = await DayStart.findOne({ date: req.params.date });
    res.json(dayStart);
}


const createStartDayReading = async (req, res) => {
    const { date, ms, speed, hsd, msdiff, speeddiff, hsddiff } = req.body;
    const dayStart = new DayStart({
        date,
        ms,
        speed,
        hsd,
        msdiff,
        speeddiff,
        hsddiff,
    });
    const createdDayStart = await dayStart.save();
    res.status(201).json(createdDayStart);
};


const updateStartDayReading = async (req, res) => {
    const { ms, speed, hsd, msdiff, speeddiff, hsddiff } = req.body;
    const dayStart = await DayStart.findOne({ date: req.params.date });

    if (dayStart) {
        dayStart.ms = ms;
        dayStart.speed = speed;
        dayStart.hsd = hsd;
        dayStart.msdiff = msdiff;
        dayStart.speeddiff = speeddiff;
        dayStart.hsddiff = hsddiff;

        const updatedDayStart = await dayStart.save();
        res.json(updatedDayStart);
    } else {
        res.status(404);
        throw new Error('Day Start data not found');
    }
};

module.exports = {
    showStartDayReading,
    createStartDayReading,
    updateStartDayReading,
};