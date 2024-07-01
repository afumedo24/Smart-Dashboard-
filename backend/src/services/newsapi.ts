import axios from 'axios';
import config from 'config';
import logger from '../../utils/logger';
import lodash from 'lodash';

// get the news URI from the config file
const NEWS_URI = config.get<string>('news_uri');

// define the interface for the news data
interface INews {
    title: string;
    author: string;
    url: string;
}

// a function to fetch news from the NEWS API
export const fetchNews = async (): Promise<INews[] | null>  => {
    try {
        // fetch the news data from the NEWS API
        const response = await axios.get(NEWS_URI);
        // extract the required data from the response
        // return only the title, author and url of the first 5 elements
        const news = lodash.chain(response.data.articles)
                            .take(5)
                            .map((item) => ({
                                title: item.title,
                                author: item.author,
                                url: item.url,
                                }))
                            .value();
        logger.info("News fetched successfully");
        // return the news data
        return news;
    } catch (error: any) {
        logger.error('Error while fetching News data: ', error.message);
        return null;
    }
}


