import { Request, Response } from 'express'
import User, { IUser } from "../modals/userModal";
import logger from '../../utils/logger';

// a function to return all users 
export const getAllUsers = async (req:Request, res:Response ) => {
    try {
        const users = await User.find();    // find all users in db
        logger.info('All users returned');
        return res.status(200).json(users);
    } catch (error) {
        logger.error("Error while handling the getAllUsers Request" + error);
        res.status(500).json({message: "Internal Server Error"});;
    }
}

// a function to return a specific user 
export const getUser = async (req:Request, res:Response ) => {
    const { userID } = req.body;    // get the user id from the request body
    try {
        const user = await User.findById({ _id: userID });   // find the user by id
        
        // Check if the user exists
        if (!user) {
            logger.error('User not found');
            return res.status(404).json({ msg: 'User not found'});
        }

        logger.info(`User with ${userID} found`);
        return res.status(200).json(user);
    } catch (error) {
        logger.error("Error while handling the getUser Request" + error);
        res.status(500).json({message: "Internal Server Error"});;
    }
}

// a function to delete a specific user
export const deleteUser = async (req:Request, res:Response ) => {
    const { userID } = req.body;    // get the user id from the request body
    try {
        const deletedUser = await User.findByIdAndDelete(userID) // find the user by id and delete
        // Check if the user exists
        if (!deletedUser) {
            logger.error('Cannot delete User - User not found');
            return res.status(404).json({ message: "Cannot delete User - User not found" });
        }

        logger.info(`User ${userID} deleted`);
        return res.status(200).json(deletedUser);
    } catch (error) {
        logger.error('Error deleting user:', error);
        res.status(500).json({message: "Internal Server Error"});
    }
}

// a function to update a specific user
export const updateUser = async (req:Request, res:Response ) => {
    const { userID, username, email } = req.body; // get the user id, username, email and password from the request body
    
    // create a new object with the updated values
    // needs to be a partial object because we are only updating some fields
    const newValue:Partial <IUser> = {
        username: username,
        email: email
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(userID, newValue); // find the user by id and update with the new values
        // Check if the user exists
        if (!updatedUser) {
            logger.error('Cannot update User - User not found');
            return res.status(404).json({ message: "Cannot update User - User not found" });
        }

        logger.info(`User ${userID} updated`);
        return res.status(200).json(updatedUser);
    } catch (error) {
        logger.error('Error updating user:', error);
        res.status(500).json({message: "Internal Server Error"});
    }
}
