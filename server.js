const express = require('express');
const connectDB = require('./config/db');
const User = require("./models/User");

const app = express();
const PORT = 2300;

// COnnect database
connectDB();

app.use(express.json());
app.use(require('./routes/auth'));
app.use(require('./routes/api/jobs'));

// app.get('/', (req, res) => {
//   res.send("hello world")
// });

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT + "; press Ctrl-C to terminate.")
});
