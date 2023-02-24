const express = require("express");
const {
  registerController,
  loginController,
  singleUser,
  getAllUser,
  userUpdate,
  deleteUser,
  resetpassword,
  sendUserPasswordResetEmail,
  saveUserForgotPassword,
} = require("../controllers/userController");

const authorisation = require("../middlewares/authenticate.middleware");

const userRoute = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the user
 *         first_name:
 *           type: string
 *           description: the user first name
 *         last_name:
 *           type: string
 *           description: the user last name
 *         email:
 *           type: string
 *           description: the user email
 *         password:
 *           type: string
 *           description: the user password
 */

/**
 * @swagger
 * tags:
 *  name: User
 *  description: All the API routes related to User
 */

/**
 * @swagger
 * /users:
 *  get:
 *      summary: This will get all the user data from the database
 *      tags: [User]
 *      responses:
 *          200:
 *              description: The list of all the users
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          item:
 *                              $ref: "#/components/schemas/User"
 *
 */

//all users

userRoute.get("/", getAllUser);

// register

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: To post the details of a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The user was successfully registered
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 */

userRoute.post("/register", registerController);

// login

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: To post the details of a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The user was successfully registered
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 */

userRoute.post("/login", loginController);

//single user

/**
 * @swagger
 * /users/{id}:
 *  get:
 *      summary: This will get single user data from the database
 *      tags: [User]
 *      parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 *      responses:
 *          200:
 *              description: The single user data
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          item:
 *                              $ref: "#/components/schemas/User"
 *
 */

//all users

userRoute.get("/:id", singleUser);

// update user profile

/**
 * @swagger
 * /users/update/{id}:
 *  patch:
 *    summary: It will update the user details
 *    tags: [User]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: User Details Updated successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: The user was not found
 *      500:
 *        description: Some server error
 */

userRoute.patch("/update/:id", userUpdate);

// delete user

/**
 * @swagger
 * /users/delete/{id}:
 *  delete:
 *    summary: To delete the user
 *    tags: [User]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 *    responses:
 *      200:
 *        description: User Deleted successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: The user was not found
 *      500:
 *        description: Some server error
 */

userRoute.delete("/delete/:id", deleteUser);

//update password

userRoute.post("/resetpassword", authorisation, resetpassword);

// send email forget password

userRoute.post("/forgotpassword", sendUserPasswordResetEmail);

//save forgot password

userRoute.post("/saveforgotpassword/:id/:token", saveUserForgotPassword);

module.exports = userRoute;
