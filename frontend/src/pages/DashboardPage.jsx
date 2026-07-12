import { useState } from "react";
import { ListFilter, Sparkles } from "lucide-react";
import StatsBar from "../components/StatsBar";
import HabitList from "../components/HabitList";
import AddHabitForm from "../components/AddHabitForm";
import { useHabits } from "../context/HabitsContext";
import { getHabitStatus } from "../utils/habitUtils";

const filters = ["All", "Pending", "In Progress", "Completed"];

function DashboardPage() {
  const { habits, setHabits, loading } = useHabits();
  const [showModal, setShowModal] = useState(false);
  const [editingHabit, setEditingHabit] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredHabits =
    activeFilter === "All"
      ? habits
      : habits.filter((h) => getHabitStatus(h) === activeFilter);

  const closeModal = () => {
    setShowModal(false);
    setEditingHabit(null);
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      <StatsBar habits={habits} />

      <div className="mt-8">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
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

        {habits.length > 0 && (
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <ListFilter size={16} className="text-gray-400 mr-1" />
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition ${
                  activeFilter === f
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-blue-300"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        )}

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
        ) : habits.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-gray-200 dark:border-gray-800 rounded-2xl">
            <div className="w-14 h-14 bg-blue-50 dark:bg-blue-950 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Sparkles
                size={24}
                className="text-blue-600 dark:text-blue-400"
              />
            </div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-1">
              No habits yet
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-5">
              Create your first habit to start building your streak
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition"
            >
              + Add Your First Habit
            </button>
          </div>
        ) : filteredHabits.length === 0 ? (
          <div className="text-center py-16 text-gray-400 dark:text-gray-500 text-sm">
            No habits in "{activeFilter}" yet.
          </div>
        ) : (
          <HabitList
            habits={filteredHabits}
            setHabits={setHabits}
            onEdit={(habit) => {
              setEditingHabit(habit);
              setShowModal(true);
            }}
          />
        )}
      </div>

      {showModal && (
        <AddHabitForm
          onClose={closeModal}
          setHabits={setHabits}
          editingHabit={editingHabit}
        />
      )}
    </main>
  );
}

export default DashboardPage;
