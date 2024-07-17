const { speedfuel } = require("../../models/fuel models/speedFuel.model");



const createSpeed = async (req, res) => {
  // logic
  const speedData = req.body;
  try {
    const createDate = new Date(); 
    const speed = new speedfuel({
      ...speedData,
      createDate,
    });
    await speed.save();
    res.status(200).json({ msg: "Speed fuel  created success", state: true });
  } catch (error) {
    console.log(error.message);
  } 
};

const getSpeed= async (req,res) => {
  // logic
  try {
    const allSpeed = await speedfuel.find()
    res.status(200).send(allSpeed)
  } catch (error) {
    console.log(error.message); 
  }
};
const updateSpeed= async(req,res) => {
const {speedId} = req.params

 try {
    await speedfuel.findByIdAndUpdate({_id:speedId}, req.body)
    res.json({ msg: `Speed fuel update successfully!!!` })
 } catch (error) {
  console.log(error.message); 
 }
};

const deleteSpeed= async(req,res) => {
    const {speedId} = req.params
 
  try {
await speedfuel.findByIdAndDelete({_id:speedId})
res.status(200).json({msg:"Speed fuel deleted successfully!!!"})  
 } catch (error) {
  console.log(error.message); 
 }
};

module.exports = {
  createSpeed,
  getSpeed,
  updateSpeed,
  deleteSpeed,
};
