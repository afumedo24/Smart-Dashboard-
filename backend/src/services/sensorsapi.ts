import axios from "axios"
import logger from "../../utils/logger"

// define the interface for the sensor data
interface ISensor {
    label: string;
    values: number;
}

// a function to fetch sensor data from the sensor Endpoint 
export const fetchSensor = async (url: string): Promise<ISensor | null> => {
    try {
        // fetch the sensor data from the sensor Endpoint
        const response = await axios.get(url);
        
        // create a new sensor object with the required data
        const sensor: ISensor = {
            label: 'Current',
            values: response.data.current
        }
        logger.info("Sensor fetched successfully");
        // return the sensor object
        return sensor;
    } catch (error: any) {
        logger.error('Error while fetching Sensor data: ', error.message);
        return null;
    }
}
