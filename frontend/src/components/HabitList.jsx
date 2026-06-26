import HabitCard from "./HabitCard";

const today = new Date();
const fmt = (d) => d.toISOString().split("T")[0];
const daysAgo = (n) => {
  const d = new Date(today);
  d.setDate(today.getDate() - n);
  return fmt(d);
};

const sampleHabits = [
  {
    id: 1,
    name: "Morning Run",
    frequency: "Daily",
    streak: 5,
    completedToday: true,
    completions: [
      daysAgo(6),
      daysAgo(5),
      daysAgo(4),
      daysAgo(3),
      daysAgo(2),
      daysAgo(1),
      daysAgo(0),
    ],
  },
  {
    id: 2,
    name: "Read 30 mins",
    frequency: "Daily",
    streak: 3,
    completedToday: false,
    completions: [daysAgo(4), daysAgo(2), daysAgo(1)],
  },
  {
    id: 3,
    name: "Drink 2L Water",
    frequency: "Daily",
    streak: 7,
    completedToday: true,
    completions: [
      daysAgo(6),
      daysAgo(5),
      daysAgo(4),
      daysAgo(3),
      daysAgo(2),
      daysAgo(1),
      daysAgo(0),
    ],
  },
];

function HabitList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {sampleHabits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </div>
  );
}

export default HabitList;
