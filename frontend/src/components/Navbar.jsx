import { Moon, Sun, Plus } from "lucide-react";
import logo from "../assets/logo.png";

function Navbar({ darkMode, setDarkMode, onAddHabit, showHabits }) {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex items-center justify-between shadow-sm sticky top-0 z-40">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="HabitFlow" className="h-16 w-auto" />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {showHabits && (
          <button
            onClick={onAddHabit}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition"
          >
            <Plus size={16} />
            Add Habit
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
