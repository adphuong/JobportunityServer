const mongoose = require("mongoose");
const config = require('config');


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOURL, {
	  useNewUrlParser: true,
	  useUnifiedTopology: true
	});

	mongoose.connection.on("connected", () => {
	  console.log("Connected to database!")
	});

	mongoose.connection.on("error", () => {
	  console.log("Error connecting to database!")
	  process.exit();
	});

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;