const express = require("express");
const {
  createCart,
  deleteCart,
  getAllCartData,
} = require("../controllers/cartController");

const cartRoute = express.Router();

// create product

cartRoute.post("/create", createCart);

// get product

// get single data

cartRoute.get("/", getAllCartData);
//update product

// delete product

cartRoute.delete("/delete/:id", deleteCart);
module.exports = cartRoute;
