import { Request, Response } from 'express'
import logger from '../../utils/logger';
import { setActiveSensor } from "../../utils/helpers"
import { fetchSensor } from './../services/sensorsapi';

// a controller function to fetch the current(strom) and send it as a response
export const getCurrentSensor = async (req:Request, res:Response): Promise<Response>  => {
    try {
        // use the setActiveSensor function to get the active sensor
        const sensor = await setActiveSensor();
        
        // check if the sensor exists
        if(!sensor) {
            logger.error('No active sensor found');
            return res.status(404).json({message: "No active sensor found"});
        }
        // fetch the sensor data
        const response = await fetchSensor(sensor.url!);

        // check if the response is empty
        if (!response) {
            logger.error(`Failed to fetch data from sensor with ID ${sensor.id}`);
            return res.status(500).json({ message: 'Failed to fetch sensor data' });
        }

        // log and send the sensor data as a response
        logger.info(`Sensor ${sensor.id} data sent successfully`);
        return res.status(200).json(response);
    } catch (error: any) {
        logger.error('Error sending sensor data: ', error.message);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

