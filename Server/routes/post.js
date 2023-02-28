const express = require("express")

const postController = require("../controllers/post")

const router = express.Router()


router.get("/all",postController.getPosts)
router.get("/",postController.getPostById)
router.post("/",postController.createPost)
router.put("/:id",postController.updatePost)
router.put("/addLike/:id",postController.addLike)
router.put("/removeLike/:id",postController.removeLike)
router.put("/addComment/:id",postController.addComment)
router.put("/removeComment/:id",postController.removeComment)
router.delete("/:id",postController.deletePost)

module.exports = router