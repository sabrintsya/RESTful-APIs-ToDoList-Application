const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./routes/TodoRoute');
const userRoutes = require('./routes/UserRoute');
const authRoutes = require('./routes/AuthRoute');

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json()); // Middleware to parse JSON request bodies


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.use(routes);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
