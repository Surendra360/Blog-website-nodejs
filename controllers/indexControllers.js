const userModel = require("../models/userSchema")

exports.index = async function (req, res, next) {
    res.render("index", {user:req.user});
  }

  exports.register = (req, res, next) => {
    res.render("register", {user:req.user, file:req.file});
  }

  exports.login =  (req, res, next) => {
    res.render("login", {user:req.user});
  }