"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
;
const WorkoutExercise = new mongoose_1.Schema({
    startTime: {
        type: Date,
    },
    endTime: {
        type: Date
    },
    exercise: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Exercise',
        required: true,
    },
    sets: [{
            reps: Number,
            weight: Number,
            restTime: Number
        }]
});
const WorkoutSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    note: {
        type: String
    },
    timeStarted: {
        type: Date
    },
    timeFinished: {
        type: Date
    },
    exercises: [WorkoutExercise],
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
    },
});
const Workout = (0, mongoose_1.model)('Workout', WorkoutSchema);
exports.default = Workout;
//# sourceMappingURL=Workout.js.map