const { MWMR } = require("../models/mmwr.model");

// here i have defined insert Detail
const MWMRinsert = async (req, res) => {
    try {
        const { machineAndSerial, side, nozzleNo, nozzleAndProduct, tankNo, openingMeterReading, } = req.body;
        await MWMR.create({
            machineAndSerial,
            side,
            nozzleNo,
            nozzleAndProduct,
            tankNo,
            openingMeterReading,
        })
        return res.status(201).json({
            message: "Today's Machine Detail is inserted successfully",
            success: true,
        })

    } catch (error) {
        console.log(error.message)
    }
};

// here i have defined show all Machine Wise Meter Reading  
const showMWMR = async (req, res) => {
    try {
        const MWMRdata = await MWMR.find();
        if (MWMRdata.length>0) {
            return res.status(201).json({
                message: " Machine Wise Meter Reading data",
                success: true,
                MWMRdata,
            })
        } else {
            return res.status(401).json({
                message: " Nothing to see in the database",
                success: false,     
            })
        }
        
    } catch (error) {
        console.log(error.message)
    }
}

// here i have defined update Machine Wise Meter Reading
const updateMWMR = async (req, res) => {
    try {
        const { MWMRid } = req.params;
        if (await MWMR.findByIdAndUpdate({ _id: MWMRid }, req.body)) {
            return res.status(201).json({
                message: "Machine Wise Meter Reading updated successfully",
                success: true,
                data: req.body,
            })

        } else {
            return res.status(401).json({
                message: "Machine Wise Meter Reading does not exist",
                success: false,
            })
        }


    } catch (error) {
        console.log(error.message)
    }
}

//here i have defined delete Machine Wise Meter Reading
const deleteMWMR = async (req, res) => {
    try {
        const { MWMRid } = req.params;
        if (await MWMR.findByIdAndDelete({ _id: MWMRid })) {
            return res.status(201).json({
                message: "Machine Wise Meter Reading deleted successfully",
                success: true,
            })
        } else {
            return res.status(401).json({
                message: "Machine Wise Meter Reading does not exist",
                success: true,
            })
        }



    } catch (error) {
        console.log(error.message)
    }
}



module.exports = {
    MWMRinsert,
    showMWMR,
    updateMWMR,
    deleteMWMR,

}
