const axios = require("axios");
const Order = require("./order.model");
const { debitWallet } = require("../wallet/wallet.service");

exports.createOrder = async (clientId, amount) => {
  // 1. Deduct wallet
  await debitWallet(clientId, amount);

  // 2. Create order
  let order = await Order.create({
    clientId,
    amount,
    status: "PENDING"
  });

  try {
    // 3. Call fulfillment API
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        userId: clientId,
        title: order._id.toString()
      }
    );

    // 4. Update order
    order.fulfillmentId = res.data.id;
    order.status = "SUCCESS";
    await order.save();

  } catch (err) {
    // 5. If API fails → mark FAILED
    order.status = "FAILED";
    await order.save();
  }

  return order;
};