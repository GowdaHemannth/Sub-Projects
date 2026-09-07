const express = require("express");
const dotenv = require("dotenv");
const connectToDB=require("./config/db.js");
dotenv.config();

const app = express();

connectToDB();

app.get("/", (req, res) => {
    res.send("Server is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});