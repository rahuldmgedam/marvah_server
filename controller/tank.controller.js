const { TankModel } = require("../models/tank.model");

const createTank = async (req, res) => {
  // logic
  const tankData = req.body;
  try {
    const createDate = new Date(); 
    const tank = new TankModel({
      ...tankData,
      createDate,
    });
    await tank.save();
    res.status(200).json({ msg: "Tank created success", state: true });
  } catch (error) {
    console.log(error.message);
  }
};

const getTank = async (req,res) => {
  // logic
  try {
    const allTank = await TankModel.find()
    res.status(200).send(allTank)
  } catch (error) {
    console.log(error.message); 
  }
};
const updateTank = async(req,res) => {
const {tankId} = req.params

 try {
    await TankModel.findByIdAndUpdate({_id:tankId}, req.body)
    res.json({ msg: `tank update successfully!!!` })
 } catch (error) {
  console.log(error.message); 
 }
};

const deleteTank = async(req,res) => {
 const {tankId} = req.params
 
  try {
await TankModel.findByIdAndDelete({_id:tankId})
res.status(200).json({msg:"tank deleted successfully!!!"})  
 } catch (error) {
  console.log(error.message); 
 }
};

module.exports = {
  createTank,
  getTank,
  updateTank,
  deleteTank,
};
