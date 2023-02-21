const express = require("express");
const { registerController, loginController } = require("../controllers/userController");

const userRoute = express.Router();


// register

userRoute.post("/register", registerController);

// login

userRoute.post("/login", loginController);




module.exports = userRoute;

