const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    rating: {
      type: Number,
      default: 0,
    },
    number_Of_reviews: { type: Number },
    category: {
      type: String,
    },
    processor: {
      type: String,
    },
    image_url: { type: [String] },
    discounted_price: {
      type: Number,
    },
    original_price: {
      type: Number,
    },
    display: {
      type: String,
    },
    storage: {
      type: String,
    },
    memory: {
      type: String,
    },
    graphics_card: {
      type: String,
    },
    OS: {
      type: String,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  { timestamps: true },
  { versionKey: false }
);

const CartModel = mongoose.model("cart", cartSchema);

module.exports = CartModel;
