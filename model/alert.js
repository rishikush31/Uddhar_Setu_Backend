const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({

  title: { type: String, required: true },

  description: { type: String },

  location: {
    type: {type: String,default: 'Point',},
    coordinates: [Number], 
  },

  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Agency' },

  state: { 
    type: String, enum: ['completed','ongoing'], required: true ,default: 'ongoing'
  },

  chatbox:[{
    user:{ type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    chat:[{
      message:{type:String},
      time:{type:Date},
    }],
  }],

  collaborators:[{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],

  relatedRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Request'}],  

}, { timestamps: true });

alertSchema.index({ location: '2dsphere' });

const Alert = mongoose.model('Alert', alertSchema);

module.exports = Alert;