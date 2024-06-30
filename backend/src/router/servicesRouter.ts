import { Router} from 'express'
import { getNews, getWeather } from './../controllers/servicesController';
import { getStocks } from './../controllers/stockController';

/*
    these are the routes for:
        - sending the news data
        - sending the weather data
        - sending the market capitalization data
*/
export default (router:Router ) => {
    router.get("/services/news", getNews)
    router.get("/services/weather", getWeather)
    router.get("/services/stocks", getStocks)
}