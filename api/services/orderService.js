const { orderDao } = require("../models");

const getOrderItems = async (userId, orderNumber) => {
  try {
    return await orderDao.orderItems(userId, orderNumber);
  } catch {
    error = new Error("FAILED_TO_GET_ORDER_DETAILS");
    error.statusCode = 400;
    throw error;
  }
};

const createUserOrderByCart = async (userId, orderNumber, totalPrice, orderStatus) => {
  const userPoint = await orderDao.getUserPointById(userId);

  if (userPoint.points < totalPrice) {
    const error = new Error("NOT_ENOUGH_MONEY");
    error.statusCode = 403;

    throw error;
  }

  return await orderDao.createOrderByCart(userId, orderNumber, totalPrice, orderStatus);
};

module.exports = { createUserOrderByCart, getOrderItems };
