const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    "title":{type:String,required:true},
    "original_price":{type:Number,required:true},
    "discounted_price": { type: Number, required: true },
    "image_url": { type: String, required: true },
    "user":{type:String,required:true},
  },
  { timestamps: true },
  { versionKey: false }
);

const CartModel = mongoose.model("cart", cartSchema);

module.exports = CartModel;
