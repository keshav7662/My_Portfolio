const generateToken = require('../utils/generateToken')

const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const adminEmail = process.env.ADMIN_ID;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (email === adminEmail && password === adminPassword) {
            const token = await generateToken(adminEmail);
            res.status(200).json({ message: 'Logged in successfully!', token });
        } else {
            res.status(401).json({ error: 'Invalid credentials!' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { loginAdmin }; 
