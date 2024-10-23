const express = require("express");
const mongoose = require("mongoose");
const allRoutes = require("./routes/app");
const app = express();
const PORT = process.env.PORT || 3001;

mongoose
.connect(process.env.MONGODB_URL)
.then(()=> console.log(`connected to MongooDB... `))
.catch((err) => console.log(err))

app.listen(PORT, () => {
  console.log("server running on PORT " + 3001);
});

app.use(express.json());
app.use(allRoutes);


