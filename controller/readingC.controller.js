const  ReadingC  = require("../models/ReadingC.model");

// Insert today's reading
// const insertReading = async (req, res) => {
//     try {
//         const { serial, sideNo, nozzleNo, openingReading } = req.body;

//         // Find the machine by serial number
//         const machine = await ReadingC.findOne({ serial });
//         if (!machine) {
//             return res.status(404).json({
//                 message: "Machine not found",
//                 success: false,
//             });
//         }

//         // Find the side by side number
//         const side = machine.sides.find(s => s.sideNo === sideNo);
//         if (!side) {
//             return res.status(404).json({
//                 message: "Side not found",
//                 success: false,
//             });
//         }

//         // Find the nozzle by nozzle number and update the reading
//         const nozzle = side.nozzles.find(n => n.nozzleNo === nozzleNo);
//         if (!nozzle) {
//             return res.status(404).json({
//                 message: "Nozzle not found",
//                 success: false,
//             });
//         }

//         nozzle.opMeterReading = openingReading;

//         // Save the updated machine
//         await machine.save();

//         return res.status(201).json({
//             message: "Today's Opening Reading is inserted successfully",
//             success: true,
//         });
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({
//             message: "Server error",
//             success: false,
//         });
//     }
// };

const insertReading = async (req, res) => {
    const machineData = req.body;
  
    // Create a new machine object with the provided data
    const machine = new ReadingC({
      serial: machineData.serial,
      name: machineData.name,
      noOfNozzles: machineData.noOfNozzles,
      product: machineData.product,
      sides: machineData.sides // Ensure this is an array of objects
    },{timestamps:true});
  
    console.log('Machine object before saving:', machine);
    try {
      // Save the new machine to the database
      const newMachine = await machine.save();
      // Respond with the newly created machine object
      res.status(201).json(newMachine);
    } catch (err) {
      // Respond with an error message in case of failure
      res.status(400).json({ message: err.message });
    }
  };
  

// Show all readings including today's
const showReading = async (req, res) => {
    try {
        const readingData = await ReadingC.find();
        res.status(200).json({
            message: "Reading data",
            success: true,
            readingData,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "Server error",
            success: false,
        });
    }
}

// Update reading including closing reading
const updateReading = async (req, res) => {
    try {
        const { serial, sideNo, nozzleNo } = req.body;
        const updateData = req.body;

        // Find the machine by serial number
        const machine = await ReadingC.findOne({ serial });
        if (!machine) {
            return res.status(404).json({
                message: "Machine not found",
                success: false,
            });
        }

        // Find the side by side number
        const side = machine.sides.find(s => s.sideNo === sideNo);
        if (!side) {
            return res.status(404).json({
                message: "Side not found",
                success: false,
            });
        }

        // Find the nozzle by nozzle number and update the reading
        const nozzle = side.nozzles.find(n => n.nozzleNo === nozzleNo);
        if (!nozzle) {
            return res.status(404).json({
                message: "Nozzle not found",
                success: false,
            });
        }

        Object.assign(nozzle, updateData);

        // Save the updated machine
        await machine.save();

        res.status(200).json({
            message: "Reading updated successfully",
            success: true,
            data: nozzle,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "Server error",
            success: false,
        });
    }
}

// Delete reading
const deleteReading = async (req, res) => {
    try {
        const { serial, sideNo, nozzleNo } = req.body;

        // Find the machine by serial number
        const machine = await ReadingC.findOne({ serial });
        if (!machine) {
            return res.status(404).json({
                message: "Machine not found",
                success: false,
            });
        }

        // Find the side by side number
        const side = machine.sides.find(s => s.sideNo === sideNo);
        if (!side) {
            return res.status(404).json({
                message: "Side not found",
                success: false,
            });
        }

        // Find the nozzle by nozzle number and remove it
        const nozzleIndex = side.nozzles.findIndex(n => n.nozzleNo === nozzleNo);
        if (nozzleIndex === -1) {
            return res.status(404).json({
                message: "Nozzle not found",
                success: false,
            });
        }

        side.nozzles.splice(nozzleIndex, 1);

        // Save the updated machine
        await machine.save();

        res.status(200).json({
            message: "Reading deleted successfully",
            success: true,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "Server error",
            success: false,
        });
    }
}

module.exports = {
    insertReading,
    showReading,
    updateReading,
    deleteReading,
}
