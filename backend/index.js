const express = require("express");
const connectDB = require("./config/db")
const dotenv= require("dotenv");
const route = require("./routes/router")
const cors = require("cors")


dotenv.config();

const app = express();
const port = process.env.port || 5000;
app.use(cors());
app.use(express.json())
app.use("/api",route);
app.get("/",(req,res)=>res.json({Msg: "server is running sucessful"}))



app.listen(port, () => {
    console.log(`\n\t server is running on port : ${port}`);
        connectDB()
})