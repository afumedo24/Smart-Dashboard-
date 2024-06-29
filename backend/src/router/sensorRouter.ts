import { Router} from 'express'
import { getCurrentSensor, getSensors_01 } from './../controllers/sensorsController';
import { sendSettings, updateSettings } from './../controllers/settingsController';

export default (router:Router ) => {
    router.get("/sensor/settings", sendSettings)
    router.put("/sensor/settings", updateSettings)
    router.get("/sensor/1/data", getCurrentSensor )
}