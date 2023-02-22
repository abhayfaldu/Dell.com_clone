const express = require("express");
const { registerController, loginController, singleUser, getAllUser,userUpdate, deleteUser, resetpassword, sendUserPasswordResetEmail } = require("../controllers/userController");
const authorisation = require("../middlewares/authenticate.middleware");

const userRoute = express.Router();


// register

userRoute.post("/register", registerController);

// login

userRoute.post("/login", loginController);

//single user

userRoute.get("/:id", singleUser);


//all users

userRoute.get("/getall", getAllUser);


// update user profile

userRoute.patch("/update",authorisation, userUpdate);


// delete user

userRoute.delete("/delete", deleteUser); 


//update password

userRoute.post("/resetpassword",authorisation, resetpassword);


// send email forget password

userRoute.post("/forgot", sendUserPasswordResetEmail);




module.exports = userRoute;

