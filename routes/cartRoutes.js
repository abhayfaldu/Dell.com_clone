const express = require("express");
const {
  createCart,
  getAllCartData,
  getSingleUserCart,
  removeSingleCartItem,
  removeAllCartItem,
} = require("../controllers/cartController");
const authorisation = require("../middlewares/authenticate.middleware");

const cartRoute = express.Router();

// create cart

cartRoute.post("/create",authorisation, createCart);

// get all user cart only Admin

cartRoute.get("/allcart", getAllCartData);

// get single user cart

cartRoute.get("/singlecart",authorisation, getSingleUserCart);


// delete single cart item

cartRoute.delete("/deletecart/:id", authorisation, removeSingleCartItem);


// delete all user cart data


cartRoute.delete("/clearcart", authorisation, removeAllCartItem);



module.exports = cartRoute;
