const { comparePassword, hashedPassword } = require("../helper/authPassword");
const userModel = require("../models/User.model");
const JWT = require("jsonwebtoken");

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
    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "User Not Found" });
    }
    return res.status(200).send({ success: true, users,total:users.length });
  } catch (error) {
    return res
      .status(500)
      .send({ success: false, message: "Something went wrong" });
  }
};


//user update profile


exports.userUpdate = async (req, res) => {
  req.body = delete req.body.password;
  try {
    const user = await userModel.findByIdAndUpdate({ _id: req.body.user },req.body);
      res.status(200).send({ success: true, message: "User Updated Sucessfully" , user});

  } catch (error) {
    res.status(404).send({ success: false, message: "User Not Found" });
  }
}


// delete user


exports.deleteUser = async (req, res) => {
  try {
    await userModel.findByIdAndDelete({ _id: req.body.user });
    res.status(200).send({ success: true, message: "User Deleted Sucessfully" });
  } catch (error) {
    res.status(404).send({ success: false, message: "User Not Found" });
  }
}


// reset password password


exports.resetpassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  
  try {
    //checking user existence
    const user = await userModel.findOne({ _id: req.body.user });
    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "User Not Found" });
    }

    // check user old password
    const match = comparePassword(oldPassword, user.password);
    if (!match) {
      return res
        .status(401)
        .send({ success: false, message: "Incorrect Password" });
    }

    // hash user new password

    const hashPassword = await hashedPassword(newPassword);

    // update password
    await userModel.findByIdAndUpdate({ _id: req.body.user }, { password: hashPassword });

    return res.status(200).send({ success: true, message: "Password updated successfully" });


  } catch (error) {
    return res.status(404).send({ success: false, message: "User Not Found" });
  }
};


