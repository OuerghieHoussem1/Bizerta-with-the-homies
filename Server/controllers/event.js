const eventModel = require("../models/event")

exports.createEvent = async (req,res) => {
    const event = await eventModel.create(req.body)

    res.status(200).json(event)
}

exports.updateEvent = async (req,res) => {
    const updatedEvent = await eventModel.findByIdAndUpdate(req.params.id,req.body,{new:true})

    res.status(200).json(updatedEvent)
}

exports.addParticipant = async (req,res) => {
    const updatedEvent = await eventModel.findByIdAndUpdate(req.params.id,{$push:{participants:req.body}},{new:true})
    res.status(200).json(updatedEvent)
}

exports.removeParticipant = async (req,res) => {
    const updatedEvent = await eventModel.findByIdAndUpdate(req.params.id,{$pull:{participants:req.body}},{new:true})
    res.status(200).json(updatedEvent)
}

exports.addHidden = async (req,res) => {
    const updatedEvent = await eventModel.findByIdAndUpdate(req.params.id,{$push:{hidden:req.body}},{new:true})
    res.status(200).json(updatedEvent)
}

exports.removeHidden = async (req,res) => {
    const updatedEvent = await eventModel.findByIdAndUpdate(req.params.id,{$pull:{hidden:req.body}},{new:true})
    res.status(200).json(updatedEvent)
}

exports.deleteEvent = async (req,res) => {
    const deletedEvent = await eventModel.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedEvent)
}

exports.getEvents = async (req,res) => {
    const events = await eventModel.find({})
    res.status(200).json(events)
}

exports.getEventById = async (req,res) => {
    const event = await eventModel.findById(req.params.id)
    res.status(200).json(event)
}

exports.searchEvent = async (req,res) => {
    const events = await eventModel.find({$or:[{eventTitle:req.body}]})
    res.status(200).json(events)
}