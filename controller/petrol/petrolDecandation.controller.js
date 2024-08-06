const { petrolDecandationModel } = require("../../models/petrol/petrolDecandation.model");
const { ProductPetrolFeedingModel } = require("../../models/petrol/petrolInvoiceFeeding.model");
const { TankModel } = require("../../models/tank.model");

const createpetrolDecantation = async (req, res) => {
  // logic
  const petroldata = req.body;
  delete petroldata.invoiceNumber
  console.log("hi", petroldata);
   try {
  
    const data = new petrolDecandationModel(petroldata);
     await data.save();
    res.status(200).json({ msg: "petrol Decantation created success", state: true });
  } catch (error) {
    console.log(error.message);
  }
};

const getpetrolDecantation = async (req,res) => {
  // logic
  try {
    const allData = await petrolDecandationModel.find()
    res.status(200).send(allData)
  } catch (error) {
    console.log(error.message); 
  }
};
const updatepetrolDecantation = async(req,res) => {
const {id} = req.params

 try {
    await petrolDecandationModel.findByIdAndUpdate({_id:id}, req.body)
    res.json({ msg: `update successfully!!!` })
 } catch (error) {
  console.log(error.message); 
 }
};

const deleteepetrolDecantation = async(req,res) => {
 const {id} = req.params
 console.log(id);
  try {
await petrolDecandationModel.findByIdAndDelete({_id:id})
res.status(200).json({msg:"pettrol decantation deleted successfully!!!", success:true})  
 } catch (error) {
  console.log(error.message); 
 }
};

const handleGetProductKl = async (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  try {
   
    const data = await ProductPetrolFeedingModel.find({ invoiceNumber: id }).select('ProductName klQty');
    console.log("data", data);
    res.status(200).send(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ error: error.message });
  }
};


module.exports = {
    createpetrolDecantation,
    getpetrolDecantation,
    updatepetrolDecantation,
    deleteepetrolDecantation,
    handleGetProductKl
};
