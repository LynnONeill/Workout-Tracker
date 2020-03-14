const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    exercises: [
        {
            type: {
                type: String,
            },
            name: {
                type: String,
                trim: true,
            },
            duration: {
                type: Number,
            },
            distance: {
                type: Number
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            }
        }],
    day: {
        type: Date,
        default: new Date()
    },
});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;