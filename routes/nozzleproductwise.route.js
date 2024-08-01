const express = require("express");
const { createNozzleproductwiseData1Router,
    createNozzleproductwiseData2Router,
    createNozzleproductwiseData3Router,getModel, getAllnozzleproductwise, updateNozzleproductwise, deleteNozzleproductwise } = require("../controller/nozzleproductwise.controller");

const nozzleproductwiseRouter = express.Router();

// nozzleproductwiseRouter.post('/data/:modal', createNozzleproductwiseRouter);
nozzleproductwiseRouter.post('/create/data1', createNozzleproductwiseData1Router);
nozzleproductwiseRouter.post('/create/data2', createNozzleproductwiseData2Router);
nozzleproductwiseRouter.post('/create/data3', createNozzleproductwiseData3Router);

// nozzleproductwiseRouter.get('/data/:modal',getAllnozzleproductwise );
 nozzleproductwiseRouter.get('/',getAllnozzleproductwise );

nozzleproductwiseRouter.put('/data/:model/:id', updateNozzleproductwise);
nozzleproductwiseRouter.delete('/data/:modal', deleteNozzleproductwise);


module.exports = {
    nozzleproductwiseRouter
}