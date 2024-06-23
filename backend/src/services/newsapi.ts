import axios from 'axios';
import config from 'config';
import logger from '../../utils/logger';

// get the news URI from the config file
const NEWS_URI = config.get<string>('news_uri');

// a basic function to fetch news from the news API
export const fetchNews = async () => {
    try {
        const response = await axios.get(NEWS_URI);
        logger.info("News fetched successfully");
        return response.data.articles; // return only the articles
    } catch (error) {
        logger.error(error);
    }
}


