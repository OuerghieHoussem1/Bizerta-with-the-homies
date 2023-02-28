const mongoose = require("mongoose")

const placeSchema = mongoose.Schema({
    placeName:String,
    rates:[{user:{type:mongoose.Types.ObjectId,ref:"user"},rate:Number}]
})

const placeModel = mongoose.model("place",placeSchema)

module.exports = placeModel