
const jwt = require("jsonwebtoken");
const zod = require("zod");
const { User } = require("../models/User");
const dotenv = require("dotenv");
const bcrypt = require('bcrypt');

dotenv.config();

const SigninSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
});

const SignIn = async (req, res) => {
    const parseResult = SigninSchema.safeParse(req.body);

    if (!parseResult.success) {
        return res.status(400).json({ msg: "Invalid Credentials!" });
    }

    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ msg: "User not found!" });
        }

        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ msg: "Invalid Credentials!" });
        }
    
        const token = jwt.sign({ userId: user._id }, process.env.jwt_secret);

        return res.json({ token: token }); 
    } catch (error) {
        return res.status(500).json({ msg: "Error While logging in...!" });
    }
}

module.exports = SignIn;
