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
 
 /**   
  * Here we import all the necessary methods from our index Controller
  */
 import { ProcessHome } from '../Controllers/auth';
 
 /** 
  * Get Requests - Recieving information from the database
  */
 //- Process the Home Request (Default route);
 router.get('/', ProcessHome);
 
 /**
  * Post Requests - Creating new data in the database
  */
 
 
 /**
  * PUT Requests - Updating existing data within the database
  */