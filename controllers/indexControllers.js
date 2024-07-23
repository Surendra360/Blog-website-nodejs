const userModel = require("../models/userSchema")
const blogModel = require("../models/blogSchema")

exports.index = async function (req, res, next) {
  const allBlogs = await blogModel.find();
  // console.log(allBlogs);
    res.render("index", {allBlogs, user:req.user});
  }

  exports.register = (req, res, next) => {
    res.render("register", {user:req.user, file:req.file});
  }

  exports.login =  (req, res, next) => {
    res.render("login", {user:req.user});
  }

  exports.blogReadMore = async (req,res,next)=>{
    const blogData = await blogModel.findById(req.params.id)
    console.log(blogData);
    res.render("blogReadMore", {blogData, user:req.user})
  }

  exports.deleteBlog = async(req,res,next)=>{
    await blogModel.findByIdAndDelete(req.params.id)
    res.redirect("/users/profile")
  }

  exports.updateBlogs = async(req,res,next)=>{
    const currentBlog = await blogModel.findById(req.params.id)
    res.render("updateBlogs",{currentBlog, user:req.user})
  }