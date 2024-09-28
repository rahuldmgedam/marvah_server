const express = require("express");
const { create_credit_client, get_credit_client, update_credit_client, delete_credit_client } = require("../../controller/credit_client/credit_client.controller");

const Credit_Client_Router = express.Router();

Credit_Client_Router.post('/create', create_credit_client);
Credit_Client_Router.get('/',get_credit_client);

Credit_Client_Router.patch('/update/:id', update_credit_client);
Credit_Client_Router.delete('/delete/:id', delete_credit_client);

module.exports = {
    Credit_Client_Router
}