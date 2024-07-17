const { Reading } = require("../models/reading.model");


// here i have defined insert today's reading
const insertReading = async (req, res) => {
    try {
        const { tankNumber, nozzleName, fuleType, openingReading } = req.body;
        await Reading.create({
            tankNumber,
            nozzleName,
            fuleType,
            openingReading,
        })
        return res.status(201).json({
            message: "Today's Openning Reading is inserted successfully",
            success: true,
        })

    } catch (error) {
        console.log(error.message)
    }
};

// here i have defined show all reading included today's
const showReading = async (req, res) => {
    try {
        const readingdata = await Reading.find();
        res.status(201).json({
            message: "reading data",
            success: true,
            readingdata,
        })
    } catch (error) {
        console.log(error.message)
    }
}

// here i have defined update reading included closing reading
const updateReading = async (req, res) => {
    try {
        const { readingId } = req.params;
        await Reading.findByIdAndUpdate({ _id: readingId }, req.body)
        res.status(201).json({
            message: "Reading updated successfully",
            success: true,
            data: req.body,
        })

    } catch (error) {
        console.log(error.message)
    }
}

//here i have defined delete reading
const deleteReading = async (req, res) => {
    try {
        const { readingId } = req.params;
        await Reading.findByIdAndDelete({ _id: readingId })
        res.status(201).json({
            message:"Reading deleted successfully",
            success:true,
        })

    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    insertReading,
    showReading,
    updateReading,
    deleteReading,
}
