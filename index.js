const express = require("express")
const cors = require("cors")
const { connection } = require("./config/db")
const { TankRouter } = require("./routes/tank.routes")
 const { MachineRouter } = require("./routes/machine.route")
const { ReadinRouter } = require("./routes/reading.route")
const { UserRouter } = require("./routes/user.route");


const { SpeedRouter } = require("./routes/fuels/speed.route")
const { MsRouter } = require("./routes/fuels/ms.route")
const {  HsdRouter } = require("./routes/fuels/hsd.route")



const { MachineLayoutRouter } = require("./routes/machineLayout.route")
const { MWMRRouter } = require("./routes/mmwr.route")
const { ReadingCRouter } = require("./routes/readingC.route");

// gagan code
const { clientRouter } = require("./routes/client.route")
const { handleLoneRouter } = require("./routes/handleLone.route")
const { dayStartRouter } = require("./routes/dayStart.route")
const { nozzleproductwiseRouter } = require("./routes/nozzleproductwise.route")
const { fuelSalesRouter } = require("./routes/petrol/fuelSales.route")
const { variationRouter } = require("./routes/petrol/variation.route")
const { petrolProductRouter } = require("./routes/petrol/PetrolProduct.routes")
const { ProductPetrolInvoiceFeedingRouter } = require("./routes/petrol/petrolInvoiceFeeding.routes")
const { PetrolDecantationRouter } = require("./routes/petrol/petrolDecandation.routes")
<<<<<<< HEAD
const { Credit_Client_Router } = require("./routes/credit_client/credit_client.route")
=======
const { addOilRouter } = require("./routes/oil/addOil.route")
const { purchaseOilRouter } = require("./routes/oil/purchaseOil.route")
>>>>>>> e9cb1e60df8403d8d1ec511b29895e0d0e450920
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cors())
app.use("/tank", TankRouter)
app.use("/machine",MachineRouter)

//using in m/c layout for 1, 2 side
app.use("/reading",ReadinRouter);
//using in m/c layout for 1, 2 side 

app.use("/readingC",ReadingCRouter);


//fuels
app.use("/ms",MsRouter);
app.use("/speed",SpeedRouter);
app.use("/hsd",HsdRouter);

app.use("/user",UserRouter)
app.use("/machinelayout", MachineLayoutRouter)
app.use("/mmwr",MWMRRouter)

// gagan code 
 app.use("/daystart",dayStartRouter)
 app.use("/handloan",handleLoneRouter)
app.use("/client",clientRouter)

 app.use("/nozzleproductwise",nozzleproductwiseRouter)
 app.use("/fuelsales",fuelSalesRouter);
<<<<<<< HEAD
 app.use("/variation",variationRouter)

=======
 app.use("/variation",variationRouter);

 app.use("/addoil",addOilRouter);
>>>>>>> e9cb1e60df8403d8d1ec511b29895e0d0e450920

// mukesh code
 app.use("/petrol",petrolProductRouter)
 app.use("/petrolInvoiceFeeding", ProductPetrolInvoiceFeedingRouter)
app.use("/petroldecantation", PetrolDecantationRouter)
<<<<<<< HEAD
app.use("/credit_client", Credit_Client_Router)

=======
app.use("/purchaseoil",purchaseOilRouter)
>>>>>>> e9cb1e60df8403d8d1ec511b29895e0d0e450920




const port = 4000 || 4001

app.get("/",(req,res)=>{
   res.send("<h1>welcome to marwah server</h1>")
})

app.listen(port, async()=> {
try {
   await connection
   console.log(`Server is running on http://localhost:${port}`);
   console.log("data base is connected");
} catch (error) {
   console.log(error.message); 
}
})
