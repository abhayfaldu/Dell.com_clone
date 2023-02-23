const CartModel = require("../models/cartModel");

// create product

exports.createCart = async (req, res) => {
  try {
    const cart = await CartModel.create(req.body);
    res
      .status(200)
      .send({ success: true, message: "Product Added Successfully", cart });
  } catch (error) {
    res.status(500).send({ success: false, message: "Something Went Wrong" });
  }
};

// get all product

exports.getAllCartData = async (req, res) => {
  try {
    const cart = await CartModel.find();
    const totalCount = await CartModel.countDocuments();
    res
      .status(200)
      .send({ success: true, message: "Success", cart, totalCount });
  } catch (error) {
    res.status(500).send({ success: false, message: "Something Went Wrong" });
  }
};

// get single product

// update product

// delete product

exports.deleteCart = async (req, res) => {
  try {
    await CartModel.findByIdAndDelete({ _id: req.params.id });
    res
      .status(200)
      .send({ success: true, message: "Product Deleted Successfully" });
  } catch (error) {
    res.status(500).send({ success: false, message: "Something Went Wrong" });
  }
};
