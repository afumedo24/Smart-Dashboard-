import { Request, Response } from 'express'
import logger from '../../utils/logger';
import {setActiveSensor} from "../../utils/helpers"
import { fetchSensor } from './../services/sensorsapi';

export const getSensor = async (req: Request, res: Response) => {
    try {
        const sensor = await setActiveSensor();
        const response = await fetchSensor(sensor[0].url);
        logger.info(`Sensor ${sensor[0].id} fetched successfully`);
        return res.status(200).json({
            "labels": "Current",
            "values": response.current
        });
    } catch (error) {
        logger.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}



// a controller to fetch the sensors data
export const getSensors_01 = async (req:Request, res:Response) => {
    try {
        const sensor = await setActiveSensor();
        const response = await fetchSensor(sensor[0].url);
        logger.info(`Sensor ${sensor[0].id} fetched successfully`);
        return res.status(200).json({
            "labels": "Current",
            "values": response.current
        }); 
    } catch (error) {
        logger.error(error);
        return res.status(500).json({message: "Internal Server Error"});
    }
}
