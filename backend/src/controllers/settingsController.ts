import { Request, Response } from 'express'
import logger from '../../utils/logger';
import lodash from 'lodash';
import fs from 'fs';

// set the absolute path to the settings.json file
const settingsFilePath = ((process.cwd()) + '/config/settings.json')

// a controller function to send the settings as a response
export const sendSettings = async (req:Request, res:Response): Promise<Response> => {
    try {
        // read the settings file and parse it
        const data = await fs.readFileSync(settingsFilePath, 'utf8');
        const senttingsdata = JSON.parse(data);
        // log and send the settings data as a response
        logger.info('Settings sent successfully');
        return res.status(200).json(senttingsdata);
    } catch (error: any) {
        logger.error('Error reading settings file:', error.message);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

// a controller function to update the settings and send it as a response
export const updateSettings = async (req:Request, res:Response): Promise<Response>  => {    
    try {
        // read the settings file and parse it
        const data = await fs.readFileSync(settingsFilePath, 'utf8');
        const settings = JSON.parse(data);
        // merge the new settings from the request body with the existing settings
        const newSettings = lodash.merge(settings, req.body);
        // write the updated settings to the settings file
        fs.writeFileSync(settingsFilePath, JSON.stringify(newSettings, null, 2));   
        // log and send the updated settings as a response
        logger.info('Settings updated successfully');         
        return res.status(200).json(newSettings);
    } catch (error: any) {
        logger.error('Error updating settings file:', error.message);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

