const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: [true, "Please Provide First Name"] },
    last_name: { type: String, required: [true, "Please Provide Last Name"] },
    email: {
      type: String,
      required: [true, "Please provide First Name"],
      unique: [true, "Email ALready Exist"],
    },
    password: {
      type: String,
      required: [true, "Please Provide Password"],
      minLength: [8, "Password should have 8 chracters"],
    },
    role: { type: String, default: "user" },
  },
  { timestamps: true },
  { versionKey: false }
);


const userModel = mongoose.model("user", userSchema);


module.exports = userModel;