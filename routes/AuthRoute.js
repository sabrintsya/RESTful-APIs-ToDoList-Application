const express = require("express");
const { regis, login } = require("../controllers/AuthController");


const router = express.Router();

router.post("/regis", regis);
router.post("/login", login);

module.exports = router;