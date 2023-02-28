const userModel = require("../models/user")


const uuidv4 = require("uuid")
const bcrypt = require("bcrypt")


exports.createUser = async (req,res) => {
    const password = uuidv4().slice(0,7)
    bcrypt.hash(password,"BWH",async (err,hashed)=>{
        const user = await userModel.create({...req.body,password:hashed})
        res.status(200).json(user)
    })
}

exports.login = async (req,res) => {
    const user = await userModel.find({email:req.body.email})
    bcrypt.compare(req.body.password,user.password,(err,same)=>{
        if(same) return res.status(200).json(user)
        res.status(401).json({error:"Wrong password !"})
    })
}

exports.updateProfile = async (req,res) => {
    const updatedUser = await userModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updatedUser)
}

exports.deleteProfile =async (req,res) => {
    const deletedUser = await userModel.findOneAndDelete(req.params)
    res.status(200).json(deletedUser)
}

exports.getUsers = async (req,res) => {
    const users = await userModel.find({})
    res.status(200).json(users)
}

exports.getUserById = async (req,res) => {
    const user = await userModel.findById(req.params.id)
    res.status(200).json(user)
}

exports.searchUser = async (req,res) => {
    const users = await userModel.find({$or:[{firstName:req.body},{lastName:req.body}]})
    res.status(200).json(users)
}