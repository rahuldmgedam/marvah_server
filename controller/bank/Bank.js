const Bank = require("../../models/bank/Bank")
const BankTran = require("../../models/bank/BackTran")
const mongoose = require("mongoose")

exports.createBank = async(req, res) => {
    try{
        // console.log("Bank body" , req.body);

        const {BankName, AccountNumber, AccountName, BranchName,AccountType} = req.body

        if(!BankName || !AccountNumber || !AccountName || !BranchName || !AccountName) {
            return res.status(400).json({
                success: false,
                message: "All fileds are required",
            })
        }

        const newBank = await Bank.create({BankName, AccountNumber, AccountName, BranchName, AccountType});

        if(!newBank) {
            return res.status(401).json({
                success: false,
                message: "Try Again, Bank Not Created"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Bank Created Successfully",
            newBank,
        })
    }
    catch (error) {
        console.log("error ", error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
} 

exports.getBankData = async(req, res) => {
    try{
        const bankData = await Bank.find();

        if(!bankData) {
            return res.status(400).json({
                success: false,
                message: "Bank Data not Found",
            })
        }

        return res.status(200).json({
            success: true,
            message: "Bank Data Fetched Successfully", 
            bankData,
        })
    }
    catch (error) {
        console.log("error ", error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

exports.changeStatus = async (req, res) => {
    try {
        const { id } = req.params;
        // console.log("id ", id);
        
        // Fetch the bank record first to get the current status
        const bank = await Bank.findById(id);

        if (!bank) {
            return res.status(400).json({
                success: false,
                message: "Bank record not found, status not updated",
            });
        }

        // Toggle the status
        const updatedBank = await Bank.findByIdAndUpdate(id, { status: !bank.status }, { new: true });

        return res.status(200).json({
            success: true,
            message: "Status updated successfully",
            data: updatedBank
        });
        
    } catch (error) {
        console.log("error ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

exports.deleteBank = async (req, res) => {
    try{
        const {id} = req.params;
        if(!id) {
            return res.status(400).json({
                success: false,
                message:"Please provide Bank id, Try Again",
            })
        }
        const bank = await Bank.findById(id);
        if(!bank) {
            return res.status(400).json({
                success: false,
                message:"Bank not present",
            })
        }
        
        await Bank.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: "Bank deleted Successfully",
            bank,
        })

    } catch (error) {
        console.log("error ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

// Bank Transactions

exports.createBankTran = async (req, res) => {
    try{
        const {nerration, checkNo, BankId, amount, particulars, date} = req.body;
        console.log("req.body in bank tran ", req.body);
        if(!nerration || !checkNo || !BankId || !amount || !particulars || !date) {
            return res.status(400).json(({
                success:false,
                message: "All fileds are required",
            }))
        }

        const bank = await Bank.findById(BankId);
        if(!bank) {
            return res.status(400).json(({
                success:false,
                message: "Bank Not Present",
            }))
        }

        const newTran = await BankTran.create({checkNo, amount, nerration, particulars, date, bank: bank._id})

        if(!newTran) {
            return res.status(401).json(({
                success:false,
                message: "Transaction Not saved, Please try again",
            }))
        }

        bank.transaction.push(newTran._id);
        await bank.save();

        return res.status(200).json({
            success: true,
            message: "Transaction saved successfully",
            newTran,
        })

    } catch (error) {
        console.log("error ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

exports.getBankTranData = async (req, res) => {
    try{
        const bankTranData = await BankTran.find().populate("bank").exec();

        if(!bankTranData) {
            return res.status(400).json(({
                success:false,
                message: "Bank Transactions not Present",
            }))
        }

        return res.status(200).json({
            success: true,
            message: "Bank Transaction data Fetched successfully",
            bankTranData,
        })
    } catch (error) {
        console.log("error ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

exports.deleteBankTran = async (req, res) => {
    try{
        const {id} = req.params;

        const tran = await BankTran.findById(id);

        if(!tran) {
            return res.status(400).json({
                success: false,
                message: "Transacion Not present",
            })
        }

        const bankId = tran?.bank;
        const updatedBank = await Bank.findByIdAndUpdate(
            bankId,
            { $pull: { transaction: new mongoose.Types.ObjectId(tran._id) } }, // Correct instantiation of ObjectId
            { new: true } // Return the updated wallet
        );

        if (updatedBank) {
            // Step 3: Delete the transaction after successfully updating the wallet
            await BankTran.findByIdAndDelete(id);

            return res.status(200).json({
                success: true,
                message: "Transaction deleted successfully",
                deletedTran: tran,
            });
        }

        return res.status(404).json({
            success: false,
            message: "Bank not found or couldn't update",
        });

    } catch (error) {
        console.log("error ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}