import { Document, Model, model, Types, Schema, Query } from "mongoose";
import Exercise  from './Exercise';
import User from './User';

// Create Interface for WorkoutExercises
export interface IWorkoutExercise {
    startTime: Date,
    endTime: Date,
    exercise: Types.ObjectId
    sets: Array<Object>
}

// Create Interface for Workouts
export interface IWorkout {
    name: string,
    note: string
    timeStarted: object,
    timeFinished: object,
    exercises: Array<string>,
    userId : Types.ObjectId
}

const WorkoutExercise: Schema<IWorkoutExercise> = new Schema
({
    startTime: {
        type: Date,
    },
    endTime: {
        type: Date
    },
    exercise: {
        type: Schema.Types.ObjectId,
        ref: 'Exercise',
        required: true,
    },
    sets: [{
        reps: Number,
        weight: Number,
        restTime: Number
    }]
});

const WorkoutSchema: Schema<IWorkout> = new Schema
({
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
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Workout = model<IWorkout>('Workout', WorkoutSchema);
export default Workout;