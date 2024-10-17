const { Router } = require("express");
const { getTodo, saveTodo } = require("../controllers/TodoController");
const router = Router();

router.get('/', getTodo); // This will handle GET requests at the root of this route
router.post('/save', saveTodo); // This will handle POST requests to /save

module.exports = router;