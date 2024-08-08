const PurchaseOil = require('../../models/oil/purchaseOil.model'); // path to your model


const createPurchaseOil = async (req, res) => {
    const {
      invoiceNo,
      totalAmount,
      stockInCases,
      stockInLiters,
      taxDetails,
      reports
    } = req.body;
  
    const newPurchaseOil = new PurchaseOil({
      invoiceNo,
      totalAmount,
      stockInCases,
      stockInLiters,
      taxDetails,
      reports
    });
  
    try {
      const savedPurchaseOil = await newPurchaseOil.save();
      res.status(201).json(savedPurchaseOil);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  const getPurchaseOil = async (req, res) => {
    try {
      const purchaseOils = await PurchaseOil.find();
      res.json(purchaseOils);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // GET endpoint to retrieve a specific Purchase Oil record by ID
 const  purchaseOilById  = async (req, res) => {
    try {
      const purchaseOil = await PurchaseOil.findById(req.params.id);
      if (!purchaseOil) {
        return res.status(404).json({ message: 'Purchase Oil record not found' });
      }
      res.json(purchaseOil);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }





  const updatePurchaseOil =  async (req, res) => {
    try {
      const updatedPurchaseOil = await PurchaseOil.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true } // This option returns the updated document
      );
  
      if (!updatedPurchaseOil) {
        return res.status(404).json({ message: 'Purchase Oil record not found' });
      }
  
      res.json(updatedPurchaseOil);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }


  module.exports  = {getPurchaseOil,createPurchaseOil,updatePurchaseOil,purchaseOilById}