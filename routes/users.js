var express = require('express');
var router = express.Router();

const userModel = require("../models/userSchema")

const passport = require("passport");
const LocalStrategy = require("passport-local");
const { isLoggedIn } = require('../middleware/auth');

passport.use(new LocalStrategy(userModel.authenticate()));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/profile",isLoggedIn, (req, res, next) => {
  res.render("profile", { user: req.user });
});

router.post("/register", async (req, res, next) => {
  try {
    const { name, username, email, password } = req.body;
    const unChangableData = { name, username, email };
    const encriptedData = password;

    await userModel.register(unChangableData, encriptedData);
    res.redirect("/login");
  } catch (error) {
    res.send(error.message);
  }
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/users/profile",
    failureRedirect: "/login",
  }),
  (req, res, next) => {}
);

router.get("/logout",isLoggedIn, (req,res,next)=>{
  req.logout(()=>{
    res.redirect("/login")
  })
})


router.get("/deletePost/:id", isLoggedIn, (req,res,next)=>{
  userModel.findByIdAndDelete(req.params.id,(err)=>{
    if(err){
      res.send(err)
    }else{
        res.redirect("/users/profile")
    }
  })

})

module.exports = router;
