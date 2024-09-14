const Task = require("../models/Task");

// Create a new task
exports.createTask = async (req, res) => {
  const { title, description, dueDate, category } = req.body;
  try {
    const newTask = new Task({ title, description, dueDate, category });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update task details
exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, dueDate, category } = req.body;
  try {
    const task = await Task.findByIdAndUpdate(
      id,
      { title, description, dueDate, category },
      { new: true }
    );
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Mark task as completed
exports.completeTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (task.completed)
      return res.status(400).json({ message: "Task already completed" });
    task.completed = true;
    await task.save();
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete task
exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Task.findByIdAndDelete(id);
    if (result) {
      res.status(204).json({ message: "Task deleted" });
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
