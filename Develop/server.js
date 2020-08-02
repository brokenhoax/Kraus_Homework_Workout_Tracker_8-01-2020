const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const Workout = require("./models/workoutModel");
const router = require("express").Router();

// const routes = require("./controller/api");

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

// get routes
// routes.API(app);

// test route

app.post("/test", ({ body }, res) => {
  res.json({
    confirmation: "success",
    data: "this is the test endpoint!",
  });
});

router.get("/try", ({ body }, res) => {

  Workout.find()
  .then(workouts => {
    res.json({
      confirmation: "success",
      data: workouts
    })
  })
  .catch(err => {
    res.json({
      confirmation: "fail",
      message: err.message
    })
  })
});