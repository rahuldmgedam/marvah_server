const PetroCard = require("../../models/cards/PetroCard");
const PetroCardTran = require("../../models/cards/PetroCardTran");

exports.createPetroCard = async (req, res) => {
    try {
        const { machineNo, cardId, lastBatchNo } = req.body.data;

        console.log("inside card ", req.body);

        const data = await PetroCard.create({
            machineNo, cardId, lastBatchNo
        })

        const Carddata = await PetroCard.find();

        return res.status(200).json({
            success: true,
            data,
            Carddata,
            message: "PetroCard Created Successfully"
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

exports.getPetroCardData = async (req, res) => {
    try {
        const data = await PetroCard.find();

        if (!data) {
            return res.status(400).json({
                success: false,
                message: "Data not Present",
            })
        }

        return res.status(200).json({
            success: true,
            data,
            message: "Data get Successfully",
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

exports.getOpenPetroCardData = async (req, res) => {
    try {

        const data = await PetroCard.find({ status: "Open" });

        if (!data) {
            return res.status(400).json({
                success: false,
                message: "Data not Present",
            })
        }

        return res.status(200).json({
            success: true,
            data,
            message: "Data get Successfully",
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

exports.statusHandler = async (req, res) => {
    try {
        const { Id, status } = req.body

        const data = await PetroCard.findByIdAndUpdate(Id, { status }, { new: true });

        return res.status(200).json({
            success: true,
            data,
            message: "Status Updated Successfully",
        })
    }
    catch (error) {
        console.log("Error")
        return res.status(500).json({
            success: false,
            message: "Internal Sever Error",
        })
    }
}

exports.editPetroCard = async (req, res) => {
    try {
        const { id, ...data } = req.body
        // console.log("req.body in edit : ", req.body)

        if (!id) {
            return res.status(401).json({
                success: false,
                message: "PetroCard Id is Required"
            })
        }

        const newProCard = await PetroCard.findByIdAndUpdate(id, data, { new: true });

        if (data.length === 0) {
            return res.status(403).json({
                success: false,
                message: "Nothing to Update, Data not Present for Update"
            })
        }

        if (!newProCard) {
            return res.status(400).json({
                success: false,
                message: "PetroCard Not Found"
            })
        }

        return res.status(200).json({
            success: true,
            newProCard,
            message: "PetroCard Updated Successfully"
        })
    }
    catch (error) {
        console.log("Error ", error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

exports.createPetroCardTran = async (req, res) => {
    try {
        console.log("req.body : ", req.body);
        const { id, currentBatchNo, lastBatchNo, amount } = req.body

        if (!amount) {
            return res.status(402).json({
                success: false,
                message: "Amount is Required",
            })
        }

        const petrocard = await PetroCard.findById(id);

        if (!petrocard) {
            return res.status(403).json({
                success: false,
                message: "PetroCard Not Present",
            })
        }

        const petroCardTran = await PetroCardTran.create({
            PetroCard: petrocard._id,
            currentBatchNo,
            lastBatchNo,
            amount,
        })

        petrocard.transaction.push(petroCardTran._id)
        petrocard.lastBatchNo = currentBatchNo
        await petrocard.save()

        return res.status(200).json({
            success: false,
            petroCardTran,
            message: "Transaction Created/ Save Successfully"
        })
    }
    catch (error) {
        console.log("Error ", error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

exports.getPetroCardTran = async (req, res) => {
    try{
        const transactionData = await PetroCardTran.find().populate("PetroCard").exec()

        if(transactionData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "PetroCard Data not Present"
            })
        }
        return res.status(200).json({
            success: false,
            transactionData,
            message: "Data Fetch Successfully",
        })
    }
    catch (error) {
        console.log("Error ", error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

exports.editPetroCardTran = async (req, res) => {
    try{
        const {id, amount} = req.body

        const updateTran = await PetroCardTran.findByIdAndUpdate(id, {amount:amount}, {new: true});

        return res.status(200).json({
            success: true,
            updateTran,
            message: "Petro Card Transaction Updated Successfully",
        })
    }
    catch (error) {
        console.log("Error ", error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}