const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
var cors = require('cors');
// const router = require("express").Router();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors())
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

// // Import Routes
// const api = require('./public/api')

// // Set Routes
// app.use('/api', api)

const db = require("./models");

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

module.exports = app; 