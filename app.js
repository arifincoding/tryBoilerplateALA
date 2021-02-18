require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const sassMiddleware = require("node-sass-middleware");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const router = require("./app/routers");

if (process.env.NODE_ENV == "development") app.use(morgan("dev"));

//style sass/scss middleware (harus paling atas)
app.use(
  sassMiddleware({
    src: path.join(__dirname, "/app/resources/scss"),
    dest: path.join(__dirname, "/public/style"),
    debug: process.env.NODE_ENV == "development" ? true : false,
    outputStyle: "compressed",
    prefix: "/style",
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./public/")));
//view engine
app.set("view engine", "pug");
app.set("views", __dirname + "/app/resources/views/");

// router
app.use("/api", router);
module.exports = app; //for e2e
