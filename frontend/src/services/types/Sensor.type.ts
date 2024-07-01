// Interface representing a sensor with basic information.
export interface Sensors {
  id: number;          // Unique identifier for the sensor.
  name: string;        // Name or description of the sensor.
  isActive: boolean;   // Indicates whether the sensor is active or not.
}

// Interface representing data collected from a sensor.
export interface SensorData {
  x: number;   // X-coordinate or primary data value from the sensor.
  y: number;   // Y-coordinate or secondary data value from the sensor.
}

// Interface representing settings related to sensors.
export interface SensorSettings {
  sensors: Sensors[];   // Array of sensors with their respective details.
  frequency: number;    // Frequency at which sensor data is collected or updated.
}