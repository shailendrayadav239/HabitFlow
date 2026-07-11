import { useAuth } from "../context/AuthContext";
import { useHabits } from "../context/HabitsContext";
import { useNavigate } from "react-router-dom";
import { User, Mail, LogOut, Flame, ClipboardList } from "lucide-react";

function ProfilePage() {
  const { user, logout } = useAuth();
  const { habits } = useHabits();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const totalHabits = habits?.length || 0;
  const bestStreak =
    habits?.reduce((max, h) => Math.max(max, h.streak), 0) || 0;

  return (
    <main className="max-w-2xl mx-auto px-6 py-8">
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm">
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-4">
            <span className="text-white text-3xl font-bold">
              {user?.name?.charAt(0).toUpperCase()}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {user?.name}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            {user?.email}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-blue-50 dark:bg-blue-950 rounded-2xl p-4 flex flex-col items-center border border-blue-100 dark:border-blue-900">
            <ClipboardList size={24} className="text-blue-600 mb-2" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {totalHabits}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Total Habits
            </span>
          </div>
          <div className="bg-orange-50 dark:bg-orange-950 rounded-2xl p-4 flex flex-col items-center border border-orange-100 dark:border-orange-900">
            <Flame size={24} className="text-orange-500 mb-2" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {bestStreak}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Best Streak
            </span>
          </div>
        </div>

        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-3">
            <User size={18} className="text-blue-600" />
            <div>
              <p className="text-xs text-gray-400">Full Name</p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {user?.name}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-3">
            <Mail size={18} className="text-blue-600" />
            <div>
              <p className="text-xs text-gray-400">Email</p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {user?.email}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900 font-semibold hover:bg-red-100 dark:hover:bg-red-900 transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </main>
  );
}

export default ProfilePage;
