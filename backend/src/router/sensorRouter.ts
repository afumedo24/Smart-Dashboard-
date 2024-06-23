import { Router} from 'express'
import { getSensors_01, getSensors_02 } from './../controllers/sensorsController';

export default (router:Router ) => {
    router.get("/sensor1", getSensors_01)
    router.get("/sensor2", getSensors_02)
}