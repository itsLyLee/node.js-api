const { Router } = require("express");
const express = require("express");
const app = express();

//Import Routes
const authRoute = require("./routes/auth");

app.listen(3000, () => console.log("Server Up and running"));
