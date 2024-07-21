const mongoose = require("mongoose")
const plm = require("passport-local-mongoose")
const imageKit = require("../utils/imagekit")

const userSchema = mongoose.Schema({
    profileImage:{
        type:String,
        url: "",
        default: "https://imgs.search.brave.com/7NsHUOzvkyoQx1qVUUkde1oiDgJhv_GssUtWTlBAvzs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8zMC0z/MDc0MTZfcHJvZmls/ZS1pY29uLXBuZy1p/bWFnZS1mcmVlLWRv/d25sb2FkLXNlYXJj/aHBuZy1lbXBsb3ll/ZS5wbmc"
    },
    name:String,
    username:String,
    email:String,
    password:String,
    updateImg:{
        type:String,
        url:"",
    },
    blogs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "blog"
    }]
})

userSchema.plugin(plm)


module.exports = mongoose.model("user", userSchema);