import { useEffect, useState } from "react";
import { getWeather } from "../services/weatherApi";

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeather("Hyderabad");
        console.log("Weather Data:", data); // 🔥 debug

        setWeather(data);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <p>Loading weather...</p>;

  if (!weather || weather.cod !== 200) {
    return <p>Failed to load weather</p>;
  }

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h3>Weather</h3>

      <p>Temp: {weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} m/s</p>
      <p>Condition: {weather.weather[0].main}</p>
    </div>
  );
};

export default WeatherWidget;