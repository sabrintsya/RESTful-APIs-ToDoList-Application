const {Router} = require("express");
const { getTodo } = require("../controllers/TodoController");
const router = Router()

router.get('/', getTodo)

module.exports = router;