const { hsdfuel } = require("../../models/fuel models/hsdFuel.model");



const createHsd = async (req, res) => {
  // logic
  const hsdData = req.body;
  try {
    const createDate = new Date(); 
    const hsd = new hsdfuel({
      ...hsdData,
    
  });
    await hsd.save();
    res.status(200).json({ msg: "HSD fuel  created success", state: true });
  } catch (error) {
    console.log(error.message);
  }
};

const getHsd= async (req,res) => {
  // logic
  try {
    const allHsd= await hsdfuel.find()
    res.status(200).send(allHsd)
  } catch (error) {
    console.log(error.message); 
  }
};
const updateHsd= async(req,res) => {
const {hsdId} = req.parahsd

 try {
    await hsdfuel.findByIdAndUpdate({_id:hsdId}, req.body)
    res.json({ msg: `Hsd fuel update successfully!!!` })
 } catch (error) {
  console.log(error.message); 
 }
};

const deleteHsd= async(req,res) => {
    const {hsdId} = req.params
 
  try {
await hsdfuel.findByIdAndDelete({_id:hsdId})
res.status(200).json({msg:"Hsd fuel deleted successfully!!!"})  
 } catch (error) {
  console.log(error.message); 
 }
};

module.exports = {
  createHsd,
  getHsd,
  updateHsd,
  deleteHsd,
};
