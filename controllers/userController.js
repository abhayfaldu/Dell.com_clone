const { comparePassword, hashedPassword } = require("../helper/authPassword");
const userModel = require("../models/User.model");
const JWT = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    //validations
    if (!first_name) {
      return res.send({ error: "First Name is Required" });
    }
    if (!last_name) {
      return res.send({ error: "Last Name is Required" });
    }
    if (!email) {
      return res.send({ error: "Email is Required" });
    }
    if (!password) {
      return res.send({ error: "Password is Required" });
    }

    //existing user
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res
        .status(200)
        .send({ success: false, message: "Already Registered Please Login " });
    }
    const hashPassword = await hashedPassword(password);

    const user = new userModel({
      first_name,
      last_name,
      password: hashPassword,
      email,
    });
    await user.save();

    res
      .status(201)
      .send({ success: true, message: "User Registered Successfully", user });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error in Registration", error });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res
        .status(404)
        .send({ success: false, message: "Invalid Email or Password" });
    }

    //check user

    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "Email is not registered" });
    }

    // check  password
    const match =await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    // token
    const token = await JWT.sign({ _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });

    res.status(200).send({
      success: true,
      message: "login successful",
      user: {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    return res
      .status(404)
      .send({ success: false, message: "Email is not registered" });
  }
};

module.exports = { registerController, loginController };
