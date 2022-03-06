/**
 *  Author:   Calvin May
 *  
 *  Date:     03/05/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: db.ts/js
 *  Description: This File assists in setting up the connection to the Fitness App Database.
 *               It makes use of environment variables to ensure seamless connection regardless
 *               of local/remote use.
 */

import 'dotenv/config';

/**
 * Database Connection strings, Secret, and Host
 */

 export const RemoteURI = process.env.DB_URI;   // Use .env variable
 export const Secret = process.env.SECRET;      // Use .env variable
 export const Host = "MongoDB Atlas";
