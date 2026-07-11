import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { fetchHabits } from "../api/habitApi";
import { computeStreak, isStreakBroken, todayStr } from "../utils/habitUtils";
import { useAuth } from "./AuthContext";

const HabitsContext = createContext();

export function HabitsProvider({ children }) {
  const { user } = useAuth();
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadHabits = useCallback(async () => {
    if (!user) {
      setHabits([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const { data } = await fetchHabits();
      const processed = data.map((habit) => {
        const completionStrs = habit.completions.map(
          (d) => new Date(d).toISOString().split("T")[0],
        );
        const completedToday = completionStrs.includes(todayStr);
        const streak = isStreakBroken(completionStrs)
          ? 0
          : computeStreak(completionStrs);
        return {
          ...habit,
          id: habit._id,
          completions: completionStrs,
          completedToday,
          streak,
        };
      });
      setHabits(processed);
    } catch (error) {
      console.error("Failed to fetch habits:", error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    loadHabits();
  }, [loadHabits]);

  return (
    <HabitsContext.Provider
      value={{ habits, setHabits, loading, refreshHabits: loadHabits }}
    >
      {children}
    </HabitsContext.Provider>
  );
}

export const useHabits = () => useContext(HabitsContext);
