import { ListChecks, Flame, CalendarCheck2, Trophy } from "lucide-react";

function StatsBar({ habits }) {
  const totalHabits = habits.length;
  const activeStreaks = habits.filter((h) => h.streak > 0).length;
  const completedToday = habits.filter((h) => h.completedToday).length;
  const bestStreak = habits.reduce((max, h) => Math.max(max, h.streak), 0);

  const stats = [
    {
      label: "Total Habits",
      value: totalHabits,
      icon: <ListChecks size={20} />,
      bg: "bg-blue-50 dark:bg-blue-950",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      label: "Active Streaks",
      value: activeStreaks,
      icon: <Flame size={20} />,
      bg: "bg-orange-50 dark:bg-orange-950",
      color: "text-orange-500 dark:text-orange-400",
    },
    {
      label: "Completed Today",
      value: `${completedToday}/${totalHabits}`,
      icon: <CalendarCheck2 size={20} />,
      bg: "bg-green-50 dark:bg-green-950",
      color: "text-green-600 dark:text-green-400",
    },
    {
      label: "Best Streak",
      value: `${bestStreak} days`,
      icon: <Trophy size={20} />,
      bg: "bg-yellow-50 dark:bg-yellow-950",
      color: "text-yellow-600 dark:text-yellow-400",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 flex flex-col gap-3 shadow-sm"
        >
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}
          >
            {stat.icon}
          </div>
          <div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white block">
              {stat.value}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {stat.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsBar;
