const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    content:String,
    author:String,
    image:String,
    location:{type:mongoose.Types.ObjectId, ref:"place"},
    event:{type:mongoose.Types.ObjectId, red:"event"},
    likes:[{type:mongoose.Types.ObjectId,ref:"user"}],
    comments:[{user:{type:mongoose.Types.ObjectId,ref:"user"},content:String}]
})

const postModel = mongoose.model("post",postSchema)

module.exports = postModel