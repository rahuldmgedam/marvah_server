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
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cors())
app.use("/tank", TankRouter)
app.use("/machine",MachineRouter)
app.use("/reading",ReadinRouter);

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




const port = process.env.PORT || 4001;

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
