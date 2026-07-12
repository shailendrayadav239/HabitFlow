const Habit = require("../models/Habit");

// GET /api/habits
const getHabits = async (req, res) => {
  try {
    const habits = await Habit.find({ userId: req.user._id });
    res.json(habits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/habits
const createHabit = async (req, res) => {
  try {
    const { name, frequency, startDate, dueDate } = req.body;

    if (!name || !frequency) {
      return res
        .status(400)
        .json({ message: "Name and frequency are required" });
    }

    const habit = await Habit.create({
      name,
      frequency,
      startDate: startDate || Date.now(),
      dueDate: dueDate || null,
      completions: [],
      userId: req.user._id,
    });

    res.status(201).json(habit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT /api/habits/:id
const updateHabit = async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);

    if (!habit) {
      return res.status(404).json({ message: "Habit not found" });
    }

    if (habit.userId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const { name, frequency, dueDate } = req.body;

    if (name !== undefined) habit.name = name;
    if (frequency !== undefined) habit.frequency = frequency;
    if (dueDate !== undefined) habit.dueDate = dueDate || null;

    await habit.save();
    res.json(habit);
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

    if (habit.userId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
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

    if (habit.userId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const today = new Date().toISOString().split("T")[0];

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
  updateHabit,
  deleteHabit,
  completeHabit,
  getHabitHistory,
};
