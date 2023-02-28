const mongoose = require("mongoose")

const eventSchema = mongoose.Schema({
    eventTitle:String,
    eventDescriptio:String,
    participants:[{user:{type:mongoose.Types.ObjectId,ref:"user"},present:{type:Boolean,default:false}}],
    pictures:[{type:String}],
    time:Date,
    place:{type:mongoose.Types.ObjectId,ref:"place"},
    type:String,
    hidden:[{type:mongoose.Types.ObjectId,ref:"user"}],
    author:{type:mongoose.Types.ObjectId, ref:"user"}
})

const eventModel = mongoose.model("event",eventSchema)


module.exports = eventModel