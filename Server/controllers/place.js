const placeModel = require("../models/Place")

exports.createPlace = async (req,res) => {
    const place = await placeModel.create(req.body)
    res.status(200).json(place)
}

exports.updatePlace = async (req,res) => {
    const updatedPlace = await placeModel.findByIdAndUpdate(req.params.id,req.params.body,{new:true})
    res.status(200).json(updatedPlace)
}

exports.deletePlace = async (req,res) => {
    const deletedPlace = await placeModel.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedPlace)
}

exports.getPlaces = async (req,res) => {
    const places = await placeModel.find({})
    res.status(200).json(places)
}

exports.getPlaceById = async (req,res) => {
    const place = await placeModel.findById(req.params.id)
    res.status(200).json(place)
}
exports.searchPlace = async (req,res) => {
    const places = await placeModel.find({$or:[{placeName:req.body}]})
    res.status(200).json(places)
}

