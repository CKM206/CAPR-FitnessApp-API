/**
 *  Author:   Calvin May
 *  
 *  Date:     03/05/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: index.ts/js   (Routes)
 *  Description: This File assists in general routing of requests and responses for the API. It
 *              receives the requests, and then calls the appropriate function from a Controller
 *              for processing; it simply handles the routes and calls the necessary methods from
 *              the Controller.
 */

/**
 * Initial Router/Express Configuration
 */
 import express from 'express';
 const router = express.Router();
 export default router;

 import { GetExercises, GetExercise, NewExercise, DeleteExercise, UpdateExercise } from '../Controllers/exercise';

 /**
  * GET Requests
  */

 router.get('/', GetExercises);        // Get all Exercises
 router.get('/:exerciseId', GetExercise);   // Get A single Exercise

  /**
  * POST Requests
  */

 router.post('/', NewExercise);        // Create a single Exercise

  /**
  * UPDATE Requests
  */

 router.put('/:id', UpdateExercise);                 // Update a single Exercise
 
 
  /**
  * DELETE Requests
  */
   router.delete('/:exerciseId', DeleteExercise);            // Delete a single Exercise