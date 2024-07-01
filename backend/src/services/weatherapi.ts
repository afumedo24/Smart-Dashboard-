import axios from 'axios';
import config from 'config';
import lodash from 'lodash';
import logger from '../../utils/logger';
import { unixToNormalTime, weatherIconURL } from '../../utils/helpers';

// get the openweather URI from the config file
const WEATHER_URI = config.get<string>('openweather_uri');

// define the interface for the weather data
interface IWeather {
  temperature: number;
  humidity: number;
  weather_icon: string;
  city_name: string;
  sunrise: string;
  sunset: string;
}

// a function to fetch weather from the openweather API
export const fetchWeather = async (): Promise<IWeather | null> => {
    try {
        // fetch the weather data from the openweather API
        const response = await axios.get(WEATHER_URI);
        // extract the required data from the response
        // use the unixToNormalTime function to convert the unix time to normal time
        // use the weatherIconURL function to create the weather icon URL
        const weather: IWeather = {
            temperature: Math.round(lodash.get(response.data, 'main.temp')),
            humidity: lodash.get(response.data, 'main.humidity'),
            weather_icon: weatherIconURL(lodash.get(response.data, 'weather[0].icon')),
            city_name: lodash.get(response.data, 'name'),
            sunrise: unixToNormalTime(lodash.get(response.data, 'sys.sunrise')),
            sunset: unixToNormalTime(lodash.get(response.data, 'sys.sunset')),
        };
        logger.info("Weather fetched successfully");
        // return the weather data
        return weather;
    } catch (error: any) {
        logger.error('Error while fetching Weather data: ', error.message);
        return null;
    }
}

