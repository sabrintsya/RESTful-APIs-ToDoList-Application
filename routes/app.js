const express = require('express');
const router = express.Router(); // Deklarasi route

const authRoute = require("./AuthRoute");
const todoRoute = require("./TodoRoute");

// Penggunaan route
router.use("/auth", authRoute);
router.use("/todos", todoRoute);

module.exports = router;