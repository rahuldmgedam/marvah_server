const { msfuel } = require("../../models/fuel models/msfuel.model");

const createMs = async (req, res) => {
  // logic
  const msData = req.body;
  try {
    const createDate = new Date();
    const ms = new msfuel({
      ...msData,
      createDate,
    });
    await ms.save();
    res.status(200).json({ msg: "MS fuel  created success", state: true });
  } catch (error) {
    console.log(error.message);
  }
};

const getMs = async (req, res) => {
  // logic
  try {
    const allMs = await msfuel.find();
    res.status(200).send(allMs);
  } catch (error) {
    console.log(error.message);
  }
};

const updateMs = async (req, res) => {
  const { msId } = req.params;

  try {
    await msfuel.findByIdAndUpdate({ _id: msId }, req.body);
    res.json({ msg: `Ms fuel update successfully!!!` });
  } catch (error) {
    console.log(error.message);
  }
};

const deleteMs = async (req, res) => {
  const { msId } = req.params;

  try {
    await msfuel.findByIdAndDelete({ _id: msId });
    res.status(200).json({ msg: "Ms fuel deleted successfully!!!" });
  } catch (error) {
    console.log(error.message);
  }
};

const getRidingByDate = async (req, res) => {
  try {
    const { lastDate } = req.body;
    console.log("req.body ", lastDate);

    // Parse lastDate into a Date object and validate it
    const date = new Date(lastDate);
    if (isNaN(date)) {
      return res.status(400).json({
        success: false,
        message: "Invalid date format",
      });
    }

    // Set the start and end of the day for the date range
    const startOfDay = new Date(date.setUTCHours(0, 0, 0, 0));
    const endOfDay = new Date(date.setUTCHours(23, 59, 59, 999));

    // Query the database for records within the specified date range
    const data = await msfuel.find({
      date: { $gte: startOfDay, $lte: endOfDay },
    });
    
    console.log("Data ", data);
    res.status(200).json({
      success: true,
      data,
      message: "Data fetched successfully",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};




module.exports = {
  createMs,
  getMs,
  updateMs,
  getRidingByDate,
  deleteMs,
};
