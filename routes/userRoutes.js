const express = require("express");
const { registerController, loginController, singleUser, getAllUser,userUpdate, deleteUser, resetpassword, sendUserPasswordResetEmail, saveUserForgotPassword } = require("../controllers/userController");

const authorisation = require("../middlewares/authenticate.middleware");

const userRoute = express.Router();

// register

userRoute.post("/register", registerController);

// login

userRoute.post("/login", loginController);

//single user

userRoute.get("/:id", singleUser);

//all users

userRoute.get("/", getAllUser);


// update user profile

userRoute.patch("/update/:id", userUpdate);

// delete user

userRoute.delete("/delete/:id", deleteUser);


//update password

userRoute.post("/resetpassword", authorisation, resetpassword);

// send email forget password

userRoute.post("/forgotpassword", sendUserPasswordResetEmail);


//save forgot password


userRoute.post("/saveforgotpassword/:id/:token", saveUserForgotPassword);

module.exports = userRoute;
