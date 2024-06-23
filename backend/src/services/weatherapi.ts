import axios from 'axios';
import config from 'config';
import logger from '../../utils/logger';

// get the openweather uri from the config file
const WEATHER_URI = config.get<string>('openweather_uri');

// a basic function to fetch weather from the openweather API
export const fetchWeather = async () => {
    try {
        const response = await axios.get(WEATHER_URI);
        logger.info("Weather fetched successfully");
        return response.data;
    } catch (error) {
        logger.error(error);
    }
}

