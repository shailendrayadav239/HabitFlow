import { X } from "lucide-react";
import { useState } from "react";
import { createHabit, updateHabit } from "../api/habitApi";
import { todayStr } from "../utils/habitUtils";

function AddHabitForm({ onClose, setHabits, editingHabit }) {
  const isEdit = Boolean(editingHabit);

  const [name, setName] = useState(editingHabit?.name || "");
  const [frequency, setFrequency] = useState(
    editingHabit?.frequency || "Daily",
  );
  const [startDate, setStartDate] = useState(
    editingHabit?.startDate?.split("T")[0] || todayStr,
  );
  const [dueDate, setDueDate] = useState(
    editingHabit?.dueDate?.split("T")[0] || "",
  );
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name.trim()) return;
    setLoading(true);
    try {
      if (isEdit) {
        const { data } = await updateHabit(
          editingHabit._id || editingHabit.id,
          {
            name: name.trim(),
            frequency,
            dueDate: dueDate || null,
          },
        );
        setHabits((prev) =>
          prev.map((h) =>
            (h._id || h.id) === (editingHabit._id || editingHabit.id)
              ? {
                  ...h,
                  name: data.name,
                  frequency: data.frequency,
                  dueDate: data.dueDate,
                }
              : h,
          ),
        );
      } else {
        const { data } = await createHabit({
          name: name.trim(),
          frequency,
          startDate,
          dueDate: dueDate || null,
        });
        const newHabit = {
          ...data,
          id: data._id,
          completions: [],
          completedToday: false,
          streak: 0,
        };
        setHabits((prev) => [...prev, newHabit]);
      }
      onClose();
    } catch (error) {
      console.error("Failed to save habit:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-full max-w-md shadow-2xl border border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-gray-900 dark:text-white text-xl font-bold">
            {isEdit ? "Edit Habit" : "Add New Habit"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition rounded-lg p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mb-4">
          <label className="text-gray-600 dark:text-gray-400 text-sm mb-1 block font-medium">
            Habit Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Morning Run"
            className="w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-600 dark:text-gray-400 text-sm mb-1 block font-medium">
            Frequency
          </label>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div>
            <label className="text-gray-600 dark:text-gray-400 text-sm mb-1 block font-medium">
              Start Date
            </label>
            <input
              type="date"
              value={startDate}
              disabled={isEdit}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            />
          </div>
          <div>
            <label className="text-gray-600 dark:text-gray-400 text-sm mb-1 block font-medium">
              Due Date
            </label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition disabled:opacity-50"
          >
            {loading ? "Saving..." : isEdit ? "Save Changes" : "Add Habit"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddHabitForm;
