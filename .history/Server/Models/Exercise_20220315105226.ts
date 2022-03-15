import { Document, Model, model, Types, Schema, Query } from "mongoose"

// Define Exercise Interface Document
interface IExerciseDocument extends Document {
    name: string,
    exerciseType: string,
    classification: string,
    primaryMuscleGroup: string,
    force: string,
    equipment: string,
    setType: string,
    default: boolean,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
};

export const ExerciseSchema: Schema = new Schema
({
    name: {
        type: String,
    },
    exerciseType: {
        type: String,
    },
    classification: {
        type: String,
    },
    primaryMuscleGroup: {
        type: String,
    },
    force: {
        type: String,
    },
    equipment: {
        type: String,
    },
    setType: {
        type: String,
    },

});