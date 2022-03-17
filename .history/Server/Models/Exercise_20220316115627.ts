import { Document, Model, model, Types, Schema, Query } from "mongoose";

// Define Exercise Interface Document
export interface IExercise 
{
    name: string,
    exerciseType: string,
    muscles: Types.Array<string>,
    force: string,
    equipment: string,
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
    muscles: {
        type: [String],
    },
    force: {
        type: String,
    },
    equipment: {
        type: String,
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