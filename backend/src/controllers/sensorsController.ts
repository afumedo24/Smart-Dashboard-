import { Request, Response } from 'express'
import logger from '../../utils/logger';
import {  fetchSensors_01, fetchSensors_02 } from './../services/sensorsapi';

// a controller to fetch the sensors data
export const getSensors_01 = async (req:Request, res:Response) => {
    try {
        const response = await fetchSensors_01();
        logger.info("Sensors01 fetched successfully");
        return res.status(200).json({
            "labels": "Current",
            "values": response.current
        }); 
    } catch (error) {
        logger.error(error);
        return res.status(500).json({message: "Internal Server Error"});
    }
}

// a controller to fetch the sensors data
export const getSensors_02 = async (req:Request, res:Response) => {
    try {
        const response = await fetchSensors_02();
        logger.info("Sensors02 fetched successfully");
        return res.status(200).json(response); 
    } catch (error) {
        logger.error(error);
        return res.status(500).json({message: "Internal Server Error"});
    }
}

