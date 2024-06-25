import { Request, Response } from 'express'
import logger from '../../utils/logger';
import lodash from 'lodash';
import { fetchNews } from '../services/newsapi';
import { fetchWeather } from './../services/weatherapi';
import { unixToNormalTime, weatherIconURL } from '../../utils/helpers';

// a controller to fetch the news 
export const getNews = async (req:Request, res:Response) => {
    try {
        const response = await fetchNews();
        // return only the first 5 news
        const news = lodash.chain(response)
                            .take(5)
                            .map((item) => ({
                                title: item.title,
                                author: item.author,
                                url: item.url,
                                }))
                            .value();
        return res.status(200).json(news); 
    } catch (error) {
        logger.error(error);
        return res.status(500).json({message: "Internal Server Error"});
    }
}

// a controller to fetch the weather
export const getWeather = async (req:Request, res:Response) => {
    try {
        const response = await fetchWeather();
        // extract the required weather details
        const weather = {
            temperature: Math.round(lodash.get(response, 'main.temp')),
            humidity: lodash.get(response, 'main.humidity'),
            weather_icon: weatherIconURL(lodash.get(response, 'weather[0].icon')),
            city_name: lodash.get(response, 'name'),
            sunrise: unixToNormalTime(lodash.get(response, 'sys.sunrise')),
            sunset: unixToNormalTime(lodash.get(response, 'sys.sunset')),
        };
        return res.status(200).json(weather);   
    } catch (error) {
        logger.error(error);
        return res.status(500).json({message: "Internal Server Error"});
    }
}
