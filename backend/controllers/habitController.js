const Habit = require("../models/Habit");

// GET /api/habits
const getHabits = async (req, res) => {
  try {
    const habits = await Habit.find({ userId: "temp" });
    res.json(habits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/habits
const createHabit = async (req, res) => {
  try {
    const { name, frequency } = req.body;

    if (!name || !frequency) {
      return res
        .status(400)
        .json({ message: "Name and frequency are required" });
    }

    const habit = await Habit.create({
      name,
      frequency,
      completions: [],
      userId: "temp",
    });

    res.status(201).json(habit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE /api/habits/:id
const deleteHabit = async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);

    if (!habit) {
      return res.status(404).json({ message: "Habit not found" });
    }

    await Habit.findByIdAndDelete(req.params.id);
    res.json({ message: "Habit deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/habits/:id/complete
const completeHabit = async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);

    if (!habit) {
      return res.status(404).json({ message: "Habit not found" });
    }

    const today = new Date().toISOString().split("T")[0];

    // Validate no duplicate completion for same date
    const alreadyCompleted = habit.completions.some(
      (date) => new Date(date).toISOString().split("T")[0] === today,
    );

    if (alreadyCompleted) {
      return res.status(400).json({ message: "Habit already completed today" });
    }

    habit.completions.push(new Date());
    await habit.save();

    res.json(habit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/habits/:id/history
const getHabitHistory = async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);

    if (!habit) {
      return res.status(404).json({ message: "Habit not found" });
    }

    res.json({
      id: habit._id,
      name: habit.name,
      completions: habit.completions,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getHabits,
  createHabit,
  deleteHabit,
  completeHabit,
  getHabitHistory,
};
