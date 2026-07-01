const express = require("express");
const router = express.Router();
const {
  getHabits,
  createHabit,
  deleteHabit,
  completeHabit,
  getHabitHistory,
} = require("../controllers/habitController");

router.get("/", getHabits);
router.post("/", createHabit);
router.delete("/:id", deleteHabit);
router.post("/:id/complete", completeHabit);
router.get("/:id/history", getHabitHistory);

module.exports = router;
