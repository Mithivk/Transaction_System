// app.js
const express = require("express");
const app = express();

app.use(express.json());

app.use("/admin/wallet", require("./modules/wallet/wallet.routes"));
app.use("/orders", require("./modules/order/order.routes"));
app.use((err, req, res, next) => {
  res.status(400).json({
    success: false,
    message: err.message
  });
});
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;