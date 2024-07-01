import { Request, Response } from 'express'
import logger from '../../utils/logger';
import { fetchNews } from '../services/newsapi';
import { fetchWeather } from './../services/weatherapi';


// a controller function to fetch the news and send it as a response
export const getNews = async (req:Request, res:Response): Promise<Response>  => {
    try {
        // fetch the news data and send it as a response
        const response = await fetchNews();

        // check if the response is empty
        if (!response) {
            logger.error(`Failed to fetch news`);
            return res.status(500).json({ message: 'Failed to fetch news' });
        }
        // log and send the news data as a response
        logger.info(`News data sent successfully`);
        return res.status(200).json(response); 
    } catch (error: any) {
        logger.error('Error sending news data: ',error.message);
        return res.status(500).json({message: "Internal Server Error"});
    }
}

// a controller function to fetch the weather and send it as a response
export const getWeather = async (req:Request, res:Response): Promise<Response>  => {
    try {
        // fetch the weather data and send it as a response
        const response = await fetchWeather();

        // check if the response is empty
        if (!response) {
            logger.error(`Failed to fetch weather`);
            return res.status(500).json({ message: 'Failed to fetch weather' });
        }
        // log and send the weather data as a response
        logger.info(`Weather data sent successfully`);
        return res.status(200).json(response);   
    } catch (error: any) {
        logger.error('Error sending weather data: ', error.message);
        return res.status(500).json({message: "Internal Server Error"});
    }
}
