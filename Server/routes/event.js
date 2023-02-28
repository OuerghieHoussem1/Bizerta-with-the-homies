const express = require("express")

const eventController = require("../controllers/event")

const router = express.Router()

router.get("/all",eventController.getEvents)
router.get("/",eventController.searchEvent)
router.get("/:id",eventController.getEventById)
router.post("/",eventController.createEvent)
router.put("/:id",eventController.updateEvent)
router.put("/addParticipant/:id",eventController.addParticipant)
router.put("/removeParticipant/:id",eventController.removeParticipant)
router.put("/addHidden/:id",eventController.addHidden)
router.put("/removeHidden/:id",eventController.removeHidden)
router.delete("/:id",eventController.deleteEvent)

module.exports = router