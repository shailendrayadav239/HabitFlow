import { ClipboardList, Flame, CheckCircle, Trophy } from "lucide-react";

function StatsBar({ habits }) {
  const totalHabits = habits.length;
  const activeStreaks = habits.filter((h) => h.streak > 0).length;
  const completedToday = habits.filter((h) => h.completedToday).length;
  const bestStreak = habits.reduce((max, h) => Math.max(max, h.streak), 0);

  const stats = [
    {
      label: "Total Habits",
      value: totalHabits,
      icon: <ClipboardList size={22} />,
      color: "text-blue-500",
    },
    {
      label: "Active Streaks",
      value: activeStreaks,
      icon: <Flame size={22} />,
      color: "text-orange-500",
    },
    {
      label: "Completed Today",
      value: `${completedToday}/${totalHabits}`,
      icon: <CheckCircle size={22} />,
      color: "text-green-500",
    },
    {
      label: "Best Streak",
      value: `${bestStreak} days`,
      icon: <Trophy size={22} />,
      color: "text-yellow-500",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 flex flex-col gap-1 shadow-sm"
        >
          <span className={stat.color}>{stat.icon}</span>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {stat.value}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default StatsBar;
