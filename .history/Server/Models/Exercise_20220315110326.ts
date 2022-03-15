import { Document, Model, model, Types, Schema, Query } from "mongoose";

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
    userId: Types.ObjectId,
};

export const ExerciseSchema: Schema<IExerciseDocument> = new Schema
({
    name: {
        type: String,
        required: true
    },
    exerciseType: {
        type: String,
        required: true
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
        required: true
    },
    default: {
        type: Boolean,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },

});

// Create the Exercise Model
const Exercise = model<IExerciseDocument>('Exercise', ExerciseSchema);
export default Exercise;