const express = require("express");
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProduct,
} = require("../controllers/productController");

const productRoute = express.Router();

// create product

productRoute.post("/create", createProduct);

// get product

// localhost:4000/api/products?price[gte]=200&price[lte]=300

productRoute.get("/all", getAllProduct);

// get single data

productRoute.get("/:id", updateProduct);


//update product

productRoute.patch("/update/:id", updateProduct);

// delete product

productRoute.delete("/delete/:id", deleteProduct);

module.exports = productRoute;
