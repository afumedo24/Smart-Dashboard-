import { Request, Response } from 'express'
import User, { IUser } from "../modals/userModal";
import logger from '../../utils/logger';

// a controller function to return all users 
export const getAllUsers = async (req:Request, res:Response ): Promise<Response> => {
    try {
        const users = await User.find();    // find all users in db

        // log and send the users as a response
        logger.info('All users returned');
        return res.status(200).json(users);
    } catch (error: any) {
        logger.error('Error while handling the getAllUsers request: ', error.message);
        return res.status(500).json({message: "Internal Server Error"});;
    }
}

// a controller function to return a specific user 
export const getUser = async (req:Request, res:Response ): Promise<Response>  => {
    const { userID } = req.body;    // get the user id from the request body
    try {
        const user = await User.findById(userID);   // find the user by id
        
        // Check if the user exists
        if (!user) {
            logger.error(`User with ID ${userID} not found`);
            return res.status(404).json({ msg: 'User not found'});
        }

        // log and send the user as a response
        logger.info(`User with ${userID} found`);
        return res.status(200).json(user);
    } catch (error: any) {
        logger.error("Error while handling the getUser Request: " + error.message);
        return res.status(500).json({message: "Internal Server Error"});;
    }
}

// a controller function to delete a specific user
export const deleteUser = async (req:Request, res:Response ): Promise<Response>  => {
    const { userID } = req.body;    // get the user id from the request body
    try {
        const deletedUser = await User.findByIdAndDelete(userID) // find the user by id and delete
        // Check if the user exists
        if (!deletedUser) {
            logger.error(`Cannot delete user - User with ID ${userID} not found`);
            return res.status(404).json({ message: "Cannot delete User - User not found" });
        }

        logger.info(`User with ID ${userID} deleted`);
        return res.status(200).json(deletedUser);
    } catch (error: any) {
        logger.error('Error deleting user: ', error.message);
        return res.status(500).json({message: "Internal Server Error"});
    }
}

// a controller function to update a specific user
export const updateUser = async (req:Request, res:Response ): Promise<Response>  => {
    // get the user id, username, email and password from the request body
    const { userID, username, email } = req.body; 
    
    // create a new object with the updated values
    // needs to be a partial object because we are only updating some fields
    const newValue:Partial <IUser> = {
        username: username,
        email: email
    }
    try {
        // find the user by id and update with the new values
        const updatedUser = await User.findByIdAndUpdate(userID, newValue);
        // Check if the user exists
        if (!updatedUser) {
            logger.error(`Cannot update user - User with ID ${userID} not found`);
            return res.status(404).json({ message: "Cannot update User - User not found" });
        }

        // log and send the updated user as a response
        logger.info(`User with ID ${userID} updated`);
        return res.status(200).json(updatedUser);
    } catch (error: any) {
        logger.error('Error updating user:', error.message);
        return res.status(500).json({message: "Internal Server Error"});
    }
}
