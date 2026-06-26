function Navbar({ darkMode, setDarkMode, onAddHabit, showHabits }) {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex items-center justify-between shadow-sm sticky top-0 z-40">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white text-sm font-bold">H</span>
        </div>
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
          HabitFlow
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        {/* Dark/Light Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition text-lg"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Add Habit Button (only show on dashboard) */}
        {showHabits && (
          <button
            onClick={onAddHabit}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition"
          >
            + Add Habit
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
