const express = require("express");
const { createClient, getAllClients, updateClient } = require("../controller/client.controller");

const clientRouter = express.Router();

clientRouter.post('/create', createClient);
clientRouter.get('/',getAllClients);

 clientRouter.patch('/update/:id', updateClient);

module.exports = {
    clientRouter
}