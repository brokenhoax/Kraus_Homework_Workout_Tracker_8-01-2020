// Require Mongoose and create your Schema!
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a schema that matches the seeder values. 
const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter an exercise type"
        },
        name: {
          type: String,
          trim: true,
          required: "Enter an exercise name"
        },
        duration: {
          type: Number,
          required: "Enter an exercise duration in minutes"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

// Use Virtuals: https://mongoosejs.com/docs/guide.html
workoutSchema.virtual("totalDuration").get(function() {
  //Reduce => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  return this.exercises.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;