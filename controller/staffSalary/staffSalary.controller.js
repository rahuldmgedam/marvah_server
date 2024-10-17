const { StaffSalary } = require("../../models/staffSalary/staffSchema");
// app.get('/api/staff',
const getStaffSalary =  async (req, res) => {
    try {
      const staffData = await StaffSalary.find();
      res.json(staffData);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving staff data' });
    }
  };
  
  // 2. POST: Add new staff data
const createStaffSalary =  async (req, res) => {
    const newStaff = new StaffSalary(req.body);
    try {
      await newStaff.save();
      res.status(201).json(newStaff);
    } catch (error) {
      res.status(400).json({ message: 'Error adding staff data' });
    }
  };
  
  // 3. PUT: Update existing staff data
//   app.put('/api/staff/:id',
 const updateStaffSalary =  async (req, res) => {
    try {
      const updatedStaff = await StaffSalary.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedStaff) return res.status(404).json({ message: 'Staff not found' });
      res.json(updatedStaff);
    } catch (error) {
      res.status(400).json({ message: 'Error updating staff data' });
    }
  };
  
  // 4. DELETE: Delete staff data
//   app.delete('/api/staff/:id',
 const deleteStaffSalary =  async (req, res) => {
    try {
      const deletedStaff = await StaffSalary.findByIdAndDelete(req.params.id);
      if (!deletedStaff) return res.status(404).json({ message: 'Staff not found' });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Error deleting staff data' });
    }
  };

  module.exports = {getStaffSalary,createStaffSalary,updateStaffSalary,deleteStaffSalary}