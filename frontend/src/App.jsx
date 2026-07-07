import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import HabitList from "./components/HabitList";
import AddHabitForm from "./components/AddHabitForm";
import { fetchHabits } from "./api/habitApi";
import { computeStreak, isStreakBroken, todayStr } from "./utils/habitUtils";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showHabits, setShowHabits] = useState(false);
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch habits from MongoDB on app load
  useEffect(() => {
    const loadHabits = async () => {
      try {
        const { data } = await fetchHabits();
        const processed = data.map((habit) => {
          const completionStrs = habit.completions.map(
            (d) => new Date(d).toISOString().split("T")[0],
          );
          const completedToday = completionStrs.includes(todayStr);
          const streak = isStreakBroken(completionStrs)
            ? 0
            : computeStreak(completionStrs);
          return {
            ...habit,
            id: habit._id,
            completions: completionStrs,
            completedToday,
            streak,
          };
        });
        setHabits(processed);
      } catch (error) {
        console.error("Failed to fetch habits:", error);
      } finally {
        setLoading(false);
      }
    };
    loadHabits();
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

              {/* Task 6 — Loading skeleton */}
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 h-48 animate-pulse"
                    >
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-3 w-3/4" />
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-3 w-1/2" />
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
                    </div>
                  ))}
                </div>
              ) : (
                <HabitList habits={habits} setHabits={setHabits} />
              )}
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
