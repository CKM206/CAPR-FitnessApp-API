import { Document, Model, model, Types, Schema, Query } from "mongoose";
import Exercise  from './Exercise';
import User from './User';

// Create Interface for WorkoutSets
export interface IWorkoutSet {
    reps: number,
    weight: number,
    duration: object,
    distance: number,
    restTime: number
};


// Create Interface for WorkoutExercises
export interface IWorkoutExercise {
    startTime: Date,
    endTime: Date,
    exercise: Types.ObjectId,
    sets: Types.Array<IWorkoutSet>,
    restTime: number
};

// Create Interface for Workouts
export interface IWorkout {
    title: string,
    note: string
    timeStarted: string,
    timeFinished: string,
    exercises: Types.Array<IWorkoutExercise>,
    userId : Types.ObjectId
};

// Workout Sets Schema for MongoDB
const WorkoutSet: Schema<IWorkoutSet> = new Schema
({
    reps: {
        type: Number
    },
    weight: {
        type: Number
    },
    duration: {
        hours:{
            type: Number
        },
        minutes: {
            type: Number
        },
        seconds: {
            type: Number
        }
    },
    distance: {
        type: Number
    },
    restTime: {
        type: Number
    }
})

// Workout Exercise Schema for MongoDB 
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
    sets: [WorkoutSet],
    restTime: Number
});

// Workout Schema for MongoDB 
const WorkoutSchema: Schema<IWorkout> = new Schema
({
    title: {
        type: String,
        required: true,
    },
    note: {
        type: String
    },
    timeStarted: {
        type: String
    },
    timeFinished: {
        type: String
    },
    exercises: [WorkoutExercise],
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

// Create and Export the Workout Model
const Workout = model<IWorkout>('Workout', WorkoutSchema);
export default Workout;