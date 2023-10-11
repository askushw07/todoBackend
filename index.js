const express = require("express");
const mongoose = require("mongoose");
const connection = require("./config/db.js")
const userRouter = require("./routes/user.route.js")
const todosRouter = require("./routes/todos.route.js");
require('dotenv').config()
const cors = require("cors");

const port = process.env.PORT||3000;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", userRouter);
app.use("/todos", todosRouter);


app.listen(port, async() => {
    console.log("Server is live");
    
    // console.log(`https://localhost`)
})