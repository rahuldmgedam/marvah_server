const express = require("express");
const {
  createpetrolDecantation,
  handleGetProductKl,
  getpetrolDecantation,
  deleteepetrolDecantation,
  updatepetrolDecantation,
} = require("../../controller/petrol/petrolDecandation.controller");

const PetrolDecantationRouter = express.Router();

PetrolDecantationRouter.post("/create", createpetrolDecantation);
PetrolDecantationRouter.get("/", getpetrolDecantation);
PetrolDecantationRouter.patch("/update/:id", updatepetrolDecantation);
PetrolDecantationRouter.delete("/delete/:id", deleteepetrolDecantation);
PetrolDecantationRouter.get("/product/:id", handleGetProductKl);

module.exports = {
  PetrolDecantationRouter,
};
