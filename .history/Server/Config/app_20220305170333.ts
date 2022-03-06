/**
 * Author:      Calvin May
 * 
 * Date:        03/05/2022
 * Purpose:     Built as apart of my CAPR Fitness App
 * Document:    app.ts/js
 * Description: This file is responsible for App configuration, this files connectes various
 *              parts of the rest of th project to ensure that the API works as intended.
 */
// Import Express
import express from 'express';          // Express!

// Import Modules | 3rd Party
import createError from 'http-errors';  // Error Handling
import path from 'path';                // Project Pathing
import logger from 'morgan';            // Logging
import mongoose from 'mongoose';        // DB functionality
import jwt from 'jsonwebtoken';

// Routing Imports
import indexRouter from '../Routes/index';


// App Configuration & Routing
const app = express();
export default app;

// Database Configuration
import * as DBConfig from './db';
mongoose.connect(RemoteURI)

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connect Error:'));
db.once('open', function() {
    console.log(`Connected to MongoDB at: ${DBConfig.Host}`);
});

