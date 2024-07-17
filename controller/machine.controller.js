const { Machine } = require("../models/machine.model");
const Nozzel = require("../models/nozzleLayout")

// here i am creating machine
const createMachine = async (req, res) => {
    try {

        const { machineNo, make, serialNo, connectedTank, product, nozzlesInMPD, sides, nozzleName, fuletype } = req.body;
        console.log("req.body : ",req.body);

        const machine = await Machine.findOne({ machineNo })

        if (machine) {
            return res.status(401).json({
                message: "This machine is already exist in the database",
                success: false,
            })
        }

        const nozzel = await Nozzel.create({
            nozzleName, 
            nozzleLayout
        })

        const data = await Machine.create({
            machineNo,
            make,
            serialNo,
            connectedTank,
            product,
            nozzlesInMPD,
            sides:{side : sides, nozzleLayout: nozzel._id},
        })

        return res.status(201).json({
            message: "Machine created successfully",
            data,
            success: true
        })

    } catch (error) {
        console.log(error.message)
    }


};



// here i am showing machine to the user
const showMachine = async (req, res) => {
    try {
        const machine = await Machine.find({});
        
        res.status(201).json({
            message: "See all machine",
            success: true,
            machine,
        })
    } catch (error) {
        console.log(error.message)
    }
}


// here i am updating Machine 
const updateMachine = async (req, res) => {
    const { machineId } = req.params;
    try {
        await Machine.findByIdAndUpdate({ _id: machineId }, req.body)
        res.status(200).json({
            message: "machine updated successfully ",
            data: req.body,
            success: true,

        })

    } catch (error) {
        console.log(error.message)
    }
}

    // here i am Deleting Machine
const deleteMachine = async(req,res)=>{
    const {machineId} = req.params;
    try {
        await Machine.findByIdAndDelete({_id:machineId})
        res.status(200).json({
            message:"Machine deleted Successfully",
            success:true,
        })
    } catch (error) {
        console.log(error.message)
    }
}



module.exports = {
    createMachine,
    showMachine,
    updateMachine,
    deleteMachine,
}