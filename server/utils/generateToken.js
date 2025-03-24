const jwt = require("jsonwebtoken")

const jwtsecret = process.env.JWT_SECRET;

const generateToken = async (adminEmail) => {
    return jwt.sign({ email: adminEmail }, jwtsecret, { expiresIn: '1h' })
}

module.exports = generateToken;