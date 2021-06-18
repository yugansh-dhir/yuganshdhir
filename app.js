const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");

const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/videoEditing", function (req, res) {
  res.render("videoEditing");
});

app.get("/web", function (req, res) {
  res.render("web");
});

app.get("/growIndia", function (req, res) {
  res.render("growIndia");
});

app.get("/royaltyish", function (req, res) {
  res.render("royaltyish");
});

app.get("/freelancing", function (req, res) {
  res.render("freelancing");
});

app.get("*", function (req, res) {
  res.redirect("/");
});

const port = process.env.PORT || 3000;
app.listen(port, process.env.IP, function () {
  console.log(`Yugansh Dhir portfolio website is live on port ${port}`);
});
