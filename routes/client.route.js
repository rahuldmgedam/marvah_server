const express = require("express");
const { createClient, getAllClients } = require("../controller/client.controller");

const clientRouter = express.Router();

clientRouter.post('/create', createClient);
clientRouter.get('/',getAllClients);

module.exports = {
    clientRouter
}