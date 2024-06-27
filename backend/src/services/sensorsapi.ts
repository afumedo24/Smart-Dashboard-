import axios from "axios"
import logger from "../../utils/logger"


export const fetchSensor = async (url: string) => {
    try {
        const response = await axios.get(url);
        logger.info("Sensor fetched successfully from API");
        return response.data;
    } catch (error) {
        logger.error(error);
    }
}

export const fetchSensorLoop = async (url: string) => {
    try {
        const response = await axios.get(url);
        logger.info("Sensor fetched successfully");
        return response.data;
    } catch (error) {
        logger.error(error);
    }
}
