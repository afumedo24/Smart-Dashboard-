import axios from "axios"
import config from "config"
import logger from "../../utils/logger"


const SENSORS_URI = config.get<string>('thd_sensor1_uri');
const SENSORS_URI2 = config.get<string>('thd_sensor2_uri');

export const fetchSensors_01 = async () => {
    try {
        const response = await axios.get(SENSORS_URI);
        logger.info("Sensor01 fetched successfully");
        return response.data;
    } catch (error) {
        logger.error(error);
    }
}

export const fetchSensors_02 = async () => {
    try {
        const response = await axios.get(SENSORS_URI2);
        logger.info("Sensor02 fetched successfully");
        return response.data;
    } catch (error) {
        logger.error(error);
    }
}