const mongoose = require("mongoose");
const Wallet = require("../../models/cards/Wallet");
const WalletTran = require("../../models/cards/WalletTran");

exports.CreateWallet = async (req, res) => {
    try {
        const { bankName } = req.body;

        if (!bankName) {
            return res.status(400).json({
                success: false,
                message: "Bank Name Required"
            })
        }
        const createdBank = await Wallet.create({ bankName });

        return res.status(200).json({
            success: true,
            message: "Wallet Created Successfully",
            createdBank
        })
    }
    catch (error) {
        console.log("Error ", error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error While Creation Wallet"
        })
    }
}

exports.getWalletData = async (req, res) => {
    try {
        const walletData = await Wallet.find();

        if (!walletData) {
            return res.status(400).json({
                success: false,
                message: "Wallet Data Not Present",
            })
        }

        return res.status(200).json({
            success: false,
            message: "Wallet Data Fetched Successfully",
            walletData,
        })
    }
    catch (error) {
        console.log("Error ", error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error While Fetching Wallet Data"
        })
    }
}

exports.deleteWallet = async (req, res) => {
    try {
        const { walletId } = req.body

        console.log("walletId ", walletId)

        const deletedWallet = await Wallet.findByIdAndDelete(walletId);

        console.log("deletedWallet", deletedWallet)

        if (!deletedWallet) {
            return res.status(400).json({
                success: false,
                message: "Wallet Not deleted, Please Try agein",
            })
        }

        return res.status(200).json({
            success: true,
            message: "Wallet Deleted Successfully",
            deletedWallet,
        })
    }
    catch (error) {
        console.log("Error ", error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error While Deleting Wallet"
        })
    }
}

exports.statusHandler = async (req, res) => {
    try {
        const { Id, status } = req.body

        const data = await Wallet.findByIdAndUpdate(Id, { status }, { new: true });

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

exports.createWalletTran = async (req, res) => {
    try {
        const { walletId, noOfTran, amount } = req.body

        // console.log("req.body ",req.body);

        if (!walletId || !noOfTran || !amount) {
            return res.status(400).json({
                success: false,
                message: "Tansaction Details Required",
            })
        }

        const wallet = await Wallet.findById(walletId);

        if (!wallet) {
            return res.status(401).json({
                success: false,
                message: "Wallet not Found",
            })
        }

        const createdTran = await WalletTran.create({
            noOfTran, amount, wallet: wallet?._id
        })

        wallet.transaction = createdTran?._id
        await wallet.save();

        return res.status(200).json({
            success: true,
            createdTran,
            message: "Tansaction Saved Successfully",
        })
    }
    catch (error) {
        console.log("Error", error)
        return res.status(500).json({
            success: false,
            message: "Internal Sever Error",
        })
    }
}

exports.getWalletTrans = async (req, res) => {
    try {
        const walletTransData = await WalletTran.find().populate("wallet").exec();

        if (!walletTransData) {
            return res.status(400).json({
                success: false,
                message: "Data not Present",
            })
        }
        return res.status(200).json({
            success: true,
            message: "Data Fetched Successfully",
            walletTransData
        })
    }
    catch (error) {
        console.log("Error ", error)
        return res.status(500).json({
            success: false,
            message: "Internal Sever Error",
        })
    }
}

exports.deleteWalletTran = async (req, res) => {
    try {
        const { tranId } = req.body; // Extract transaction ID from the request body

        // Step 1: Find the transaction by its ID
        const deletedTransaction = await WalletTran.findById(tranId);

        if (!deletedTransaction) {
            return res.status(404).json({
                success: false,
                message: "Transaction not found",
            });
        }

        const walletId = deletedTransaction.wallet; // Get the associated wallet ID
        // console.log("WalletId", walletId);

        // Step 2: Remove the transaction from the Wallet's transaction array
        const updatedWallet = await Wallet.findByIdAndUpdate(
            walletId,
            { $pull: { transaction: new mongoose.Types.ObjectId(deletedTransaction._id) } }, // Correct instantiation of ObjectId
            { new: true } // Return the updated wallet
        );

        if (updatedWallet) {
            // Step 3: Delete the transaction after successfully updating the wallet
            await WalletTran.findByIdAndDelete(tranId);

            return res.status(200).json({
                success: true,
                message: "Transaction deleted successfully",
                deletedTran: deletedTransaction,
            });
        }

        return res.status(404).json({
            success: false,
            message: "Wallet not found or couldn't update",
        });

    } catch (error) {
        console.log("Error", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};