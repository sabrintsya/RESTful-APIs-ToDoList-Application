const express = require("express");
const mongoose = require("mongoose");


const app = express();

const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL;
console.log(MONGODB_URL);
const db = mongoose.connect(MONGODB_URL);

const allRoutes = require("./routes/app");

db.then(() => {
  console.log("berhasil connect ke server");
}).catch(() => {
  console.log("gagal connect ke server");
});
require('dotenv').config();


app.use(express.json());
app.use(allRoutes);

app.listen(PORT, () => {
  console.log("server running on PORT " + 3000);
});

module.exports = db;