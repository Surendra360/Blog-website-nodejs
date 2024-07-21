const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    blogPoster: String,
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
}, { timestamp: true })



module.exports = mongoose.model("blog", blogSchema);