// modules/wallet/wallet.routes.js
const router = require("express").Router();
const controller = require("./wallet.controller.js");

router.post("/credit", controller.credit);
router.post("/debit", controller.debit);
router.get("/balance", controller.getBalance);
module.exports = router;