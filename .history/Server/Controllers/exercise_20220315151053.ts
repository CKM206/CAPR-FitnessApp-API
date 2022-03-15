/**
 *  Author:   Calvin May
 *  
 *  Date:     03/05/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: index.ts/js   (Controllers)
 *  Description: This File assists in general routing of requests and responses for the API. It
 *              handles all processing logic when routing to specific urls. The index.ts (Routes),
 *              receives an incoming request, and then calls the corresponding method here for 
 *              processing.
 */

/**
 * Initial Controller/Express Configuration
 */
 import { Request, Response, NextFunction } from 'express';

 // Imports | 3rd Party
 import Exercise from '../Models/Exercise';
 
 /**
  * Processing Functions
  */
 //- Process Home Request
 export async function GetExercises(req:Request, res:Response, next:NextFunction): Promise<Response>
 {

    try {
        const exercises = await Exercise.find();

        return res.send(exercises);
    }
    catch (err) {
        return res.status(422).send(err.message);
    }
 };

 export async function GetExercise(req: Request, res:Response, next:NextFunction): Promise<Response>
 {
    try {

        const exercise = await Exercise.findById(req.params.id); //await Exercise.findById(req.params.id);

        if (!exercise)
        {
            return res.status(404).send({ error: 'Couldn\'t find an Exercise with that Id' });
        }

        return res.send(exercise);
    }
    catch (err) {
        return res.status(422).send(err.message);
    }
 };
 

 export async function NewExercise(req:Request, res:Response, next:NextFunction): Promise<Response>
 {
     //console.log(req.body);
     const { name, exerciseType, setType, isDefault } = req.body;
    
     try {
        // Check if all Required Properties
        if (!name || !exerciseType || !setType || !req.body.hasOwnProperty('isDefault') || isDefault === null)
        {
            return res.status(422).send({ error: 'Import Exercise Properties Missing!' });
        }     

        const newExercise = new Exercise(req.body);

        await newExercise.save();
        res.send(newExercise);
        
    }
    catch (err) {
        return res.status(422).send(err.message);
    }
 };

 export async function UpdateExercise(req: Request, res:Response, next:NextFunction): Promise<Response>
 {
    const { name, exerciseType, setType, isDefault } = req.body;

    try {
        const exercise = await Exercise.findById(req.params.id); //await Exercise.findById(req.params.id);
        
        if (!exercise)
        {
            return res.status(404).send({ error: 'Couldn\'t find an Exercise with that Id' });
        }

        // Check if all Required Properties
        if (!name || !exerciseType || !setType || !req.body.hasOwnProperty('isDefault') || isDefault === null)
        {
            return res.status(422).send({ error: 'Import Exercise Properties Missing!' });
        }  
           
        const newExercise = new Exercise(req.body);

        console.log(newExercise);
        return res.send('Got Here');

        await Exercise.findByIdAndUpdate(req.params.id, newExercise);
    }
    catch (err) {
        return res.status(422).send(err.message);
    }
 };



 export async function DeleteExercise(req: Request, res:Response, next:NextFunction): Promise<Response>
 {
    try {

        const exercise = await Exercise.findById(req.params.id);

        console.log(exercise.id);
        
        if (!exercise)
        {
            return res.status(404).send({ error: 'Couldn\'t find an Exercise with that Id' });
        }
        
        await Exercise.findByIdAndDelete(exercise.id);


        return res.send(exercise);
    }
    catch (err) {
        return res.status(422).send(err.message);
    }

     return res.send('Made it to the Delete Exercise Method');
 };
 
 
 