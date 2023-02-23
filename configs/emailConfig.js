
require("dotenv").config();
const nodemailer = require("nodemailer");


let transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "bipinecommerce@gmail.com",
        pass:"pncyrqdoyqflnmdq",
    },
});

module.exports = transporter;
