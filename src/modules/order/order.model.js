// modules/order/order.model.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  clientId: String,
  amount: Number,
  status: {
    type: String,
    enum: ["PENDING", "SUCCESS", "FAILED"],
    default: "PENDING"
  },
  fulfillmentId: String
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);