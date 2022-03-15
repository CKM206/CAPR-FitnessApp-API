import { Document, Model, model, Types, Schema, Query } from "mongoose";
import Exercise  from './Exercise';
import User from './User';

export interface IWorkoutExercise {
    startTime: Date,
    endTime: Date,
    exercise: Types.ObjectId
    sets: Array<Object>


}


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
        type: Date,
    },
    note: {
        type: Date
    },
    exercises: [WorkoutExercise],
});

const Workout = model<IWorkout>('Workout', WorkoutSchema);
export default Workout;