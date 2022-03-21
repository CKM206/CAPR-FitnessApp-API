/**
 *  Author:      Calvin May
 * 
 *  Date:        03/05/2022
 *  Purpose:     Built as apart of my CAPR Fitness App
 *  Document:    app.ts/js
 *  Description: This file is responsible for App configuration, this files connectes various
 *              parts of the rest of th project to ensure that the API works as intended.
 */
// Require Models
 require('../Models/User');
require('../Models/Exercise');
require('../Models/Workout');

// Import Express
import express from 'express';          // Express!

// Import Modules | 3rd Party
//import createError from 'http-errors';  // Error Handling
import path from 'path';                // Project Pathing
import logger from 'morgan';            // Logging
import mongoose from 'mongoose';        // DB functionality
import jwt from 'jsonwebtoken';
const requireAuth = require('../middlewares/requireAuth');

// Routing Imports
import indexRouter from '../Routes/index';  // Import the Index Router
import authRouter from '../Routes/auth';
import exerciseRouter from '../Routes/exercise';
import workoutRouter from '../Routes/workout';

// App Configuration
const app = express();
app.set('views', path.join(__dirname, '../Views/'));  // Views is accessible from the 'views' path
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
export default app;

//-Fix Pathing to Client and Node Modules (Not really needed atm)
app.use(express.static(path.join(__dirname, '../../Client/')));
app.use(express.static(path.join(__dirname, '../../node_modules/')));

// Database Configuration
import * as DBConfig from './db';
mongoose.connect(DBConfig.RemoteURI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connect Error:'));
db.once('open', function() {
    console.log(`Connected to MongoDB at: ${DBConfig.Host}`);
});

// Routing Configuration
app.use(authRouter);
app.use('/', requireAuth, indexRouter);
app.use('/exercises', exerciseRouter);
app.use('/workouts', workoutRouter);

