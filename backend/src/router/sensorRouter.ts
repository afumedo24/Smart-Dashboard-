import { Router} from 'express'
import { getSensor, getSensors_01 } from './../controllers/sensorsController';

export default (router:Router ) => {
    router.get("/sensor", getSensor)
    router.get("/sensor1", getSensors_01)
}