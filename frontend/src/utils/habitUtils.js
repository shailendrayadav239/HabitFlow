export const fmt = (d) => new Date(d).toISOString().split("T")[0];

export const todayStr = fmt(new Date());

export const computeStreak = (completions) => {
  if (!completions || completions.length === 0) return 0;

  const sorted = [...completions]
    .map((d) => fmt(d))
    .sort()
    .reverse();

  const today = new Date();
  let streak = 0;
  let current = new Date(today);

  for (let i = 0; i < 365; i++) {
    const dateStr = fmt(current);
    if (sorted.includes(dateStr)) {
      streak++;
      current.setDate(current.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
};

export const isStreakBroken = (completions) => {
  if (!completions || completions.length === 0) return false;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = fmt(yesterday);
  const completionDates = completions.map((d) => fmt(d));
  return (
    !completionDates.includes(yesterdayStr) &&
    !completionDates.includes(todayStr)
  );
};

export const getHabitStatus = (habit) => {
  if (habit.completedToday) return "Completed";
  if (habit.streak > 0) return "In Progress";
  return "Pending";
};
