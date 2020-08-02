const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const router = require("express").Router();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

// Import Routes
const api = require('./routes/api')

// Set Routes
app.use('/api', api)


module.exports = app;