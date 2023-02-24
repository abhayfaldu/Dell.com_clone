const express = require("express");
const { registerController, loginController, singleUser, getAllUser,userUpdate, deleteUser, resetpassword, sendUserPasswordResetEmail, saveUserForgotPassword } = require("../controllers/userController");

const authorisation = require("../middlewares/authenticate.middleware");

const userRoute = express.Router();

// register

userRoute.post("/register", registerController); //d

// login

userRoute.post("/login", loginController); //d

//single user

userRoute.get("/:id", singleUser); 

//all users admin

userRoute.get("/", getAllUser);


// update user profile

userRoute.patch("/update/:id", userUpdate); //d

// delete user admin

userRoute.delete("/delete/:id", deleteUser);


//update password

userRoute.post("/resetpassword", authorisation, resetpassword); //d

// send email forget password

userRoute.post("/forgotpassword", sendUserPasswordResetEmail); // d


//save forgot password


userRoute.post("/saveforgotpassword/:id/:token", saveUserForgotPassword); //d

module.exports = userRoute;
