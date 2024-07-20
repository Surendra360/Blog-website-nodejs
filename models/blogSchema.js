const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    poster:String,
    title:String,
    content:String,
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})



module.exports = mongoose.model("user", userSchema);