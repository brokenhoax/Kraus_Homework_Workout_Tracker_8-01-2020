const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const WorkoutSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is Required"
  }, 

  type: {
    type: Array,
    trim: true, 
    requried: "Type is Required"
  },
  
  weight: {
    type: Number, 
    trim: true,
  },

  sets: {
    type: Number, 
    trim: true, 
  },

  reps: {
    type: Number, 
    trim: true,
  },

  duration: {
    type: Number,
    trim: true,
  },

  distance: {
    type: Number,
    trim: true,
  },

});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;