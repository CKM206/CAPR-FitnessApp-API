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
import Workout from '../Models/Workout';
import Exercise from '../Models/Exercise';

 
 // Imports | 3rd Party
 import jwt from 'jsonwebtoken';
 
 /**
  * Processing Functions
  */
 //- Process Home Request
 export async function GetWorkouts(req:Request, res:Response, next:NextFunction): Promise<Response>
 {

     //const userId = req.user.id;
     //console.log(userId);
    try {
        const workouts = await Workout.find();
        return res.send(workouts);
    }
    catch (err) {
        return res.status(422).send(err.message);
    }
 };

 export async function NewWorkout(req:Request, res:Response, next:NextFunction): Promise<Response>
 {
     //console.log(req.body);
     //console.log(req.body);
     
     const { workoutInformation, exercises } = req.body;
     const userId = req.user.id;
     //console.log(exercises[0].sets);
      try {
          await exercises.forEach((exercise: any) => {

            const { exerciseType } = Exercise.findById(exercise.exercise)
            console.log(exercise.exercise)
            //   switch(exerciseType) {
            //       case 'Strength':
            //         console.log(exerciseType)
            //           break;

            //       case 'Timed':
            //         console.log(exerciseType)
            //           break;

            //       case 'Cardio':
            //         console.log(exerciseType)
            //           break;   

            //       default:
            //           break;           
            //   }
              

          });
          
            //  // Check if all Required Properties
            //  if (!name || !exerciseType || !muscles || !force || !equipment)
            //  {
            //          return res.status(422).send({ error: 'Important Exercise Properties Missing!' });
            //      }     
             
            //      const newExercise = new Exercise({name, exerciseType, muscles, force, equipment, isDefault, userId: userId});
             
            //      console.log(newExercise);
             
            //      await newExercise.save();
                 res.send(req.body);

        
    }
    catch (err) {
        return res.status(422).send(err.message);
    }
 };