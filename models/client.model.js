



const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema(
    {
        party_name: {
            type: String,
            required: true
        },
      isClosed:{
          type:Boolean,
          default:false

      },
        date: {
            type: Date,
            default:new Date()
            
        },
    },
    {
        timestamps: true,
    },
);


const Client = mongoose.model('Client', ClientSchema);
module.exports = { Client }