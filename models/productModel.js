const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter Title"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  noOfReview: { type: Number },
  category: {
    type: String,
    required: [true, "Please Enter Category"],
  },
  processor: {
    type: String,
    required: [true, "Please Enter Processor"],
  },
  image_url: { type: [String] },
  discounted_price: {
    type: Number,
    required: [true, "Please Enter DiscountPrice"],
  },
  original_price: {
    type: Number,
    required: [true, "Please Enter OriginialPrice"],
  },
  display: {
    type: String,
    required: [true, "Please Enter display size"],
  },
  storage: {
    type: String,
    required: [true, "Please Enter Storage"],
  },
  memory: {
    type: String,
    required: [true, "Please Enter Memory"],
  },
  graphics_card: {
    type: String,
    required: [true, "Please Enter GraphicsCard"],
  },
  os: {
    type: String,
    required: [true, "Please Enter Operating System"],
  },
},{timestamps:true},{versionKey:false});

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
