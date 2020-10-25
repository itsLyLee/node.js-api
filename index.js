const { Router } = require("express");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
//Import Routes
const authRoute = require("./routes/auth");

//Route Middlewares
app.use("/api/user", authRoute);

app.listen(3000, () => console.log("Server Up and running"));
