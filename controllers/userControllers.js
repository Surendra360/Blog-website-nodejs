const userModel = require("../models/userSchema")

const passport = require("passport");
const imagekit = require("../utils/imagekit");
const LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy(userModel.authenticate()));

exports.profile = (req, res, next) => {
    res.render("profile", { user: req.user });
  }
 
exports.register = async (req, res, next) => {
    try {
     
        const { fileId, url, thumbnailUrl } = await imagekit.upload({
          file : req.files.profileImage.data,
          fileName : req.files.profileImage.name
        });
        const profileImage =url;
      const { name, username, email, password } = req.body;
      const unChangableData = { profileImage, name, username, email };
      const encriptedData = password;
  
      await userModel.register(unChangableData, encriptedData);
      res.redirect("/login");
    } catch (error) {
      res.send(error.message);
    }
}

exports.login = passport.authenticate("local", {
    successRedirect: "/users/profile",
    failureRedirect: "/login",
  }),
  (req, res, next) => {}

  exports.logout = (req,res,next)=>{
    req.logout(()=>{
      res.redirect("/login")
    })
  }


  exports.editProfile = (req,res,next)=>{
    res.render("editProfile",{user: req.body})
  }

  exports.creatPost = (req,res,next)=>{
    res.render("createPost")
  }

  exports.deletePost = (req,res,next)=>{
    userModel.findByIdAndDelete(req.params.id,(err)=>{
      if(err){
        res.send(err)
      }else{
          res.redirect("/users/profile")
      }
    })
  }