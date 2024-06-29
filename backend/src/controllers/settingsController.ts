import { Request, Response } from 'express'
import logger from '../../utils/logger';
import lodash from 'lodash';
import fs from 'fs';

const settingsFilePath = ((process.cwd()) + '/config/settings.json')

export const sendSettings = async (req:Request, res:Response) => {
    try {
        const data = fs.readFileSync(settingsFilePath, 'utf8');
        const senttingsdata = JSON.parse(data);
        return res.status(200).json(senttingsdata);
    } catch (error) {
        logger.error(error);
        return res.status(500).json({message: "Internal Server Error"});
    }
}

export const updateSettings = async (req:Request, res:Response) => {    
    try {
        const data = fs.readFileSync(settingsFilePath, 'utf8');
        const settings = JSON.parse(data);
        const newSettings = lodash.merge(settings, req.body);
        fs.writeFileSync(settingsFilePath, JSON.stringify(newSettings, null, 2));            
        return res.status(200).json(newSettings);
    } catch (error) {
        logger.error(error);
        return res.status(500).json({message: "Internal Server Error"});
    }
}

