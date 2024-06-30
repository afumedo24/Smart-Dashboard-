import axios from 'axios';
import config from 'config';
import logger from '../../utils/logger';

// get the openweather URI from the config file
const WEATHER_URI = config.get<string>('openweather_uri');

// a function to fetch weather from the openweather API
export const fetchWeather = async () => {
    try {
        const response = await axios.get(WEATHER_URI);
        console.log(response.data);
        logger.info("Weather fetched successfully");
        return response.data;
    } catch (error) {
        logger.error(error);
    }
}

