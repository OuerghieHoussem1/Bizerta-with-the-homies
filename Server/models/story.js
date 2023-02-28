const mongoose = require("mongoose")

const storySchema = mongoose.Schema({
    content:String,
    author:String,
    image:String,
    likes:[{type:mongoose.Types.ObjectId,ref:"user"}],
    postedAt:Date
})

const storyModel = mongoose.model("story",storySchema)

module.exports = storyModel