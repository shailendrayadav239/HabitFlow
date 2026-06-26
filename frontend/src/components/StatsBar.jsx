const stats = [
  { label: "Total Habits", value: "3", icon: "📋" },
  { label: "Active Streaks", value: "2", icon: "🔥" },
  { label: "Completed Today", value: "2/3", icon: "✅" },
  { label: "Best Streak", value: "7 days", icon: "🏆" },
];

function StatsBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 flex flex-col gap-1 shadow-sm"
        >
          <span className="text-2xl">{stat.icon}</span>
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
