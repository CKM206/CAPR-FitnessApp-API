/**
 * Author:      Calvin May
 * 
 * Date:        03/05/2022
 * Purpose:     Built as apart of my CAPR Fitness App
 * Document:    app.ts/js
 * Description: This file is responsible for App configuration, this files connectes various
 *              parts of the rest of th project to ensure that the API works as intended.
 */

// Import Modules
import express from 'express';          // Express!
import createError from 'http-errors';  // Error Handling
import path from 'path';                // Project Pathing
import logger from 'morgan';            // Logging
import mongoose from 'mongoose';        // DB functionality


