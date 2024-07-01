import crypto from 'crypto';
import config from 'config';
import jwt from 'jsonwebtoken';
import fs from 'fs/promises';
import lodash from 'lodash';
import logger from './logger';

// get all the configuration values from the config module
const SALT = config.get<string>('salt');
const SECRET = config.get<string>('secret')
const JWT_SECRET = config.get<string>('jwtsecret');

// a function that takes a password and returns a hashed password using crypto
export const hashPassword = (password: string) => {
    return crypto.createHmac('sha256', [SALT, password].join('/')).update(SECRET).digest('hex');
}

// a function that generates a token with payload using jwt
export const signToken = (payload: any) => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}

// a function that verifies (decodes) a jwt token 
export const verifyToken = (token: string) => {
    return jwt.verify(token, JWT_SECRET);
}

// a function that converts a unix timestamp to a normal time format 
export const unixToNormalTime = (unix: number) => {
    // multiply by 1000 to get the milliseconds
    const time = new Date(unix * 1000);
    // use the Intl.DateTimeFormat to format the German time
    const formatter = new Intl.DateTimeFormat('de-DE', {
        hour: '2-digit',
        minute: '2-digit',
    });
    // return the formatted time
    return formatter.format(time);
}

// a function that returns the URL of the weather icon
export const weatherIconURL = (icon: string) => {
    return `https://openweathermap.org/img/wn/${icon}.png`;
}

interface IActiveSensor {
    id: number;
    name: string;
    url?: string;
    isActive: boolean;
}

// a function that reads the settings.json file and 
// returns the active Sensor with URL from the congif file
export const setActiveSensor = async (): Promise<IActiveSensor | null> => {
    //Settings JSON file absolute path
    const settingsFilePath = ((process.cwd()) + '/config/settings.json')
    try {
        // Read the settings.json file and parse it
        const settingsFileContent = await fs.readFile(settingsFilePath, 'utf-8');
        const settings = JSON.parse(settingsFileContent);

        // Filter out the active sensor
        let activeSensors: IActiveSensor[] = lodash.filter(settings.sensors, (sensor) => lodash.get(sensor, 'isActive'));
        
        // Map over active sensors to add the related URL
        activeSensors = lodash.map(activeSensors, (sensor) => {
            // Extract the ID of the active sensor
            const sensorId = lodash.get(sensor, 'id');
            logger.info(`Sensor ${sensorId} is active.`);
            let sensorUrl:string;

            // Get the URL based on the sensor ID
            if (sensorId === 1) {
                sensorUrl = config.get<string>('thd_sensor1_uri');
            } else if (sensorId === 2) {
                sensorUrl = config.get<string>('thd_sensor2_uri');
            } else {
                // If the sensor ID is unknown, log an error
                sensorUrl = 'Unknown URL';
                logger.error(`Unknown sensor ID: ${sensorId}`);
            }

            // Add URL to the sensor object
            return {
                ...sensor,
                url: sensorUrl
            };
        });

        // return the active sensors with URL
        return activeSensors[0];

    } catch (error: any) {
        logger.error('Error reading settings file:', error.message)
        return null;
    }
}