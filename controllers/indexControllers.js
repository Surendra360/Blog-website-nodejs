const userModel = require("../models/userSchema")
const blogModel = require("../models/blogSchema")

exports.index = async function (req, res, next) {
  const allBlogs = await blogModel.find();
  // console.log(allBlogs);
    res.render("index", {allBlogs});
  }

  exports.register = (req, res, next) => {
    res.render("register", {user:req.user, file:req.file});
  }

  exports.login =  (req, res, next) => {
    res.render("login", {user:req.user});
  }

  exports.blogReadMore = async (req,res,next)=>{
    // const user = await userModel.findById(req.user._id)
    res.render("blogReadMore")
  }