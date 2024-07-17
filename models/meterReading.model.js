const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const meterReadingSchema = new Schema(
  
  {
  sideNo: {
    type: Number,
    required: true
  },
  nozzleNo: {
    type: Number,
    required: true
  },
  nozzleProduct: {
    type: String,
    required: true
  },
  tank: {
    type: Number,
    required: true
  },
  opMeterReading: {
    type: Number,
    default: null
  }
});

const MeterReading = mongoose.model('meter', meterReadingSchema);
module.exports = {MeterReading}


// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const meterReadingSchema = new Schema(
  
//   {
//   sideNo: {
//     type: Number,
//     required: true
//   },
//   nozzleNo: {
//     type: Number,
//     required: true
//   },
//   nozzleProduct: {
//     type: String,
//     required: true
//   },
//   tank: {
//     type: Number,
//     required: true
//   },
//   opMeterReading: {
//     type: Number,
//     default: null
//   }
// });

// const MeterReading = mongoose.model('meter', meterReadingSchema);
// module.exports = {MeterReading}
