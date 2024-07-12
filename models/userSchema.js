const mongoose = require("mongoose")
const plm = require("passport-local-mongoose")

const userSchema = mongoose.Schema({
    name:String,
    username:String,
    email:String,
    password:String
})
userSchema.plugin(plm)
module.exports = mongoose.model("user", userSchema);