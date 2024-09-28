const express = require("express");
const {
  createpetrolProductInvoiceFeeding,
  getpetrolProductInvoiceFeeding,
  updatepetrolProductInvoiceFeeding,
  deletepetrolProductInvoiceFeeding,
  updatepetrolProductInvoiceFeedingshow,
  newInvoiceEdit,
  calSumTotals,
} = require("../../controller/petrol/petrolInvoiceFeeding.controller");

const ProductPetrolInvoiceFeedingRouter = express.Router();

ProductPetrolInvoiceFeedingRouter.post(
  "/create",
  createpetrolProductInvoiceFeeding
);
ProductPetrolInvoiceFeedingRouter.get("/", getpetrolProductInvoiceFeeding);
ProductPetrolInvoiceFeedingRouter.patch(
  "/update/:id",
  updatepetrolProductInvoiceFeeding
);
ProductPetrolInvoiceFeedingRouter.patch(
  "/updateshow/:selectedInvoice",
  updatepetrolProductInvoiceFeedingshow
);
ProductPetrolInvoiceFeedingRouter.delete(
  "/delete/:id",
  deletepetrolProductInvoiceFeeding
);

ProductPetrolInvoiceFeedingRouter.patch(
  "updatenew/:id",
  newInvoiceEdit
);

ProductPetrolInvoiceFeedingRouter.post(
  "/calSumTotals",
  calSumTotals
);

module.exports = {
  ProductPetrolInvoiceFeedingRouter,
};
