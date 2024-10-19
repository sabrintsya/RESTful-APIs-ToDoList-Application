const { Router } = require("express");
const { validateToken, checkRole } = require("../middleware/AuthMiddleware");

const { getTodo, saveTodo, updateTodo, deleteTodo,deleteAllTodo, getAllTodo, createTodo} = require("../controllers/TodoController");
const { login, register } = require("../controllers/AuthController");

const router = Router();

router.get('/', getTodo); // This will handle GET requests at the root of this route
router.get('/', getAllTodo);
router.post("/regis", register);
router.post("/login", login);
router.post('/createTodo', validateToken, createTodo);
router.post('/save', validateToken , saveTodo); // This will handle POST requests to /save
router.post('/update', validateToken, updateTodo); // This will handle POST requests to /update
router.delete('/', validateToken, checkRole, deleteAllTodo);
router.delete('/:id', validateToken, checkRole, deleteTodo);// This will handle POST requests to /delete

module.exports = router;