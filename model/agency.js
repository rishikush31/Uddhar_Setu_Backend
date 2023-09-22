const mongoose = require("mongoose");

const agencySchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  about: { type: String, required: true },
  contact: {
    name: { type: String },
    phone: { type: String },
    email: { type: String },
    address: { type: String },
  },
  location: {
    type: {type: String,default: 'Point',},
    coordinates: [Number], 
  },
  resources: [
    {
      type: { type: String },
      count: { type: Number },
    },
  ],
  expertise: [String],
  listedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

agencySchema.index({ location: '2dsphere' });

const Agency = mongoose.model("Agency", agencySchema);

module.exports = Agency;
