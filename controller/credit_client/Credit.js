const mongoose = require("mongoose")
const Credit = require("../../models/credit_client/Credit");
const CreditTran = require("../../models/credit_client/CreditTran");


exports.createCredit = async (req, res) => {
    try {
        const data = req.body

        console.log("req.body ", req.body);

        const NewCredit = await Credit.create(data)

        if (!NewCredit) {
            return res.status(400).json({
                success: false,
                message: "Credit not Created, Try again",
            })
        }

        const creditData = await Credit.find();

        if (!creditData) {
            return res.status(400).json({
                success: false,
                message: "Credit not Fetched, Try again",
            })
        }

        return res.status(200).json({
            success: true,
            message: "Credit Created Successfully",
            NewCredit,
            creditData,
        })
    }
    catch (error) {
        console.log("Error ", error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error while Creation Credit"
        })
    }
}

exports.getCreditData = async (req, res) => {
    try {
        const creditData = await Credit.find();

        if (!creditData) {
            return res.status(400).json({
                success: false,
                message: "Credit not Fetched, Try again",
            })
        }
        return res.status(200).json({
            success: true,
            creditData,
            message: "Data Fetched Successfully",
        })
    }
    catch (error) {
        console.log("Error ", error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error while Fetching Credit Data"
        })
    }
}

exports.creatCreditTran = async (req, res) => {
    try {
        const { client,
            billNo,
            amount,
            productName,
            rate,
            quantity } = req.body
        console.log("data : ", req.body);

        const credit = await Credit.findById(client);

        if (!credit) {
            return res.status(401).json({
                success: false,
                message: "Credit not Found, Try again",
            })
        }

        const crediteTran = await CreditTran.create({
            client: credit?._id,
            billNo,
            amount,
            rate,
            quantity,
            productName,
        });

        if (!crediteTran) {
            return res.status(400).json({
                success: false,
                message: "Error Whiel Creationg transaction, Try again"
            })
        }

        credit.transaction.push(crediteTran?._id);
        await credit.save();

        return res.status(200).json({
            success: true,
            message: "Credit Trasaction Created Successfully",
            crediteTran,
        })
    }
    catch (error) {
        console.log("Error", error)
        res.status(200).json({
            success: false,
            message: "Internal server Error, while Creating Credit Transaction"
        })
    }
}

exports.getCreditTranData = async (req, res) => {
    try {
        const creditTran = await CreditTran.find().populate("client").exec();

        if (!creditTran) {
            return res.status(400).json({
                success: false,
                message: 'Can not get Credit transaction Data, try again'
            })
        }

        return res.status(200).json({
            success: false,
            message: "Credit Transaction Data fetched Successfully",
            creditTran,
        })
    }
    catch (error) {
        console.log("Error", error)
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}

exports.deleteCreditTranData = async (req, res) => {
    try {
        const { id } = req.body
        const deletedCreditTran = await CreditTran.findById(id);

        if (!deletedCreditTran) {
            return res.status(400).json({
                success: false,
                message: 'Credit Tracsaction not found'
            })
        }

        const clientId = deletedCreditTran.client

        const updatedClient = await Credit.findByIdAndUpdate(
            clientId,
            { $pull: { transaction: new mongoose.Types.ObjectId(deletedCreditTran._id) } }, // Correct instantiation of ObjectId
            { new: true } // Return the updated wallet
        );

        if (updatedClient) {
            // Step 3: Delete the transaction after successfully updating the wallet
            await CreditTran.findByIdAndDelete(id);

            return res.status(200).json({
                success: true,
                message: "Credit Transaction deleted successfully",
                deletedTran: deletedCreditTran,
            });
        }

        return res.status(404).json({
            success: false,
            message: "Credit not found or couldn't update",
        });
    }
    catch (error) {
        console.log("Error", error)
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}