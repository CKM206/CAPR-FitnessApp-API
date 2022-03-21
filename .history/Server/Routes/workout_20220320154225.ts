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

 import { GetWorkouts } from '../Controllers/workout';

  /**
  * GET Requests
  */

   router.get('/', GetWorkouts);        // Get all Exercises