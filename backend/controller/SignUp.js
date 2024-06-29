const jwt = require("jsonwebtoken");
const zod = require("zod");
const { User } = require("../models/User");
const bcrypt = require('bcrypt');
const dotenv = require("dotenv");

dotenv.config();

const SignUpSchema = zod.object({
    username: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(8),
});

const SignUp = async (req, res) => {
    const parseResult = SignUpSchema.safeParse(req.body);

    if (!parseResult.success) {
        return res.status(400).json({ msg: "Invalid Inputs!" });
    }

    try {
        // Check if user with the same email exists
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(409).json({ msg: "User already exists!" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Create new user object
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        // Save the new user to the database
        await newUser.save();

        // Generate JWT token
        const token = jwt.sign({ userId: newUser._id }, process.env.jwt_secret);

        // Return success response
        return res.status(201).json({ token: token, msg: "User created Successfully!" });
    } catch (error) {
        console.error("Error while creating user:", error);
        return res.status(500).json({ msg: "Error While creating user!" });
    }
};

module.exports = SignUp;
