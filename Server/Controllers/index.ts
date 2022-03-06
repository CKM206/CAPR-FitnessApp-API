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


/**
 * Processing Functions
 */
//- Process Home Request
export function ProcessHome(req:Request, res:Response, next:NextFunction): void
{
    res.send('You are at the Home Route!');
}

