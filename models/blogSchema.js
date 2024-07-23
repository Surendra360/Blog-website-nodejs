const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    blogPoster: {
        type:String,
        default:"https://imgs.search.brave.com/zIcDZ61lFh7nhQm1sn14n-_3ZPkXXWF96yveqkLaWKQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/OS8wNC8yMy8yOC93/b3JkcHJlc3MtOTIz/MTg4XzY0MC5qcGc" 
    },
    blogTitle: String,
    blogContent: String,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    // like: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "user"
    // }]
}, { timestamps: true })



module.exports = mongoose.model("blog", blogSchema);