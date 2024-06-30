import { Request, Response } from 'express'
import logger from '../../utils/logger';
import lodash from 'lodash';
import { fetchNews } from '../services/newsapi';
import { fetchWeather } from './../services/weatherapi';


// a controller function to fetch the news and send it as a response
export const getNews = async (req:Request, res:Response) => {
    try {
        // fetch the news data and send it as a response
        const response = await fetchNews();
        return res.status(200).json(response); 
    } catch (error) {
        logger.error(error);
        return res.status(500).json({message: "Internal Server Error"});
    }
}

// a controller function to fetch the weather and send it as a response
export const getWeather = async (req:Request, res:Response) => {
    try {
        // fetch the weather data and send it as a response
        const response = await fetchWeather();
        return res.status(200).json(response);   
    } catch (error) {
        logger.error(error);
        return res.status(500).json({message: "Internal Server Error"});
    }
}
