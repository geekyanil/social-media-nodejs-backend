const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "config/config.env" });
}

// using middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// using routes
const post = require("./routes/post-routes");
const user = require("./routes/user-routes");

// using routes
app.use("/api/v1", post);
app.use("/api/v1", user);

module.exports = app;
