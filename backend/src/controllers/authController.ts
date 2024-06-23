import { Request, Response } from 'express';
import User from "../modals/userModal";
import { hashPassword, signToken } from "../../utils/helpers";
import logger from '../../utils/logger';

// a function to register a new user
export const register = async (req: Request, res: Response) => {
    const { username, email, password } = req.body; // get the username, email and password from the request body
    try {
        // Check if for empty fields
        if (!email || !password || !username ) {
            logger.error("Missing fields");
            return res.status(400).json({message: "Missing fields"});
        }
        // Check if the user already exists
        const existingUser =  await User.findOne({email}) || await User.findOne({username});
        if (existingUser) {
            logger.error(`User already exists`);
            return res.status(400).json({message: "User already exists"});
        } 
        // Create a new user object and hash the 
        // password using the hashPassword Helper
        const newUser = new User({ 
            username,
            email,
            password: hashPassword(password)
        });
        // Save the new user
        const user = await newUser.save();
        logger.info(`User ${user.username} created`);
        return res.status(200).json(user);
    } catch (error) {
        logger.error(error);
        return res.sendStatus(400);
    }
}

// a function to login a user using a jwt token
export const login = async (req:Request, res:Response) => {
    const { username, password } = req.body; // get the username and password from the request body
    console.log("username", username);
    console.log("password", password);
    try {
        // Check if for empty fields
        if (!password || !username ) {
            logger.error("Missing fields");
            return res.status(400).json({message: "Missing fields"});
        }
        
        // Find the user by username
        const loggedUser = await User.findOne({username});
        
        // Check if the user exists
        if (!loggedUser) {
            logger.error(`User ${username} not found`);
            return res.status(400).json({ message: 'Invalid Username' });
        }

        // hash the given password for comparison
        const expectedHash = hashPassword(password);
        // Check if the password is correct
        if(loggedUser.password !== expectedHash) {
            logger.error(`Invalid password for user ${username}`);
            return res.status(403).json({ message: 'Invalid Password' });
        }
        // Create a JWT token with the user ID as payload
        const payload = { userID: loggedUser._id};
        
        // use the signToken Helper to create a jwt token
        const token = signToken(payload);

        logger.info(`User ${loggedUser.username} logged in`);
        return res.status(200).json({ token }); // return the token
    } catch (error) {
        logger.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
