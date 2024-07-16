var express = require("express");
var router = express.Router();
const userModel = require("../models/userSchema");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { isLoggedIn } = require("../middleware/auth");

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

router.get("/edit", isLoggedIn, (req,res,next)=>{
  res.render("edit",{user: req.body})
})

router.get("/createPost", isLoggedIn, (req,res,next)=>{
  res.render("createPost")
})

module.exports = router;
