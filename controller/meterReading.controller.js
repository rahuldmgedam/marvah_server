// const {MeterReading} = require("../models/meterReading.model")
// // here i have defined insert Detail
// const MeterReadingCreate = async (req, res) => {
//     try {
//         const { sideNo,nozzleNo,nozzleProduct,tank,opMeterReading } = req.body;
//         await MeterReading.create(
//             { sideNo,nozzleNo,nozzleProduct,tank,opMeterReading,meterCreatedAt:{timestamps:true} }
//     )
//         return res.status(201).json({
//             message: "Today's MeterReading is inserted successfully",
//             success: true,
//         })

//     } catch (error) {
//         console.log(error.message)
//     }
// };

// // here i have defined show all Machine Wise Meter Reading  
// const showMeterReading = async (req, res) => {
//     try {
//         const MeterReadingData = await MeterReading.find();
//         if (MeterReadingData.length>0) {
//             return res.status(201).json({
//                 message: " Machine Wise Meter Reading data",
//                 success: true,
//                 MeterReadingData,
//             })
//         } else {
//             return res.status(401).json({
//                 message: " Nothing to see in the database",
//                 success: false,     
//             })
//         }
        
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// // here i have defined update Machine Wise Meter Reading
// const updateMeterReading = async (req, res) => {
//     try {
//         const { MeterReadingid } = req.params;
//         if (await MeterReading.findByIdAndUpdate({ _id: MeterReadingid }, req.body)) {
//             return res.status(201).json({
//                 message: "Machine Wise Meter Reading updated successfully",
//                 success: true,
//                 data: req.body,
//             })

//         } else {
//             return res.status(401).json({
//                 message: "Machine Wise Meter Reading does not exist",
//                 success: false,
//             })
//         }


//     } catch (error) {
//         console.log(error.message)
//     }
// }

// //here i have defined delete Machine Wise Meter Reading
// const deleteMeterReading = async (req, res) => {
//     try {
//         const { MeterReadingid } = req.params;
//         if (await MeterReading.findByIdAndDelete({ _id: MeterReadingid })) {
//             return res.status(201).json({
//                 message: "Machine Wise Meter Reading deleted successfully",
//                 success: true,
//             })
//         } else {
//             return res.status(401).json({
//                 message: "Machine Wise Meter Reading does not exist",
//                 success: true,
//             })
//         }



//     } catch (error) {
//         console.log(error.message)
//     }
// }



// module.exports = {
//    MeterReadingCreate,
//    showMeterReading,
//    updateMeterReading,
//    deleteMeterReading,
// }


// gagan 1aug

const { MeterReading } = require("../models/meterReading.model")
// here i have defined insert Detail
const MeterReadingCreate = async (req, res) => {
    try {
        const { sideNo, nozzleNo, nozzleProduct, tank, opMeterReading } = req.body;
        await MeterReading.create(
            { sideNo, nozzleNo, nozzleProduct, tank, opMeterReading, meterCreatedAt: { timestamps: true } }
        )
        return res.status(201).json({
            message: "Today's MeterReading is inserted successfully",
            success: true,
        })

    } catch (error) {
        console.log(error.message)
    }
};

// here i have defined show all Machine Wise Meter Reading  
const showMeterReading = async (req, res) => {
    try {
        const MeterReadingData = await MeterReading.find();
        if (MeterReadingData.length > 0) {
            return res.status(201).json({
                message: " Machine Wise Meter Reading data",
                success: true,
                MeterReadingData,
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
const updateMeterReading = async (req, res) => {
    try {
        const { readingId } = req.params;

        // console.log("id",readingId)
        // console.log("data", req.body)
        if (req.body.opMeterReading==0) {
            return res.status(201).json({
                message: "Please enter data greater than 0",
                success: true,
            })
        }
        await MeterReading.findByIdAndUpdate({ _id: readingId }, req.body)
        // console.log("rrr",typeof req.body.opMeterReading)
        res.status(201).json({
            message: "Opening Meter Reading updated successfully",
            success: true,
        })
    } catch (error) {
        console.log(error)
    }
}

//here i have defined delete Machine Wise Meter Reading
const deleteMeterReading = async (req, res) => {
    try {
        const { MeterReadingid } = req.params;
        if (await MeterReading.findByIdAndDelete({ _id: MeterReadingid })) {
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
    MeterReadingCreate,
    showMeterReading,
    updateMeterReading,
    deleteMeterReading,
}
