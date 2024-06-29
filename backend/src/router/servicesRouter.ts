import { Router} from 'express'
import { getNews, getWeather } from './../controllers/servicesController';
import { getStocks } from './../controllers/stockController';
/*
    all the routes which use a external API are defined here
    they don`t need validation because should be accessible
    to everyone
*/
export default (router:Router ) => {
    router.get("/services/news", getNews)
    router.get("/services/weather", getWeather)
    router.get("/services/stocks", getStocks)
}