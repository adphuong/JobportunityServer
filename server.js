require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');


const app = express();

// routes
const jobs = require('./routes/api/jobs');
const users = require('./routes/api/users');


// Init Middleware
app.use(express.json());
app.use(express.json({ extended: false }));

// cors
app.use(cors({ origin: true, credentials: true }));

// Connect Mongo database
connectDB();

// Register routes
app.use('/api/users', users);
app.use('/api/jobs', jobs);

const PORT = 2300;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT + "; press Ctrl-C to terminate.")
});
