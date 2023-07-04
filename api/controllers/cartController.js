const { cartService } = require("../services");

const createCartItem = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId, productOptionId, quantity } = req.body;

    if (!userId || !productId || !productOptionId || !quantity) {
      const error = new Error("KEY_ERROR");
      error.statusCode = 400;
      throw error;
    }

    await cartService.createCartItem(userId, productId, productOptionId, quantity);
    res.status(200).json({ message: "Product Added to Cart" });
  } catch (error) {
    return res.status(error.statusCode).json({ message: error.message });
  }
};

const getCartList = async (req, res) => {
  try {
    const userId = req.user.id;

    const getCartList = await cartService.getCartList(userId);

    return res.status(200).json({ data: getCartList });
  } catch (error) {
    console.log(error.message);
    return res.status(401).json({ message: "INVALID_TOKEN" });
  }
};

const updateCartItem = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId, productOptionId, quantity } = req.body;

    if (!userId || !productId || !productOptionId || !quantity) {
      const error = new Error('KEY_ERROR')
      error.statusCode = 400;
      throw error;
    }
    
    await cartService.updateCartItem(userId, productId, productOptionId, quantity);
    res.status(200).json({message: "Product Quantity Updated"});
  } catch (error) {
    return res.status(error.statusCode).json({ message: error.message });
  }
};

module.exports = { 
  createCartItem, 
  getCartList,
  updateCartItem
};
