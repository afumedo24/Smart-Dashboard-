import {Request, Response, NextFunction } from "express";
import { get } from 'lodash';
import { verifyToken } from "../../utils/helpers";
import logger from "../../utils/logger";

export const validateReq = async (req:Request, res:Response, next: NextFunction) => {
    // Get the token from the request headers
    // compiler thinks that req.headers["Authorization"] can be string | string[]
    // and string[] doesn`t work with jwt.verify
    const req_token = req.headers["authorization"] as string ;

    try {
        // Check if the token is empty
        if(!req_token) {
            logger.error("Token does not exist");
            return res.status(403).json({message: "Token does not exist"});
        }

        // Verify the token with verifyToken function
        const decodedToken = verifyToken(req_token);

        // Check if the token is empty
        if(!decodedToken) {
            logger.error("Invalid token");
            return res.status(403).json({message: "Invalid token"});
        }

        // Attach the user ID to the request
        req.body.userID = get(decodedToken, 'userID');

        return next();

    } catch (error) {
        logger.error("Error with Validating the Token " + error);
        return res.status(400).json({message: "Not Authorized "});
    }
}
