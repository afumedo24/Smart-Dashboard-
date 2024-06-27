import { Request, Response } from 'express'
import logger from '../../utils/logger';
import WebSocket from 'ws';
import {setActiveSensor} from "../../utils/helpers"
import { fetchSensor } from './../services/sensorsapi';


const wss = new WebSocket.Server({ port: 3030 });
let clients: WebSocket[] = [];
let sensor = null;
let isRunning = false;
let shouldStop = false;

const getSensor = async () => {
    try {
        sensor = await setActiveSensor();
        const response = await fetchSensor(sensor[0].url);
        logger.info(`Sensor ${sensor[0].id} fetched successfully`);
        const data = { "labels": "Current", "values": response.current };
        // Push data to all connected clients
        //console.log(clients)
        clients.forEach(client => {
            client.send(JSON.stringify(data));
            logger.info(`Sensor Data sent to client over websocket`);
        });
    } catch (error) {
        logger.error(error);
    }
}

export const startFetchingData = async (req:Request, res:Response) => {
    try {
        if (isRunning) {
            logger.info('Sensor Data loop is already running.');
            return res.status(400).json({message: 'Sensor Data loop is already running.'});
        }

        // Start the async task
        isRunning = true;
        while (!shouldStop) {
            await getSensor();
            await new Promise(resolve => setTimeout(resolve, 3000));
        }
        isRunning = false;
        shouldStop = false; // Reset the flag for future use
        logger.info('Sensor Data loop stoped.');

        return res.status(200).send({message: 'Sensor Data loop started.'});
    } catch (error) {
        logger.error('Error starting async task:', error);
        return res.status(500).json({message: "Internal Server Error"});
    }
};

export const stopFetchingData = (req:Request, res:Response) => {
    try {
        if (!isRunning) {
            return res.status(400).json({ message: 'No Sensor Data loop is running.'});
        }

        shouldStop = true;
        clients.forEach(client => {
            client.terminate();
        });
        clients = [];

        res.status(200).send('Sensor Data loop stopping...');
    } catch (error) {
        logger.error('Error stopping Sensor Data loop:', error);
        res.status(500).json({ message: 'Error stopping Sensor Data loop.'});
    }
};


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
