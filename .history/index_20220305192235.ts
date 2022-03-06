#!/usr/bin/env node

/**
 *  * Author:   Tom Zielinski,
 *  *           Calvin May
 *  
 *    Date:     04/16/2021
 *    Purpose:  Built as apart of a Demo WebSite for Lab 4 of WEBD-6201 W2021
 *    Document: index.ts
 *    Description: This file configures the server that the Fitness App will run
 *                on.
 */

 import app from './Server/Config/app';
 import createError from 'http-errors';
 import http from 'http';
 import debug from 'debug';

 debug('fitness-app-server');

 /**
 * Get port from environment and store in Express.
 */
let port = normalizePort(process.env.PORT || process.env.LOCAL_PORT);
app.set('port', port);

/**
 * Listen on provided port
 */
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});



/**
 * Normalize a port into a number, string, or false.
 */

 function normalizePort(val: string): number | string | boolean
 {
   let port = parseInt(val, 10);
 
   if (isNaN(port)) {
     // named pipe
     return val;
   }
 
   if (port >= 0) {
     // port number
     return port;
   }
 
   return false;
 }