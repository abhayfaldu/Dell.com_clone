const jwt = require("jsonwebtoken");
require("dotenv").config();

const authorisation = async (req, res, next) => {
	let token = req.headers.authorization;
	//   console.log(token);
	if (token) {
		await jwt.verify(token, process.env.SECRET_KEY, function (err, decode) {
			if (err)
				res
					.status(401)
					.send({ success: false, message: "Authorization failed" });
			else {
				// console.log(decode._id);
				req.body.user = decode._id;
				next();
			}
		});
	} else {
		res.status(498).send({ success: false, message: "Invalid token" });
	}
};

module.exports = authorisation;
