var express = require("express");
const studentRoute = require("./route/studentRoute");
const mongoose = require("mongoose");
var app = express();

//set view engine
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(`${__dirname}/public/`));

//Though we are using initially /student router thats why we used this way.
app.use("/student", express.static(`${__dirname}/public/`));

//Database Connection with Mongose
mongoose
  .connect("mongodb://127.0.0.1:27017/StudentMVC")
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

app.use("/student", studentRoute);

app.listen(3000, function () {
  console.log("server is running..");
});
