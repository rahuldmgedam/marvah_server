const Bank = require("../../models/bank/Bank")

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
