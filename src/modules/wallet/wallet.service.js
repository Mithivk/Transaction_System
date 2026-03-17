const Wallet = require("./wallet.model");
const Ledger = require("../ledger/ledger.model");

exports.creditWallet = async (clientId, amount) => {
  let wallet = await Wallet.findOne({ clientId });

  if (!wallet) {
    wallet = await Wallet.create({ clientId, balance: 0 });
  }

  wallet.balance += amount;
  await wallet.save();

  await Ledger.create({
    clientId,
    type: "CREDIT",
    amount,
    balanceAfter: wallet.balance
  });

  return wallet;
};

exports.debitWallet = async (clientId, amount) => {
  const wallet = await Wallet.findOne({ clientId });

  if (!wallet || wallet.balance < amount) {
    throw new Error("Insufficient balance");
  }

  wallet.balance -= amount;
  await wallet.save();

  await Ledger.create({
    clientId,
    type: "DEBIT",
    amount,
    balanceAfter: wallet.balance
  });

  return wallet;
};