import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import HabitList from "./components/HabitList";
import AddHabitForm from "./components/AddHabitForm";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showHabits, setShowHabits] = useState(false);

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
            <StatsBar />
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
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition"
                >
                  + Add Habit
                </button>
              </div>
              <HabitList />
            </div>
          </main>
        )}

        {showModal && <AddHabitForm onClose={() => setShowModal(false)} />}
      </div>
    </div>
  );
}

export default App;
