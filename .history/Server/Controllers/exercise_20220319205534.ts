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
 import jwt from 'jsonwebtoken';

 // Imports | 3rd Party
import Exercise from '../Models/Exercise';
 
 /**
  * Processing Functions
  */
 //- Process Home Request
 export async function GetExercises(req:Request, res:Response, next:NextFunction): Promise<Response>
 {

     const { userId } = req.user.id;

    console.log(user);

    try {
        const exercises = await Exercise.find({ $or: [{isDefault: true}, {userId: userId}]  });
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
     //console.log(req.body);
     const { name, exerciseType, muscles, force, equipment } = req.body;
     const user = req.user.id;
     const isDefault = false;
     //console.log(name);
     try {
        // Check if all Required Properties
        if (!name || !exerciseType || !muscles || !force || !equipment)
        {
            return res.status(422).send({ error: 'Important Exercise Properties Missing!' });
        }     

        const newExercise = new Exercise({name, exerciseType, muscles, force, equipment, isDefault, user});

        console.log(newExercise);

        //await newExercise.save();
        res.send(newExercise);
        
    }
    catch (err) {
        return res.status(422).send(err.message);
    }
 };

 export async function UpdateExercise(req: Request, res:Response, next:NextFunction): Promise<Response>
 {
    const { name, exerciseType, isDefault } = req.body;
    console.log("Hello");
    try {
        const exercise = await Exercise.findById(req.params.id); //await Exercise.findById(req.params.id);
        
        if (!exercise)
        {
            return res.status(404).send({ error: 'Couldn\'t find an Exercise with that Id' });
        }

        // Check if all Required Properties
        if (!name || !exerciseType || !req.body.hasOwnProperty('isDefault') || isDefault === null)
        {
            return res.status(422).send({ error: 'Import Exercise Properties Missing!' });
        }  
           
       
        const newExercise = await Exercise.findOneAndReplace({_id: req.params.id }, req.body, { returnDocument: 'after' });
        //Exercise.
        return res.send(newExercise);
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
 
 
 