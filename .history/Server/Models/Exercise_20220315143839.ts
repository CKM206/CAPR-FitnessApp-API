import { Document, Model, model, Types, Schema, Query } from "mongoose";

// Define Exercise Interface Document
export interface IExercise 
{
    name: string,
    exerciseType: string,
    classification: string,
    primaryMuscleGroup: string,
    force: string,
    equipment: string,
    setType: string,
    isDefault: boolean,
    userId: Types.ObjectId,
};

export interface IExerciseModel extends Model<IExercise> 
{

}

const ExerciseSchema: Schema<IExercise> = new Schema
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
    isDefault: {
        type: Boolean,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },

});

// Create the Exercise Model
const Exercise = model<IExercise, IExerciseModel>('Exercise', ExerciseSchema);
export default Exercise;