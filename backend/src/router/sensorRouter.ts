import { Router} from 'express'
import { startFetchingData, stopFetchingData  } from './../controllers/sensorsController';

export default (router:Router ) => {
    router.get("/sensor/start", startFetchingData )
    router.get("/sensor/stop", stopFetchingData )
    router.get("/sensor1", )
}