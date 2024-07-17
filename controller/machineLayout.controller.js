const { MachineLayout } = require("../models/machinelayout.model");



// here i am creating machine Layout
const createMachineLayout = async (req, res) => {
    try {

        const { machineAndSerial, mpdName, nozzles, product } = req.body;

        const machine = await MachineLayout.findOne({ machineAndSerial })

        if (machine) {
            return res.status(401).json({
                message: "This machine is already exist in the database",
                success: false,
            })
        }
        await MachineLayout.create({
            machineAndSerial,
            mpdName,
            nozzles,
            product,
        })
        return res.status(201).json({
            message: "Machine created successfully",
            success: true
        })

    } catch (error) {
        console.log(error.message)
    }
};


// here i am showing machine Layout to the user
const showMachineLayout = async (req, res) => {
    try {
        const machine = await MachineLayout.find();
        res.status(201).json({
            message: "See all machine",
            success: true,
            machine,
        })
    } catch (error) {
        console.log(error.message)
    }
}


// here i am updating Machine Layout 
const updateMachineLayout = async (req, res) => {
    const { machineId } = req.params;
    try {
        await MachineLayout.findByIdAndUpdate({ _id: machineId }, req.body)
        res.status(200).json({
            message: "machine updated successfully ",
            data: req.body,
            success: true,

        })

    } catch (error) {
        console.log(error.message)
    }
}

    // here i am Deleting Machine Layout
    const deleteMachineLayout = async(req,res)=>{
        const {machineId} = req.params;
        try {
            await MachineLayout.findByIdAndDelete({_id:machineId})
            res.status(200).json({
                message:"Machine deleted Successfully",
                success:true,
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    

module.exports = {
    createMachineLayout,
    showMachineLayout,
    updateMachineLayout,
    deleteMachineLayout,

}
