import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Get all habits
export const fetchHabits = () => API.get("/habits");

// Create a habit
export const createHabit = (habitData) => API.post("/habits", habitData);

// Delete a habit
export const deleteHabit = (id) => API.delete(`/habits/${id}`);

// Complete a habit today
export const completeHabit = (id) => API.post(`/habits/${id}/complete`);

// Get habit history
export const getHabitHistory = (id) => API.get(`/habits/${id}/history`);
