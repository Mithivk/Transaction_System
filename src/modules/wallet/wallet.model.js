// modules/wallet/wallet.model.js
const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema({
  clientId: { type: String, unique: true },
  balance: { type: Number, default: 0 }
});

module.exports = mongoose.model("Wallet", walletSchema);