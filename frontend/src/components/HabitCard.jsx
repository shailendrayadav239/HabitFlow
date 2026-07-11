import { Flame, Check, Trash2 } from "lucide-react";
import CalendarStrip from "./CalendarStrip";
import { computeStreak, todayStr, getHabitStatus } from "../utils/habitUtils";
import { completeHabit, deleteHabit } from "../api/habitApi";

const statusColors = {
  Pending: "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400",
  "In Progress":
    "bg-yellow-50 dark:bg-yellow-950 text-yellow-600 dark:text-yellow-400",
  Completed: "bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400",
};

function HabitCard({ habit, setHabits }) {
  const status = getHabitStatus(habit);

  const toggleToday = async () => {
    if (habit.completedToday) return;
    try {
      await completeHabit(habit._id || habit.id);
      setHabits((prev) =>
        prev.map((h) => {
          if ((h._id || h.id) !== (habit._id || habit.id)) return h;
          const newCompletions = [...h.completions, todayStr];
          return {
            ...h,
            completedToday: true,
            completions: newCompletions,
            streak: computeStreak(newCompletions),
          };
        }),
      );
    } catch (error) {
      console.error("Failed to complete habit:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteHabit(habit._id || habit.id);
      setHabits((prev) =>
        prev.filter((h) => (h._id || h.id) !== (habit._id || habit.id)),
      );
    } catch (error) {
      console.error("Failed to delete habit:", error);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950 flex items-center justify-center">
            <Flame size={18} className="text-orange-500" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white leading-tight">
              {habit.name}
            </h2>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {habit.frequency}
              </span>
              <span
                className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${statusColors[status]}`}
              >
                {status}
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={handleDelete}
          className="text-gray-300 dark:text-gray-600 hover:text-red-500 transition p-1"
        >
          <Trash2 size={16} />
        </button>
      </div>

      <div className="flex items-baseline gap-1.5">
        <span className="text-gray-900 dark:text-white font-bold text-3xl">
          {habit.streak}
        </span>
        <span className="text-gray-400 dark:text-gray-500 text-sm">
          day streak
        </span>
      </div>

      <CalendarStrip completions={habit.completions} />

      <button
        onClick={toggleToday}
        className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
          habit.completedToday
            ? "bg-green-500 text-white cursor-default"
            : "bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600"
        }`}
      >
        <Check size={16} />
        {habit.completedToday ? "Done Today" : "Mark as Done"}
      </button>
    </div>
  );
}

export default HabitCard;
