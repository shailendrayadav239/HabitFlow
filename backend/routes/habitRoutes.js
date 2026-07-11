const express = require("express");
const router = express.Router();
const {
  getHabits,
  createHabit,
  deleteHabit,
  completeHabit,
  getHabitHistory,
} = require("../controllers/habitController");
const { protect } = require("../middleware/authMiddleware");

/**
 * @swagger
 * /api/habits:
 *   get:
 *     summary: Get all habits
 *     tags: [Habits]
 *     responses:
 *       200:
 *         description: List of all habits
 */
router.get("/", protect, getHabits);

/**
 * @swagger
 * /api/habits:
 *   post:
 *     summary: Create a new habit
 *     tags: [Habits]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               frequency:
 *                 type: string
 *     responses:
 *       201:
 *         description: Habit created successfully
 */
router.post("/", protect, createHabit);

/**
 * @swagger
 * /api/habits/{id}:
 *   delete:
 *     summary: Delete a habit
 *     tags: [Habits]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Habit deleted successfully
 */
router.delete("/:id", protect, deleteHabit);

/**
 * @swagger
 * /api/habits/{id}/complete:
 *   post:
 *     summary: Mark habit as completed today
 *     tags: [Habits]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Habit completed successfully
 */
router.post("/:id/complete", protect, completeHabit);

/**
 * @swagger
 * /api/habits/{id}/history:
 *   get:
 *     summary: Get habit history
 *     tags: [Habits]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Habit history returned
 */
router.get("/:id/history", protect, getHabitHistory);

module.exports = router;
