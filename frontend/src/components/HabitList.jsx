import HabitCard from "./HabitCard";

function HabitList({ habits, setHabits }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {habits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} setHabits={setHabits} />
      ))}
    </div>
  );
}

export default HabitList;
