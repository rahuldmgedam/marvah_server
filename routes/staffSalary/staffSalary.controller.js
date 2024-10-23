const express = require("express");
const { createStaffSalary, getStaffSalary, deleteStaffSalary, updateStaffSalary } = require("../../controller/staffSalary/staffSalary.controller");

const staffSalaryRouter = express.Router();

staffSalaryRouter.post('/createStaffSalary', createStaffSalary);
staffSalaryRouter.get('/',getStaffSalary );
staffSalaryRouter.put('/staffSalaryUpdate/:id', updateStaffSalary);
staffSalaryRouter.delete('/staffSalaryDelete/:id', deleteStaffSalary);


module.exports = {
    staffSalaryRouter
}