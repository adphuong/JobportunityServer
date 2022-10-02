const express = require('express');
const connectDB = require('./config/db');
const User = require("./models/User");
const Job = require("./models/Job");
const bodyParser = require('body-parser');
var cors = require('cors');


const app = express();

// routes
const jobs = require('./routes/api/jobs');
const users = require('./routes/auth');


// Init Middleware
app.use(express.json());
app.use(express.json({ extended: false }));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

// cors
app.use(cors({ origin: true, credentials: true }));

// Connect Mongo database
connectDB();

app.use('/api/users', users);
app.use('/api/jobs', jobs);

const PORT = 2300;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT + "; press Ctrl-C to terminate.")
});
