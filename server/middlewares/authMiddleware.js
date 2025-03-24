const jwt = require('jsonwebtoken')
const adminEmail = process.env.ADMIN_ID;
const jwtsecret = process.env.JWT_SECRET;

const authenticateAdmin = async (req, res, next) => {  
    const authHeader = req.header('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Access denied! token missing.' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, jwtsecret);
        if (!decoded) {
            return res.status(401).json({ message: 'Invalid token or user!' });
        }

        req.user = decoded;
        next();
    } catch (error) {
        return res.status(500).json({ message: 'Token verification failed!' });
    }
};

const authorizeAdmin = async (req, res, next) => {
    if (req.user.email !== adminEmail) {
        return res.status(403).json({ message: 'Access denied! Admin only.' });
    }
    next();
}

module.exports = { authenticateAdmin,authorizeAdmin };