import API from "./authApi";

export const fetchHabits = () => API.get("/habits");
export const createHabit = (habitData) => API.post("/habits", habitData);
export const deleteHabit = (id) => API.delete(`/habits/${id}`);
export const completeHabit = (id) => API.post(`/habits/${id}/complete`);
export const getHabitHistory = (id) => API.get(`/habits/${id}/history`);
