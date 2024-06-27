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

// a function that generates a token using jwt
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


let SENSORS_URI = '';

const SENSORS_URI1 = config.get<string>('thd_sensor1_uri');
const SENSORS_URI2 = config.get<string>('thd_sensor2_uri');



export const setActiveSensor = async () => {
    //Settings JSON file absolute path
    const settingsFilePath = ((process.cwd()) + '/config/settings.json')

    try {
        const settingsFileContent = await fs.readFile(settingsFilePath, 'utf-8');
        const settings = JSON.parse(settingsFileContent);

        let activeSensors = lodash.filter(settings.sensors, (sensor) => lodash.get(sensor, 'isActive'));
        
        // Map over active sensors to add the URL
        activeSensors = lodash.map(activeSensors, (sensor) => {
            const sensorId = lodash.get(sensor, 'id');
            logger.info(`Sensor ${sensorId} is active.`);
            let sensorUrl: string;

            if (sensorId === 1) {
                sensorUrl = config.get<string>('thd_sensor1_uri');
            } else if (sensorId === 2) {
                sensorUrl = config.get<string>('thd_sensor2_uri');
            } else {
                sensorUrl = 'Unknown URL'; // Default or error URL
                logger.error(`Unknown sensor ID: ${sensorId}`);
            }

            // Add URL to the sensor object
            return {
                ...sensor,
                url: sensorUrl
            };
        });

        // Log and return the active sensors with URLs
        //console.log(activeSensors);
        return activeSensors;

    } catch (error: any) {
        logger.error('Error reading settings file:', error.message)
        return [];
    }
}