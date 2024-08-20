const PurchaseOil = require('../../models/oil/purchaseOil.model'); // path to your model


// const createPurchaseOil =  async (req, res) => {
//   try {
//     const oilProductData = req.body;

//     // Check if a product with the same _id exists
//     const existingProduct = await PurchaseOil.findOne({ _id: oilProductData._id });

//     if (existingProduct) {
//       // If it exists, you may choose to update it instead of inserting a new one
//       await OilProduct.updateOne({ _id: oilProductData._id }, oilProductData);
//       res.status(200).json({ message: "Oil product updated successfully" });
//     } else {
//       // Otherwise, insert a new document
//       const newOilProduct = new PurchaseOil(oilProductData);
//       await newOilProduct.save();
//       res.status(201).json({ message: "Oil product created successfully" });
//     }
//   } catch (error) {
//     console.error("Error saving oil product data:", error);
//     res.status(500).json({ error: "Failed to save oil product data" });
//   }
// };


 const createPurchaseOil =  async (req, res) => {
  try {
    const { oilProductData } = req.body;

    // Save each oil product data to the database
    for (const oilProduct of oilProductData) {
      const newOilProduct = new PurchaseOil(oilProduct);
      await newOilProduct.save();
    }

    res.status(201).json({ message: "Oil product data saved successfully" });
  } catch (error) {
    console.error("Error saving oil product data:", error);
    res.status(500).json({ error: "Failed to save oil product data" });
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
      const { id } = req.params;
      const updatedData = req.body;
  
      const updatedOilProduct = await PurchaseOil.findByIdAndUpdate(id, updatedData, {
        new: true, // Return the updated document
      });
  
      if (!updatedOilProduct) {
        return res.status(404).json({ message: "Oil product not found" });
      }
  
      res.status(200).json(updatedOilProduct);
    } catch (error) {
      console.error("Error updating oil product:", error);
      res.status(500).json({ error: "Failed to update oil product" });
    }
  }


  module.exports  = {getPurchaseOil,createPurchaseOil,updatePurchaseOil,purchaseOilById}