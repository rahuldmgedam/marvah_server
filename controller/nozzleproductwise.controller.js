const { Data1, Data2, Data3 } = require('../../marwa_backend/models/nozzleproductwise.model'); // Assuming you saved the schema in models.js

// Get data
const getAllnozzleproductwise = async (req, res) => {
  try {
    // const Model = getModel(req.params.model);
    // const data = await Model.find();

       const data1 = await Data1.find();
       const data2 = await Data2.find();
       const data3 = await Data3.find();


    res.json({data1,data2,data3});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Create data
const createNozzleproductwiseData1Router = async (req, res) => {
  try {
    // const Model = getModel(req.params.model);
    // await Data1.create({
    //     nozzle,openingReading,closingReading,sale
    // })
      
    const newData = new Data1(req.body);
    await newData.save();
    // const newData = new Model(req.body);
    // await newData.save();
    res.status(201).json({message:"MS-1  created"});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}


const createNozzleproductwiseData2Router = async (req, res) => {
    try {
      // const Model = getModel(req.params.model);
      // await Data1.create({
      //     nozzle,openingReading,closingReading,sale
      // })
        
      const newData = new Data2(req.body);
      await newData.save();
      // const newData = new Model(req.body);
      // await newData.save();
      res.status(201).json({message:"MS-2(Speed) created"});
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  const createNozzleproductwiseData3Router = async (req, res) => {
    try {
      // const Model = getModel(req.params.model);
      // await Data1.create({
      //     nozzle,openingReading,closingReading,sale
      // })
        
      const newData = new Data3(req.body);
      await newData.save();
      // const newData = new Model(req.body);
      // await newData.save();
      res.status(201).json({message:"HSD created"});
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }


// Update data
const updateNozzleproductwise = async (req, res) => {
  try {
    const Model = getModel(req.params.model);
    const updatedData = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedData) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.json(updatedData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Delete data
const deleteNozzleproductwise =  async (req, res) => {
  try {
    const Model = getModel(req.params.model);
    const deletedData = await Model.findByIdAndDelete(req.params.id);
    if (!deletedData) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.json({ message: 'Data deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Helper function to get the correct model
function getModel(model) {
  switch (model) {
    case 'data1':
      return Data1;
    case 'data2':
      return Data2;
    case 'data3':
      return Data3;
    default:
      throw new Error('Invalid model name');
  }
}


module.exports = {createNozzleproductwiseData1Router,
    createNozzleproductwiseData3Router,
    createNozzleproductwiseData2Router
    ,getModel, getAllnozzleproductwise,updateNozzleproductwise,deleteNozzleproductwise}