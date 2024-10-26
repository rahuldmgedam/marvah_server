const Bank = require("../../models/bank/Bank")
const BankTran = require("../../models/bank/BackTran")
const mongoose = require("mongoose")

exports.createBank = async (req, res) => {
    try {
        // console.log("Bank body" , req.body);

        const { BankName, AccountNumber, AccountName, BranchName, AccountType, Amount } = req.body

        if (!BankName || !AccountNumber || !AccountName || !BranchName || !AccountName || !Amount) {
            return res.status(400).json({
                success: false,
                message: "All fileds are required",
            })
        }

        const newBank = await Bank.create({ BankName, AccountNumber, AccountName, BranchName, AccountType, Amount });

        if (!newBank) {
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

exports.getBankData = async (req, res) => {
    try {
        const bankData = await Bank.find();

        if (!bankData) {
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
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Please provide Bank id, Try Again",
            })
        }
        const bank = await Bank.findById(id);
        if (!bank) {
            return res.status(400).json({
                success: false,
                message: "Bank not present",
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
    try {
        const { nerration, tranType, chequeNo, mode, BankId, amount, particulars, date } = req.body;
        console.log("req.body in bank tran ", req.body);

        if (!BankId || !amount || !mode || !tranType) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const bank = await Bank.findById(BankId);
        if (!bank) {
            return res.status(400).json({
                success: false,
                message: "Bank Not Present",
            });
        }

        // console.log("bank ", bank);

        const parsedAmount = Number(amount);
        const parsedBankAmount = Number(bank?.Amount);

        // console.log("amount ",parsedAmount, " ", parsedBankAmount)
        // Check if conversion was successful
        if (isNaN(parsedAmount) || isNaN(parsedBankAmount)) {
            return res.status(400).json({
                success: false,
                message: "Invalid amount values",
            });
        }

        let newTran = null;
        if (tranType === "Deposit") {
            newTran = await BankTran.create({
                chequeNo,
                tranType,
                amount: parsedAmount,
                totalAmount: parsedBankAmount + parsedAmount,
                mode,
                nerration,
                particulars,
                date,
                bank: bank._id,
            });
        } else if (tranType === "Withdraw") {
            newTran = await BankTran.create({
                chequeNo,
                tranType,
                amount: parsedAmount,
                totalAmount: parsedBankAmount - parsedAmount,
                mode,
                nerration,
                particulars,
                date,
                bank: bank._id,
            });
        }

        if (!newTran) {
            return res.status(401).json({
                success: false,
                message: "Transaction not saved, please try again",
            });
        }

        // Update bank amount based on transaction type
        if (tranType === "Deposit") {
            bank.Amount = parsedBankAmount + parsedAmount;
        } else if (tranType === "Withdraw") {
            bank.Amount = parsedBankAmount - parsedAmount;
        }

        bank.transaction.push(newTran._id);
        await bank.save();

        return res.status(200).json({
            success: true,
            message: "Transaction saved successfully",
            newTran,
        });

    } catch (error) {
        console.log("error ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};


exports.getBankTranData = async (req, res) => {
    try {
        const bankTranData = await BankTran.find().populate("bank").exec();

        if (!bankTranData) {
            return res.status(400).json(({
                success: false,
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

exports.updateBankTran = async (req, res) => {
    try {
        const { tranId, tranType, nerration, chequeNo, mode, BankId, amount, particulars, date } = req.body;
        console.log("req.body in bank tran ", req.body);
        if (!BankId || !amount || !mode || !tranId, tranType) {
            return res.status(400).json(({
                success: false,
                message: "All fileds are required",
            }))
        }

        const bank = await Bank.findById(BankId);
        if (!bank) {
            return res.status(400).json(({
                success: false,
                message: "Bank Not Present",
            }))
        }

        const transaction = await BankTran.findById(tranId);

        if (!transaction) {
            return res.status(402).json(({
                success: false,
                message: "Transaction Not Present",
            }))
        }

        // const bankId = transaction?.bank;

        const parsedAmount = Number(amount);
        const parsedBankAmount = Number(bank.Amount);

        // console.log("amount ",parsedAmount, " ", parsedBankAmount)
        // Check if conversion was successful
        if (isNaN(parsedAmount) || isNaN(parsedBankAmount)) {
            return res.status(400).json({
                success: false,
                message: "Invalid amount values",
            });
        }

        let newTran = null;
        if (tranType === "Deposit") {
            newTran = await BankTran.findByIdAndUpdate(tranId, { chequeNo, tranType, totalAmount: parsedBankAmount + parsedAmount, amount, mode, nerration, particulars, date, bank: bank._id })
        } else if (tranType === "Withdrow") {
            newTran = await BankTran.findByIdAndUpdate(tranId, { chequeNo, tranType, totalAmount: parsedBankAmount - parsedAmount, amount, mode, nerration, particulars, date, bank: bank._id })
        }

        if (!newTran) {
            return res.status(401).json(({
                success: false,
                message: "Transaction Not Updated, Please try again",
            }))
        }

        const updatedBank = await Bank.findByIdAndUpdate(
            BankId,
            { $pull: { transaction: new mongoose.Types.ObjectId(transaction._id) } }, // Correct instantiation of ObjectId
            { new: true } // Return the updated 
        );

        if(transaction?.tranType === tranType && (Number(transaction.amount) !== Number(amount))) {
            if (tranType === "Deposit")
                bank.Amount = bank.Amount + (amount - transaction?.amount);
            else if (tranType === "Withdrow")
                bank.Amount = bank.Amount - (amount - transaction?.amount);
        }
        else if(transaction?.tranType !== tranType && (Number(transaction.amount) === Number(amount))){
            if (tranType === "Deposit")
                bank.Amount = bank.Amount + (amount * 2);
            else if (tranType === "Withdrow")
                bank.Amount = bank.Amount - (amount * 2);
        }
        else if(transaction?.tranType !== tranType && (Number(transaction.amount) !== Number(amount))){
            if (tranType === "Deposit"){
                bank.Amount += transaction.amount
                bank.Amount = bank.Amount + (amount);
            }
            else if (tranType === "Withdrow")
                bank.Amount -= transaction.amount
                bank.Amount = bank.Amount - (amount * 2);
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

exports.deleteBankTran = async (req, res) => {
    try {
        const { id } = req.params;

        const tran = await BankTran.findById(id);

        if (!tran) {
            return res.status(400).json({
                success: false,
                message: "Transaction not present",
            });
        }

        const tranAmount = Number(tran.amount);
        const tranType = tran.tranType;
        const bankId = tran.bank;

        // Step 1: Find the bank and update the Amount
        const updatedBank = await Bank.findById(bankId);
        if (!updatedBank) {
            return res.status(404).json({
                success: false,
                message: "Bank not found",
            });
        }

        // Update the Amount based on transaction type
        if (tranType === "Deposit") {
            updatedBank.Amount -= tranAmount;
        } else if (tranType === "Withdraw") {
            updatedBank.Amount += tranAmount;
        }

        // console.log("updated bank ", updatedBank);

        // Step 2: Remove the transaction reference and save the bank
        updatedBank.transaction.pull(tran._id);
        await updatedBank.save();

        // Step 3: Delete the transaction after successfully updating the bank
        await BankTran.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: "Transaction deleted successfully",
            deletedTran: tran,
        });
    } catch (error) {
        console.log("error ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};
