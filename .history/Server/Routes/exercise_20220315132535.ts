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

 router.get('/exercises', GetExercises);
 router.get('/exercises/{id}', GetExercises);

  /**
  * POST Requests
  */

 router.post('/exercises', NewExercise);

  /**
  * UPDATE Requests
  */

 router.put('/exercises/{id}');
 
 
  /**
  * Get Requests
  */
   router.delete('/exercises/{id}');