const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    poster:String,
    title:String,
    content:String,
})



module.exports = mongoose.model("user", userSchema);