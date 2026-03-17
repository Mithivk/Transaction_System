const Order = require("./order.model");
const { createOrder } = require("./order.service");

exports.create = async (req, res, next) => {
  try {
    const clientId = req.headers["client-id"];
    const { amount } = req.body || {};

    if (!clientId || !amount) {
      throw new Error("client-id header and amount required");
    }

    const order = await createOrder(clientId, amount);

    res.json({
      success: true,
      data: order
    });

  } catch (err) {
    next(err);
  }
};

exports.getOrder = async (req, res, next) => {
  try {
    const clientId = req.headers["client-id"];

    const order = await Order.findById(req.params.id);

    if (!order || order.clientId !== clientId) {
      throw new Error("Unauthorized or order not found");
    }

    res.json({
      success: true,
      data: order
    });

  } catch (err) {
    next(err);
  }
};