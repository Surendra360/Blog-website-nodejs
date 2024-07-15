var express = require("express");
var router = express.Router();
const userModel = require("../models/userSchema");
const passport = require("passport");
const LocalStrategy = require("passport-local");

passport.use(new LocalStrategy(userModel.authenticate()));

/* GET home page. */
router.get("/", async function (req, res, next) {
  res.render("index");
});

router.get("/register", (req, res, next) => {
  res.render("register");
});

router.get("/login", (req, res, next) => {
  res.render("login");
});


module.exports = router;
