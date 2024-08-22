const OilGodown = require('../../models/oil/godownOil.model'); // path to your model



const createGodownOil = async (req, res) => {
    try {
      const oilGodownData = req.body;
      await OilGodown.insertMany(oilGodownData);
      res.status(201).json({ message: "Stock records saved successfully." });
    } catch (error) {
      res.status(500).json({ message: "Failed to save stock records.", error });
    }
  }

  const getGodownOil = async (req, res) => {
    try {
      const purchaseOils = await OilGodown.find();
      res.json(purchaseOils);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };



 module.exports =  {createGodownOil,getGodownOil}