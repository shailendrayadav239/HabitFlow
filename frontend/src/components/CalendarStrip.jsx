function CalendarStrip({ completions = [] }) {
  const days = [];
  const today = new Date();

  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const dateStr = date.toISOString().split("T")[0];
    const isCompleted = completions.includes(dateStr);
    const isToday = i === 0;

    days.push({
      label: date.toLocaleDateString("en-US", { weekday: "short" }),
      date: date.getDate(),
      isCompleted,
      isToday,
    });
  }

  return (
    <div className="flex justify-between mt-2 gap-1">
      {days.map((day, index) => (
        <div key={index} className="flex flex-col items-center gap-1">
          <span className="text-xs text-gray-400 dark:text-gray-500">
            {day.label}
          </span>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all ${
              day.isCompleted
                ? "bg-green-500 border-green-400 text-white"
                : day.isToday
                  ? "border-blue-500 text-blue-500 bg-transparent"
                  : "border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500"
            }`}
          >
            {day.isCompleted ? "✓" : day.date}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CalendarStrip;
