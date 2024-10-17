const {Router} = require("express");
const { getTodo, saveTodo } = require("../controllers/TodoController");
const router = Router()

router.get('/', getTodo)
router.post('/save', saveTodo)

module.exports = router;