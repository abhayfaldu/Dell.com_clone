const { comparePassword, hashedPassword } = require("../helper/authPassword");
const userModel = require("../models/User.model");
const JWT = require("jsonwebtoken");
const transporter = require("../configs/emailConfig");


//register --


exports.registerController = async (req, res) => {
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

// user login

exports.loginController = async (req, res) => {
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
    const match = await comparePassword(password, user.password);
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

//  get single user admin
exports.singleUser = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.params.id });
    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "User Not Found" });
    }
    return res.status(200).send({ success: true, user });
  } catch (error) {
    return res
      .status(500)
      .send({ success: false, message: "Something went wrong" });
  }
};

//get all user admin

exports.getAllUser = async (req, res) => {
  try {
    const users = await userModel.find().select("-password");
    if (!users) {
      return res
        .status(404)
        .send({ success: false, message: "User Not Found" });
    }
    return res.status(200).send({ success: true, users, total: users.length });
  } catch (error) {
    return res
      .status(500)
      .send({
        success: false,
        message: "Something went wrong",
        error: error.message,
      });
  }
};

//user update profile

exports.userUpdate = async (req, res) => {
  delete req.body.password;
  const ID = req.params.id;
  try {
    const user = await userModel.findByIdAndUpdate({ _id: ID }, req.body);
    res
      .status(200)
      .send({ success: true, message: "User Updated Sucessfully" });
  } catch (error) {
    res.status(404).send({ success: false, message: "User Not Found" });
  }
};

// delete user

exports.deleteUser = async (req, res) => {
  const ID = req.params.id;
  try {
    await userModel.findByIdAndDelete({ _id: ID });
    res
      .status(200)
      .send({ success: true, message: "User Deleted Sucessfully" });
  } catch (error) {
    res.status(404).send({ success: false, message: "User Not Found" });
  }
};

// reset password password

exports.resetpassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  try {
    if (!oldPassword || !newPassword) {
      return res
        .status(201)
        .send({ success: false, message: "Please Fill Credentials" });
    }
    //checking user existence
    const user = await userModel.findOne({ _id: req.body.user });
    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "User Not Found" });
    }

    // check user old password
    const match = await comparePassword(oldPassword, user.password);
    if (!match) {
      return res
        .status(401)
        .send({ success: false, message: "Incorrect Password" });
    }

    // hash user new password

    const hashPassword = await hashedPassword(newPassword);

    // update password
    await userModel.findByIdAndUpdate(
      { _id: req.body.user },
      { password: hashPassword }
    );

    return res
      .status(200)
      .send({ success: true, message: "Password updated successfully" });
  } catch (error) {
    return res.status(404).send({ success: false, message: "User Not Found" });
  }
};

// send email forget password

exports.sendUserPasswordResetEmail = async (req, res) => {
  const email = req.body.email;

  try {
    if (!email) {
      return res
        .status(201)
        .send({ success: false, message: "Please Enter Email" });
    }
    const user = await userModel.findOne({ email: email });

    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "User Not Found" });
    }

    // secret key to verify user

    const secret = user._id + process.env.SECRET_KEY;
    const token = JWT.sign({ userID: user._id }, secret, {
      expiresIn: "15m",
    });

    //link for user
    const link = `http://localhost:3000/users/saveforgotpassword/${user._id}/${token}`;
    let info = await transporter.sendMail({
      from: "bipinecommerce@gmail.com",
      to: user.email,
      subject: "LAPDEN - Password Reset Link",
      html: `<a href=${link}>Click Here</a> to Reset Your Password`,
    });
    res
      .status(200)
      .send({ success: true, message: "Email Sent to Your mail", info });
  } catch (error) {
    return res.status(401).send({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// after send email save the user new password if valid

exports.saveUserForgotPassword = async (req, res) => {
  const { password, confirmPassword } = req.body;
  const { id, token } = req.params;
  try {
    if (!password || !confirmPassword) {
      return res.status(401).send({
        success: false,
        message: "Please fill both  password fields",
      });
    }
    const user = await userModel.findById({ _id: id });
    const newSecret = user._id + process.env.SECRET_KEY;
    await JWT.verify(token, newSecret);
    if (password !== confirmPassword) {
      return res.status(401).send({
        success: false,
        message: "Password and Confirm Password not matching",
      });
    }

    const hash = await hashedPassword(password);

    await userModel.findByIdAndUpdate(
      { _id: user._id },
      { $set: { password: hash } }
    );

    res
      .status(200)
      .send({ success: true, message: "Password Reset Successfully" });
  } catch (error) {
    res.status(400).send({ success: false, message: "Something Went Wrong" });
  }
};
