const express = require('express')
const app = express()
const PORT = 2300
const mongoose = require("mongoose")
const {MONGOURL} = require("./keys")

require("./models/user")

app.use(express.json())
app.use(require('./routes/auth'))


mongoose.connect(MONGOURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDb")
})

mongoose.connection.on("error", () => {
  console.log("Error connecting to MongoDb!")
})

app.get('/', (req, res) => {
  res.send("hello world")
})

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT + "; press Ctrl-C to terminate.")
})
