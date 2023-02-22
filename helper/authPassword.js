const bcrypt = require("bcrypt");


const hashedPassword = async (password) => {
    try {
        const hash = await bcrypt.hash(password, 6);
        return hash;
    } catch (error) {
        console.log(error);
    }
};

const comparePassword = async (password, hashPassword) => {
    return  bcrypt.compare(password, hashPassword);
};


module.exports = { hashedPassword, comparePassword };