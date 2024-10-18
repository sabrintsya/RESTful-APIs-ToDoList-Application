const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./routes/TodoRoute');

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

// API routes
app.use(routes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
