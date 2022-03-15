import { Document, Model, model, Types, Schema, Query } from "mongoose";
import Exercise  from './Exercise';

export interface IWorkoutExercise {
    startTime: Date,
    endTime: Date,
    exercise: Types.ObjectId
    sets: Types.Array<Object>


}


export interface IWorkout {
    name: string,
    note: string
    timeStarted: object,
    timeFinished: object,
    Exercises: Types.Array<string>,
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

});

const Workout = model<IWorkout>('Workout', WorkoutSchema);
export default Workout;