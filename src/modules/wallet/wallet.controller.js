const { creditWallet, debitWallet } = require("./wallet.service");
const Wallet = require("./wallet.model");
exports.credit = async (req, res, next) => {
  try {
    const { client_id, amount } = req.body || {};

    if (!client_id || !amount) {
      throw new Error("client_id and amount required");
    }

    const wallet = await creditWallet(client_id, amount);

    res.json({
      success: true,
      data: wallet
    });

  } catch (err) {
    next(err);
  }
};

exports.debit = async (req, res, next) => {
  try {
    const { client_id, amount } = req.body || {};

    if (!client_id || !amount) {
      throw new Error("client_id and amount required");
    }

    const wallet = await debitWallet(client_id, amount);

    res.json({
      success: true,
      data: wallet
    });

  } catch (err) {
    next(err);
  }
};

exports.getBalance = async (req, res, next) => {
  try {
    const clientId = req.headers["client-id"];

    const wallet = await Wallet.findOne({ clientId });
    res.json({
      success: true,
      balance: wallet ? wallet.balance : 0
    });

  } catch (err) {
    next(err);
  }
};