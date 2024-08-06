const { PetrolProductModel } = require("../../models/petrol/PetrolProduct.model");


const handleCreatePetrol = async (req, res) => {
  // logic
  const data = req.body;
  try {
    const createDate = new Date(); 
    const petrol = new PetrolProductModel({
      ...data,
      createDate,
    });
    await petrol.save();
    res.status(200).json({ msg: "petrol created success", state: true });
  } catch (error) {
    console.log(error.message);
  }
};

const handlegetPetrol = async (req,res) => {
  // logic
  try {
    const petrol = await PetrolProductModel.find()
    res.status(200).send(petrol)
  } catch (error) {
    console.log(error.message); 
  }
};

const handleupdatePetrol = async(req,res) => {
const {id} = req.params
console.log(id);
console.log(req.body);
 try {
    await PetrolProductModel.findByIdAndUpdate({_id:id}, req.body)
    res.json({ msg: `petrol update successfully!!!`, success:true})
 } catch (error) {
  console.log(error.message); 
 }
};
const handledeletePetrol = async(req,res) => {
const {id} = req.params

 try {
    await PetrolProductModel.findByIdAndDelete({_id:id})
    res.json({ msg: `petrol deleted successfully!!!`, success:true})
 } catch (error) {
  console.log(error.message); 
 }
};



module.exports = {
    handleCreatePetrol,
    handlegetPetrol,
    handleupdatePetrol,
    handledeletePetrol
};
