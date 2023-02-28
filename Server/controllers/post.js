const postModel = require("../models/post")

exports.createPost = async (req,res) => {
    const post =await postModel.create(req.body)
    res.status(200).json(post)
}

exports.updatePost = async (req,res) => {
    const updatedPost = await postModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updatedPost)   
}

exports.addLike = async (req,res) => {
    const updatedPost = await postModel.findByIdAndUpdate(req.params.id,{$push:[{likes:req.body}]},{new:true})
    res.status(200).json(updatedPost)
}

exports.removeLike = async (req,res) => {
    const updatedPost = await postModel.findByIdAndUpdate(req.params.id,{$pull:[{likes:req.body}]},{new:true})
    res.status(200).json(updatedPost)
}

exports.addComment = async (req,res) => {
    const updatedPost = await postModel.findByIdAndUpdate(req.params.id,{$push:[{comments:req.body}]},{new:true})
    res.status(200).json(updatedPost)
}

exports.removeComment = async (req,res) => {
    const updatedPost = await postModel.findByIdAndUpdate(req.params.id,{$pull:[{comments:req.body}]},{new:true})
    res.status(200).json(updatedPost)
}

exports.deletePost = async (req,res) => {
    const deletedPost = await postModel.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedPost)
}

exports.getPosts = async (req,res) => {
    const posts = await postModel.find({})
    res.status(200).json(posts)
}

exports.getPostById = async (req,res) => {
    const post = await postModel.findById(req.params.id)
    res.status(200).json(post)
}