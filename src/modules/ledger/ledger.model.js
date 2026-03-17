// modules/ledger/ledger.model.js
const mongoose = require("mongoose");

const ledgerSchema = new mongoose.Schema({
  clientId: String,
  type: { type: String, enum: ["CREDIT", "DEBIT"] },
  amount: Number,
  balanceAfter: Number
}, { timestamps: true });

module.exports = mongoose.model("Ledger", ledgerSchema);