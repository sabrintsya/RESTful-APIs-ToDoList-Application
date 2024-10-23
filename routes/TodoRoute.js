const express = require("express");
const { validateToken, checkRole } = require("../middleware/AuthMiddleware");
const { getAllTodo, getTodoById, addTodo, editTodoById, deleteTodoById, deleteAllTodo } = require("../controllers/TodoController")

const router = express.Router();

router.get("/", getAllTodo);
router.get("/:id", getTodoById);
router.post("/", validateToken, addTodo);
router.put("/:id", validateToken, editTodoById);
router.delete("/:id", validateToken, checkRole, deleteTodoById);
router.delete("/", validateToken, checkRole, deleteAllTodo);

module.exports = router;