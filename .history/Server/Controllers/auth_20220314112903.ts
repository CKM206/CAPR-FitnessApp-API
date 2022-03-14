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
 import People from '../Models/User';

 // Imports | 3rd Party
 import mongoose from 'mongoose';
 import jwt from 'jsonwebtoken';
 //const User = mongoose.model('User');
 
 export async function ProcessSignUp(req:Request, res:Response, next:NextFunction)
 {
         //console.log(req.body);
         const { email, password} = req.body // Deconstruct the email and password send by the request
         // Use Try catch when working with databases
         try {
             const newUser = new People({email, password});   // Use the email and password to create a new User
             // Save the user to the database
             await newUser.save();    // This is asynchronous! must use async (in the function) and await
             
             const token = jwt.sign({ userId: newUser._id }, process.env.SECRET); // Secret key is hardcoded for now
             res.send({ token });
         }
         catch (err){
             return res.status(422).send(err.message);
         } 
 }
 
 export async function ProcessSignIn(req:Request, res:Response, next:NextFunction)
 {
    
         // Get the email and password from the request body
         const { email, password } = req.body;
 
         // Check if an email and password was provided
         if (!email || !password) {
             return res.status(422).send({ error: 'Must provide an email and password' });
         }
 
         // Await a response from the database, ensure that the function now uses async
         const user = await People.findOne({ email });
 
         // Check for no user found
         if (!user) {
             return res.status(404).send({ error: 'Invalid password or email' });
         }
 
         try {
             console.log('Got Here!');
         await user.comparePassword(password);
             const token = jwt.sign({ userId: user._id }, process.env.SECRET);
             return res.send({ token });
         }
         catch (err) {
             return res.status(422).send({ error: 'Invalid password or email' });
         }
     
 }
 
 