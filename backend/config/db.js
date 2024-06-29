
const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.uri);
        console.log("\n\t MongoDB is connected successfully!");
    } catch (err) {
        console.log("Connection failed!");
        console.error(err);
    }
};

module.exports = connectDB;


