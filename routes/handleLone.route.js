const express = require("express");
const { createHandloan, getAllHandloans, getHandloanById, updateHandloan, deleteHandloan } = require("../controller/handleLone.controller");

const handleLoneRouter = express.Router();

handleLoneRouter.post('/create', createHandloan);
handleLoneRouter.get('/',getAllHandloans );
handleLoneRouter.patch('/gethandloansbyid/:id', getHandloanById);
handleLoneRouter.patch('/updatehandloans/:id', updateHandloan);
handleLoneRouter.patch('/deletehandloans/:id', deleteHandloan);


module.exports = {
    handleLoneRouter
}