const express = require("express");
const {
  createTask,
  getAllTasks,
  updateTask,
  completeTask,
  deleteTask,
} = require("../controllers/taskController");
const { body } = require("express-validator");

const router = express.Router();

// Validation rules for task creation
router.post(
  "/",
  [body("title").notEmpty().withMessage("Title is required")],
  createTask
);

// Get all tasks
router.get("/", getAllTasks);

// Update task
router.put("/:id", updateTask);

// Complete task
router.patch("/complete/:id", completeTask);

// Delete task
router.delete("/:id", deleteTask);

module.exports = router;
