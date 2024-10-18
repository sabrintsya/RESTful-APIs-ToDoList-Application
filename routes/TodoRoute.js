const { Router } = require("express");
const { getTodo, saveTodo, updateTodo, deleteTodo } = require("../controllers/TodoController");
const router = Router();

router.get('/', getTodo); // This will handle GET requests at the root of this route
router.post('/save', saveTodo); // This will handle POST requests to /save
router.post('/update', updateTodo); // This will handle POST requests to /update
router.post('/delete', deleteTodo);// This will handle POST requests to /delete

module.exports = router;