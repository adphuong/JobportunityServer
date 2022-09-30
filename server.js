const express = require('express');
const connectDB = require('./config/db');
const User = require("./models/User");
const Job = require("./models/Job");
var cors = require('cors');

const app = express();
const PORT = 2300;


// routes
const jobs = require('./routes/api/jobs')

// COnnect database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.use(require('./routes/auth'));
app.use('/api', require('./routes/api/jobs'));

// app.get('/', (req, res) => {
//   res.send("hello world")
// });

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT + "; press Ctrl-C to terminate.")
});
