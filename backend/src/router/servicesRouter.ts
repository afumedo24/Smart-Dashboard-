import { Router} from 'express'
import { getNews, getWeather } from './../controllers/servicesController';

/*
    all the routes which use a external API are defined here
    they don`t need validation because should be accessible
    to everyone
*/
export default (router:Router ) => {
    router.get("/news", getNews)
    router.get("/weather", getWeather)
}