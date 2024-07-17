
const express = require("express");
const { Register, Login, Logout } = require("../controller/user.controller");

 const UserRouter = express.Router()

//all routes will be appear here
UserRouter.post("/register",Register);
UserRouter.post("/login",Login);
UserRouter.get("/logout",Logout);

 module.exports = {
    UserRouter
 }