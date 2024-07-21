var express = require('express');
var router = express.Router();

const { isLoggedIn } = require('../middleware/auth');

const { profile, register, login, logout, editProfile, creatBlog, deletePost, update, newBlog,updateImg,deleteUser } = require('../controllers/userControllers');



/* GET users listing. */

router.get("/profile",isLoggedIn, profile );

router.post("/register", register,);

router.post("/login", login);

router.get("/logout",isLoggedIn, logout)

router.get("/editProfile/:id", isLoggedIn, editProfile)

router.post("/update/:id",isLoggedIn, update)

router.post("/updateImg/:id", isLoggedIn, updateImg)

router.get("/deleteUser/:id", isLoggedIn, deleteUser)

router.get("/deletePost/:id", isLoggedIn, deletePost)

router.get("/creatBlog", isLoggedIn, creatBlog);

router.post("/createBlog", isLoggedIn, newBlog);

module.exports = router;
