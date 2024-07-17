const { Machine } = require("../models/machine.model");
const Nozzel = require("../models/nozzleLayout");



const createNozzel = async (req, res) => {
    
    try {
        const {_id, sides, nozzleName, fuletype} = req.body;

        const nozzel = await Nozzel.create({
            nozzleName, 
            fuletype
        })

        if(!nozzel){
            return res.status(404).json({
                succsss: false,
                message: "Nozzle not created",
            })
        }

        const machine = Machine.findById(_id);
        machine.sides.push({
            side: sides,
            nozzleLayout: nozzel._id
        }) 

        const data = await machine.save();

        console.log("nozzlde : ", nozzel);
        console.log("machine : ", data)
        


        return res.status(200).json({
            succsss: true,
            message: "Nozzle created",
        })
    }
    catch(error) {
        res.status(500).json({
            succsss: false,
            message: "Internal Server Error",
        })
    }
}