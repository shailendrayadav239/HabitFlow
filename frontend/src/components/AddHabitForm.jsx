function AddHabitForm({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-full max-w-md shadow-2xl border border-gray-200 dark:border-gray-800">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-gray-900 dark:text-white text-xl font-bold">
            Add New Habit
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-white text-2xl leading-none transition"
          >
            ✕
          </button>
        </div>

        {/* Habit Name */}
        <div className="mb-4">
          <label className="text-gray-600 dark:text-gray-400 text-sm mb-1 block font-medium">
            Habit Name
          </label>
          <input
            type="text"
            placeholder="e.g. Morning Run"
            className="w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          />
        </div>

        {/* Frequency */}
        <div className="mb-6">
          <label className="text-gray-600 dark:text-gray-400 text-sm mb-1 block font-medium">
            Frequency
          </label>
          <select className="w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            Cancel
          </button>
          <button className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition">
            Add Habit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddHabitForm;
cd