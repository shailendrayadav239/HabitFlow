// Temporary in-memory storage (will be replaced with MongoDB in Week 4)
let habits = [
  {
    id: "1",
    name: "Morning Run",
    frequency: "Daily",
    completions: [],
    userId: "temp",
  },
  {
    id: "2",
    name: "Read 30 mins",
    frequency: "Daily",
    completions: [],
    userId: "temp",
  },
  {
    id: "3",
    name: "Drink 2L Water",
    frequency: "Daily",
    completions: [],
    userId: "temp",
  },
];

// GET /api/habits
const getHabits = (req, res) => {
  res.json(habits);
};

// POST /api/habits
const createHabit = (req, res) => {
  const { name, frequency } = req.body;

  if (!name || !frequency) {
    return res.status(400).json({ message: "Name and frequency are required" });
  }

  const newHabit = {
    id: Date.now().toString(),
    name,
    frequency,
    completions: [],
    userId: "temp",
  };

  habits.push(newHabit);
  res.status(201).json(newHabit);
};

// DELETE /api/habits/:id
const deleteHabit = (req, res) => {
  const { id } = req.params;
  const habit = habits.find((h) => h.id === id);

  if (!habit) {
    return res.status(404).json({ message: "Habit not found" });
  }

  habits = habits.filter((h) => h.id !== id);
  res.json({ message: "Habit deleted successfully" });
};

// POST /api/habits/:id/complete
const completeHabit = (req, res) => {
  const { id } = req.params;
  const habit = habits.find((h) => h.id === id);

  if (!habit) {
    return res.status(404).json({ message: "Habit not found" });
  }

  const today = new Date().toISOString().split("T")[0];

  // Task 6 — Validate no duplicate completion for same date
  if (habit.completions.includes(today)) {
    return res.status(400).json({ message: "Habit already completed today" });
  }

  habit.completions.push(today);
  res.json(habit);
};

// GET /api/habits/:id/history
const getHabitHistory = (req, res) => {
  const { id } = req.params;
  const habit = habits.find((h) => h.id === id);

  if (!habit) {
    return res.status(404).json({ message: "Habit not found" });
  }

  res.json({ id: habit.id, name: habit.name, completions: habit.completions });
};

module.exports = {
  getHabits,
  createHabit,
  deleteHabit,
  completeHabit,
  getHabitHistory,
};
