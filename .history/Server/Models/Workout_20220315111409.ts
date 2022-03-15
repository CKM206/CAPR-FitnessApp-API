import { Document, Model, model, Types, Schema, Query } from "mongoose";

interface IWorkout {
    name: string,
    note: string
    timeStarted: object,
    timeFinished: object,
    Exercises: Types.Array<string>,
}