const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    frequency: {
      type: String,
      enum: ["Daily", "Weekly"],
      default: "Daily",
    },
    completions: [
      {
        type: Date,
      },
    ],
    userId: {
      type: String,
      required: true,
      default: "temp",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Habit", habitSchema);
