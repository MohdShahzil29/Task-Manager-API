const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Task title is required"],
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  dueDate: {
    type: Date,
  },
  category: {
    type: String,
    enum: ["work", "personal", "school"],
    default: "work",
  },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
