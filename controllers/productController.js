const ApiFeatures = require("../helper/ApiFeatures");
const productModel = require("../models/productModel");

// create product

exports.createProduct = async (req, res) => {
  try {
    const product = await productModel.create(req.body);
    res
      .status(200)
      .send({ success: true, message: "Product Added Successfully", product });
  } catch (error) {
    res.status(500).send({ success: false, message: "Something Went Wrong" });
  }
};

// get all product




exports.getAllProduct = async (req, res) => {
  const resultPerPage = 5;
  try {
    const totalCount = await productModel.countDocuments();
    const apiFeature = new ApiFeatures(productModel.find(), req.query)
      .search()
      .filter()
      .pagination(resultPerPage);

    const products = await apiFeature.query;
    res
      .status(200)
      .send({ success: true, message: "Success", products, totalCount });
  } catch (error) {
    res.status(500).send({ success: false, message: "Something Went Wrong" });
  }
};

// get single product

exports.getSingleProduct = async (req, res) => {
  try {
    const product = await productModel.findById({ _id: req.params.id });
    if (!product) {
      return res
        .status(500)
        .send({ success: false, message: "Product Not Found" });
    }
    res.status(200).send({ success: true, message: "Success", product });
  } catch (error) {
    res.status(500).send({ success: false, message: "Something Went Wrong" });
  }
};

// update product

exports.updateProduct = async (req, res) => {
  try {
    const product = await productModel.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    if (!product) {
      return res
        .status(500)
        .send({ success: false, message: "Product Not Found" });
    }
    res
      .status(200)
      .send({ success: true, message: "Product Updated Successfully" });
  } catch (error) {
    res.status(500).send({ success: false, message: "Something Went Wrong" });
  }
};

// delete product

exports.deleteProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete({ _id: req.params.id });
    res
      .status(200)
      .send({ success: true, message: "Product Deleted Successfully" });
  } catch (error) {
    res.status(500).send({ success: false, message: "Something Went Wrong" });
  }
};
