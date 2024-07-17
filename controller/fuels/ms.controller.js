const { msfuel } = require("../../models/fuel models/msfuel.model");



const createMs = async (req, res) => {
  // logic
  const msData = req.body;
  try {
    const createDate = new Date(); 
    const ms = new msfuel({
      ...msData,
      createDate,
    });
    await ms.save();
    res.status(200).json({ msg: "MS fuel  created success", state: true });
  } catch (error) {
    console.log(error.message);
  }
};

const getMs= async (req,res) => {
  // logic
  try {
    const allMs= await msfuel.find()
    res.status(200).send(allMs)
  } catch (error) {
    console.log(error.message); 
  }
};
const updateMs= async(req,res) => {
const {msId} = req.params

 try {
    await msfuel.findByIdAndUpdate({_id:msId}, req.body)
    res.json({ msg: `Ms fuel update successfully!!!` })
 } catch (error) {
  console.log(error.message); 
 }
};

const deleteMs= async(req,res) => {
    const {msId} = req.params
 
  try {
await msfuel.findByIdAndDelete({_id:msId})
res.status(200).json({msg:"Ms fuel deleted successfully!!!"})  
 } catch (error) {
  console.log(error.message); 
 }
};

module.exports = {
  createMs,
  getMs,
  updateMs,
  deleteMs,
};
