const { CreditClientModel } = require("../../models/credit_client/credit_client.model");


// here i am creating machine
const create_credit_client = async (req, res) => {
    // logic
  const data = req.body;
  try {
  
    const newData = new CreditClientModel(data);
    await newData.save();
    res.status(200).json({ msg: "credit client created success", state: true });
  } catch (error) {
    console.log(error.message);
  }


};




const get_credit_client = async (req, res) => {
    try {
        const creditClient = await CreditClientModel.find();
        
        res.status(201).json({
            message: "See all client",
            success: true,
            creditClient,
        })
    } catch (error) {
        console.log(error.message)
    }
}


// here i am updating Machine 
const update_credit_client = async (req, res) => {
    const {id} = req.params;
    try {
        await CreditClientModel.findByIdAndUpdate({ _id:id}, req.body)
        res.status(200).json({
            message: "credit client updated successfully ",
            success: true,

        })

    } catch (error) {
        console.log(error.message)
    }
}


  


    // here i am Deleting Machine
const delete_credit_client = async(req,res)=>{
    const {id} = req.params;
   
    try {
        await CreditClientModel.findByIdAndDelete({_id:id})
        res.status(200).json({
            message:"credit client deleted Successfully",
            success:true,
        })
    } catch (error) {
        console.log(error.message)
    }
}



module.exports = {
  create_credit_client,
  get_credit_client,
  update_credit_client,
  delete_credit_client
}


