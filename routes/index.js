var express = require("express");
var router = express.Router();
const userModel = require("../models/userSchema");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { isLoggedIn } = require("../middleware/auth");
const { index, register, login, blogReadMore, deleteBlog, updateBlogs } = require("../controllers/indexControllers");

passport.use(new LocalStrategy(userModel.authenticate()));

/* GET home page. */
router.get("/", index);

router.get("/register", register);

router.get("/login", login);

router.get("/blogReadMore/:id", blogReadMore)

router.get("/deleteBlog/:id", isLoggedIn, deleteBlog)

router.get("/updateBlogs/:id", isLoggedIn, updateBlogs)



module.exports = router;
