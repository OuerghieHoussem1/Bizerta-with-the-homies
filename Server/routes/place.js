const express = require("express")

const placeController = require("../controllers/place")

const router = express.Router()

router.get("/all",placeController.getPlaces)
router.get("/",placeController.searchPlace)
router.get("/:id",placeController.searchPlace)
router.post("/",placeController.createPlace)
router.put("/:id",placeController.updatePlace)
router.delete("/:id",placeController.deletePlace)

module.exports = router