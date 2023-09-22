const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },

    description: { type: String },

    agency: { type: mongoose.Schema.Types.ObjectId, ref: "Agency" },

    status: {
      type: String,
      enum: ["pending", "fullfilled"],
      default: "pending",
    },
    resources: [
      {
        type: { type: String },
        count: { type: Number },
      },
    ],
    recieverAgencies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Agency",
      },
    ],
    relatedAlert: { type: mongoose.Schema.Types.ObjectId, ref: "Alert" },

    relatedResponses: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Response" },
    ],
  },
  { timestamps: true }
);

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;
