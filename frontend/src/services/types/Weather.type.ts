// Interface representing weather information for a specific location.
export interface IWeather {
  temperature: number;    // Current temperature in Celsius.
  humidity: number;       // Current humidity level as a percentage.
  weather_icon: string;   // Icon representing the current weather condition.
  city_name: string;      // Name of the city or location for which weather is fetched.
  sunrise: string;        // Time of sunrise formatted as a string.
  sunset: string;         // Time of sunset formatted as a string.
}