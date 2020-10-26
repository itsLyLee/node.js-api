const { Router } = require("express");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//Connect to DB
mongoose.connect(
  "mongodb+srv://LyLee:Draconis9301@cluster0.qkpvq.mongodb.net/<dbname>?retryWrites=true&w=majority",
  () => console.log("connected to db!")
);

//Import Routes
const authRoute = require("./routes/auth");

//Route Middlewares
app.use("/api/user", authRoute);

app.listen(3000, () => console.log("Server Up and running"));
