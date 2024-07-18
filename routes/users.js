var express = require('express');
var router = express.Router();

const { isLoggedIn } = require('../middleware/auth');

const { profile, register, login, logout, editProfile, creatPost, deletePost } = require('../controllers/userControllers');



/* GET users listing. */

router.get("/profile",isLoggedIn, profile );

router.post("/register", register,);

router.post("/login", login);

router.get("/logout",isLoggedIn, logout)

router.get("/editProfile", isLoggedIn, editProfile)

router.get("/createPost", isLoggedIn, creatPost);

router.get("/deletePost/:id", isLoggedIn, deletePost)

module.exports = router;
