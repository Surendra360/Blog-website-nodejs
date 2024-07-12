const mongoose = require("mongoose");

exports.connectionDB = ()=>{
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("connected to database");
    } catch (error) {
        console.log(error);
    }
}