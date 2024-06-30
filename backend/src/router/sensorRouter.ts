import { Router} from 'express'
import { getCurrentSensor } from './../controllers/sensorsController';
import { sendSettings, updateSettings } from './../controllers/settingsController';

/*
    these are the routes for:
        - sending the sensor settings
        - updating the sensor settings
        - getting the current(strom) sensor data
*/
export default (router:Router ) => {
    router.get("/sensor/settings", sendSettings)
    router.put("/sensor/settings", updateSettings)
    router.get("/sensor/1/data", getCurrentSensor )
}