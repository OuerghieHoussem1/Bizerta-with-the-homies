const express = require("express")

const userController = require("../controllers/user")

const router = express.Router()


router.get("/all",userController.getUsers)
router.get("/",userController.searchUser)
router.get("/:id",userController.getUserById)
router.post("/createAccount",userController.createUser)
router.post("/login",userController.login)
router.put("/:id",userController.updateProfile)
router.delete("/:id",userController.deleteProfile)

module.exports = router