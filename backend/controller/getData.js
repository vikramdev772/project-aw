const jwt = require('jsonwebtoken');
const { User } = require('../models/User'); // Assuming you have a User model
const dotenv = require('dotenv');

dotenv.config();

const getData = async (req, res) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        try {
            const decoded = jwt.verify(token, process.env.jwt_secret);
            const user = await User.findById(decoded.userId).select('username'); // Fetch the username from the database
            if (user) {
                res.json({ username: user.username }); // Return the username
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            res.status(401).json({ error: 'Invalid token' });
        }
    } else {
        res.status(401).json({ error: 'No token provided' });
    }
};

module.exports = getData;
