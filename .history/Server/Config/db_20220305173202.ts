/**
 *  * Author:   Tom Zielinski,
 *  *           Calvin May
 *  
 *    Date:     04/16/2021
 *    Purpose:  Built as apart of a Demo WebSite for Lab 4 of WEBD-6201 W2021
 *    Document: db.ts
 *    Description: This File is responsible for setting up the connection with the 
 *                database.
 */

/**
 * Database Connection strings, Secret, and Host
 */

 export const RemoteURI = process.env.DB_URI;
 export const Secret = process.env.SECRET;
 
 export const Host = "MongoDB Atlas";
 
 /* module.exports = {
     Path: mongoDBPath,
     Secret: sessionSecret
 }  */