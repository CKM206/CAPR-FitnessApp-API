import { Document, Model, model, Types, Schema, Query } from "mongoose"
const bcrypt = require('bcrypt');   // Import bcrypt so we can hash/salt user passwords

// User Document Interface
interface IUserDocument extends Document {
    email: String,
    password: String
}

export interface IUser extends IUserDocument {
    comparePassword(password: String): void;
}


// Setup a User Schema to match the objects within the mongoDB Users Collection
export const UserSchema: Schema = new Schema
({
    // Attributes of a user
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});



// Use a named function here because we want 'this' to refer to a user instance and not the User class
UserSchema.pre('save', function(next: any) {
    // Asssign the user instance
    const user = this;
    
    // Check to see if the user has modified their password
    if (!user.isModified('password')) {
        // if not just return, dont need to continue
        return next();
    }
    // Otherwise
    // Generate the salt for the hash
    bcrypt.genSalt(10, (err: any, salt: any) => {
        // Check for an error
        if (err) {
            return next(err);
        }
        // otherwise
        // Generate the hash using the password with the salt
        bcrypt.hash(user.password, salt, (err: any, hash: any) => {
            // Check for an error
            if (err) {
                return next(err);
            }
            // Otherwise
            // Set the password to the hash and call next
            user.password = hash;
            next(); // Continues the Saving process
        });
    });
});


// Automate Password Checking Process (This is a function we can use to compare provided passwords)
UserSchema.method('comparePassword', function (candidatePassword: String): <Promise> {
    // Get reference to the user
    const user = this;
    
    // Create a promise so we can using async/await when comparing passwords
    //-callback functions: Resolve indicates success, reject indicates failure
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, user.password, (err: any, isMatch: any) => {
            // If there was an error return reject() with the error
            if (err) {
                return reject(err);
            }
            // otherwise...
            // Check if there was not a match return reject() with false
            if (!isMatch) {
                return reject(false);
            }
            // Otherwise...
            // We found a match, resolve!
            resolve(true);
        });
    });
});

// Create the User Model
export default model<UserDocument, UserModel>('User', UserSchema);