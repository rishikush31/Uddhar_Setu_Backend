const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({

  requestId: { type: mongoose.Schema.Types.ObjectId, ref: 'Request', required: true },

  responderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Agency', required: true },

  message: { type: String, required: true },

  resourcesOffered: [{
    type: { type: String },
    count: { type: Number },
  },],

  estimatedArrivalTime: { type: Date },

  status: {
    type: String,
    enum: ['Pending', 'Accepted', 'Completed'],
    default: 'Pending',
  },
  
}, { timestamps: true });

const Response = mongoose.model('Response', responseSchema);

module.exports = Response;