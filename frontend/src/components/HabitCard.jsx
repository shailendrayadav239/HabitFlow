import { Flame, CheckCircle, Circle } from "lucide-react";
import CalendarStrip from "./CalendarStrip";

function HabitCard({ habit }) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-gray-900 dark:text-white">
          {habit.name}
        </h2>
        <span className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-2 py-1 rounded-full border border-blue-100 dark:border-blue-900">
          {habit.frequency}
        </span>
      </div>

      {/* Streak */}
      <div className="flex items-center gap-2">
        <Flame size={22} className="text-orange-500" />
        <span className="text-gray-900 dark:text-white font-bold text-2xl">
          {habit.streak}
        </span>
        <span className="text-gray-400 dark:text-gray-500 text-sm">
          day streak
        </span>
      </div>

      {/* Calendar Strip */}
      <CalendarStrip completions={habit.completions} />

      {/* Tick Button */}
      <button
        className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 mt-1 flex items-center justify-center gap-2 ${
          habit.completedToday
            ? "bg-green-500 text-white cursor-default"
            : "bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600"
        }`}
      >
        {habit.completedToday ? (
          <>
            <CheckCircle size={16} />
            Done Today
          </>
        ) : (
          <>
            <Circle size={16} />
            Mark as Done
          </>
        )}
      </button>
    </div>
  );
}

export default HabitCard;
