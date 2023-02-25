const express = require("express");
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProduct,
  getSingleProduct,
} = require("../controllers/productController");

const productRoute = express.Router();

// get product

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: Enter product title here
 *         rating:
 *           type: number
 *           description: Enter the product rating
 *         number_of_reviews:
 *           type: number
 *           description: Enter the number of reviews here
 *         category:
 *           type: string
 *           description: Enter product category here
 *         processor:
 *           type: string
 *           description: Enter the processor details
 *         image_url:
 *           type: string
 *           description: Enter the image url here
 *         discounted_price:
 *           type: number
 *           description: Enter the discounted price here
 *         original_price:
 *           type: number
 *           description: Enter the original price here
 *         display:
 *           type: string
 *           description: Enter the display size here
 *         storage:
 *           type: string
 *           description: Enter the product storage here
 *         memory:
 *           type: string
 *           description: Enter the memory size here
 *         graphics_card:
 *           type: string
 *           description: Enter the product graphics_card details here
 *         OS:
 *           type: string
 *           description: Enter the operating system details here
 */
/**
 * @swagger
 * tags:
 *  name: Product
 *  description: All the API routes related to Product
 */
/**
 * @swagger
 * /products/all:
 *  get:
 *      summary: This will get all the products data from the database
 *      tags: [Product]
 *      responses:
 *          200:
 *              description: The list of products the users
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          item:
 *                              $ref: "#/components/schemas/Product"
 *
 */
//all users

productRoute.get("/all", getAllProduct);

/**
 * @swagger
 * /products/create:
 *   post:
 *     summary: To post the new product details
 *     tags: [Product]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: The product was successfully added
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Some server error
 */

// create product

productRoute.post("/create", createProduct);

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

// get single data

productRoute.get("/:id", getSingleProduct);

/**
 * @swagger
 * /products/{id}:
 *  get:
 *      summary: This will get single product data from the database
 *      tags: [Product]
 *      parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 *      responses:
 *          200:
 *              description: The single product data
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          item:
 *                              $ref: "#/components/schemas/Product"
 *
 */

//update product

productRoute.patch("/update/:id", updateProduct);

/**
 * @swagger
 * /products/update/{id}:
 *  patch:
 *    summary: It will update the product details
 *    tags: [Product]
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
 *            $ref: '#/components/schemas/Product'
 *    responses:
 *      200:
 *        description: Product Details Updated successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      404:
 *        description: The product was not found
 *      500:
 *        description: Some server error
 */

// delete product

productRoute.delete("/delete/:id", deleteProduct);

/**
 * @swagger
 * /products/delete/{id}:
 *  delete:
 *    summary: To delete the product
 *    tags: [Product]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 *    responses:
 *      200:
 *        description: Product Deleted successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      404:
 *        description: The product was not found
 *      500:
 *        description: Some server error
 */

module.exports = productRoute;
