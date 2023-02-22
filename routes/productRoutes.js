const express = require("express");
const {
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const productRoute = express.Router();

// create product

productRoute.post("/create", createProduct);

// get product

// get single data

productRoute.get("/:id", updateProduct);


//update product

productRoute.patch("/update/:id", updateProduct);

// delete product

productRoute.delete("/delete/:id", deleteProduct);
