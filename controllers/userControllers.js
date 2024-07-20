const userModel = require("../models/userSchema")

const passport = require("passport");
const imagekit = require("../utils/imagekit");
const { log } = require("debug/src/browser");
const LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy(userModel.authenticate()));

exports.profile = (req, res, next) => {
  res.render("profile", { user: req.user });
}

exports.register = async (req, res, next) => {
  try {
    const { fileId, url, thumbnailUrl } = await imagekit.upload({
      file: req.files.profileImage.data,
      fileName: req.files.profileImage.name
    });
    const profileImage = url;
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
  (req, res, next) => { }

exports.logout = (req, res, next) => {
  req.logout(() => {
    res.redirect("/login")
  })
}


exports.editProfile = async (req, res, next) => {
  const user = await userModel.findById(req.params.id);
  // const files = await userModel.findById(req.files.id); 
  res.render("editProfile", { user: user, users: req.user })
}

exports.updateImg = async (req, res, next) => {
  console.log(req.params.id);
  const user = await userModel.findById(req.params.id)
  console.log(user);

  // console.log(req.files);

  const { fileId, url, thumbnailUrl } = await imagekit.upload({

    file: req.files.avtar.data,
    fileName: req.files.avtar.name

  })
  // console.log(url);
  user.profileImage = url
  await user.save();
  res.render("editProfile", { user })
}

exports.update = async (req, res, next) => {
  try {
    await userModel.findByIdAndUpdate(req.params.id, req.body)
    res.redirect("/users/profile")
  } catch (error) {
    res.send(error.message)
  }
}


exports.creatBlog = (req, res, next) => {
  res.render("createBlog")
}

exports.newBlog = (req, res, next) => {
  poster: req.files.poster
  title: req.body.title
  content: req.body.content
}

exports.deletePost = (req, res, next) => {
  userModel.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      res.send(err)
    } else {
      res.redirect("/users/profile")
    }
  })
};


exports.deleteUser = async(req, res, next) => {
  try {
    await userModel.findByIdAndDelete(req.params.id)
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
  }
}