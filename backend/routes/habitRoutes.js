const express = require("express");
const router = express.Router();
const {
  getHabits,
  createHabit,
  deleteHabit,
  completeHabit,
  getHabitHistory,
} = require("../controllers/habitController");

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
router.get("/", getHabits);

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
router.post("/", createHabit);

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
router.delete("/:id", deleteHabit);

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
 *       400:
 *         description: Habit already completed today
 */
router.post("/:id/complete", completeHabit);

/**
 * @swagger
 * /api/habits/{id}/history:
 *   get:
 *     summary: Get habit completion history
 *     tags: [Habits]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Habit history returned successfully
 */
router.get("/:id/history", getHabitHistory);

module.exports = router;
