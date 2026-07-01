import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import HabitList from "./components/HabitList";
import AddHabitForm from "./components/AddHabitForm";
import { computeStreak, isStreakBroken, todayStr } from "./utils/habitUtils";

const daysAgo = (n) => {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().split("T")[0];
};

const initialHabits = [
  {
    id: 1,
    name: "Morning Run",
    frequency: "Daily",
    streak: 5,
    completedToday: true,
    completions: [
      daysAgo(6),
      daysAgo(5),
      daysAgo(4),
      daysAgo(3),
      daysAgo(2),
      daysAgo(1),
      daysAgo(0),
    ],
  },
  {
    id: 2,
    name: "Read 30 mins",
    frequency: "Daily",
    streak: 3,
    completedToday: false,
    completions: [daysAgo(4), daysAgo(2), daysAgo(1)],
  },
  {
    id: 3,
    name: "Drink 2L Water",
    frequency: "Daily",
    streak: 7,
    completedToday: true,
    completions: [
      daysAgo(6),
      daysAgo(5),
      daysAgo(4),
      daysAgo(3),
      daysAgo(2),
      daysAgo(1),
      daysAgo(0),
    ],
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showHabits, setShowHabits] = useState(false);
  const [habits, setHabits] = useState(initialHabits);

  // Task 4 — useEffect: reset broken streaks on app load
  useEffect(() => {
    setHabits((prev) =>
      prev.map((habit) => {
        const broken = isStreakBroken(habit.completions);
        const streak = computeStreak(habit.completions);
        const completedToday = habit.completions
          .map((d) => d.toString().split("T")[0])
          .includes(todayStr);
        return {
          ...habit,
          streak: broken ? 0 : streak,
          completedToday,
        };
      }),
    );
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onAddHabit={() => setShowModal(true)}
          showHabits={showHabits}
        />

        {!showHabits ? (
          <Hero onGetStarted={() => setShowHabits(true)} />
        ) : (
          <main className="max-w-6xl mx-auto px-6 py-8">
            <StatsBar habits={habits} />
            <div className="mt-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    My Habits
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    Keep your streaks alive and build consistency 🔥
                  </p>
                </div>
                <button
                  onClick={() => setShowModal(true)}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition"
                >
                  + Add Habit
                </button>
              </div>
              <HabitList habits={habits} setHabits={setHabits} />
            </div>
          </main>
        )}

        {showModal && (
          <AddHabitForm
            onClose={() => setShowModal(false)}
            habits={habits}
            setHabits={setHabits}
          />
        )}
      </div>
    </div>
  );
}

export default App;
