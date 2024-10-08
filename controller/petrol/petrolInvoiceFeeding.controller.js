const { ProductPetrolFeedingModel } = require("../../models/petrol/petrolInvoiceFeeding.model");
const { PetrolProductModel } = require("../../models/petrol/PetrolProduct.model");


// here i am creating machine
const createpetrolProductInvoiceFeeding = async (req, res) => {
    // logic
  const data = req.body;
  console.log("data", data);
  delete data._id;
  try {
    const createDate = new Date(); 
    const newData = new ProductPetrolFeedingModel({
      ...data,
      createDate,
    });
    await newData.save();
    res.status(200).json({ msg: "petrol product invoice created success", state: true });
  } catch (error) {
    console.log(error.message);
  }


};




const getpetrolProductInvoiceFeeding = async (req, res) => {
    try {
        const petrolInvoice = await ProductPetrolFeedingModel.find();
        
        res.status(201).json({
            message: "See all petrolInvoice",
            success: true,
            petrolInvoice,
        })
    } catch (error) {
        console.log(error.message)
    }
}


// here i am updating Machine 
const updatepetrolProductInvoiceFeeding = async (req, res) => {
    const {id} = req.params;
    try {
        await ProductPetrolFeedingModel.findByIdAndUpdate({ _id:id}, req.body)
        res.status(200).json({
            message: "petrol invoice feeding updated successfully ",
            success: true,

        })

    } catch (error) {
        console.log(error.message)
    }
}

const newInvoiceEdit = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedInvoice = await ProductPetrolFeedingModel.findByIdAndUpdate(id, updatedData, { new: true });
    if (!updatedInvoice) {
      return res.status(404).send({ message: "Invoice not found" });
    }
    res.status(200).send(updatedInvoice);
  } catch (error) {
    res.status(500).send({ message: "Error updating invoice", error });
  }
}

const updatepetrolProductInvoiceFeedingshow = async (req, res) => {
    const { selectedInvoice } = req.params;
  console.log(selectedInvoice);
    if (selectedInvoice) {
      try {
        // Update all documents where the invoiceNumber matches the selectedInvoice
        const updateResult = await ProductPetrolFeedingModel.updateMany(
          { invoiceNumber: selectedInvoice },
          { $set: { show: true } }
        );
  console.log("res", updateResult);
        if (updateResult.matchedCount> 0) {
          res.status(200).json({
            message: "Petrol invoice feeding updated successfully",
            success: true,
            updatedCount: updateResult.nModified
          });
        } else {
          res.status(404).json({
            message: "No matching petrol invoice feeding found",
            success: false,
          });
        }
      } catch (error) {
        console.log(error.message);
        res.status(500).json({
          message: "An error occurred while updating petrol invoice feeding",
          success: false,
          error: error.message,
        });
      }
    } else {
      res.status(400).json({
        message: "Invoice number is required",
        success: false,
      });
    }
  };
  


    // here i am Deleting Machine
const deletepetrolProductInvoiceFeeding = async(req,res)=>{
    const {id} = req.params;
   
    try {
        await ProductPetrolFeedingModel.findByIdAndDelete({_id:id})
        res.status(200).json({
            message:"petrol feeding invoice deleted Successfully",
            success:true,
        })
    } catch (error) {
        console.log(error.message)
    }
}

const calSumTotals =  async (req, res) => {
  try {
    // Get all invoices from the DB
    const invoices = await ProductPetrolFeedingModel.find();

    // Initialize the totals
    let productAmountSum = 0;
    let totalPayableTds = 0;
    let totalCgst = 0;
    let totalSgst = 0;
    let totalLfr = 0;

    // Iterate through the invoices to calculate the required sums
    invoices.forEach((invoice) => {
      // Sum of productAmount
      productAmountSum += invoice.productAmount;

      // Calculate payable TDS (productAmount * tds)
      totalPayableTds += invoice.productAmount * (invoice.tds || 0);

      // Calculate total CGST and SGST (productAmount * cgst or sgst percentage)
      totalCgst += invoice.productAmount * (invoice.cgst || 0);
      totalSgst += invoice.productAmount * (invoice.sgst || 0);

      // Calculate LFR total (lfrPerKl * klQty)
      if (invoice.lfrPerKl && invoice.klQty) {
        totalLfr += invoice.lfrPerKl * invoice.klQty;
      }
    });

    // Send the calculated totals as a response
    res.status(200).json({
      message: 'Calculation successful',
      productAmountSum,
      totalPayableTds,
      totalCgst,
      totalSgst,
      totalLfr,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'An error occurred while calculating',
      error: error.message,
    });
  }
};

module.exports = {
    createpetrolProductInvoiceFeeding,
    getpetrolProductInvoiceFeeding,
    updatepetrolProductInvoiceFeeding,
    deletepetrolProductInvoiceFeeding,
    updatepetrolProductInvoiceFeedingshow,
    newInvoiceEdit,
    calSumTotals
}


