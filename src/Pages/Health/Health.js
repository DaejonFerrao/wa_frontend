import { useState, useEffect } from 'react';
import './Health.css';
import axios from 'axios';
import { currentWeater } from '../../WeatherService';

function Health() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const APIKey = 'bf2c20a1f20c38e0a1d11eb86ac5fe91';
  const city = "london";

  useEffect(() => {
    const fetchWeather = async (city) => {
      try {
        const current_Weather = await currentWeater(city)
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`);
        console.log(response.data)
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        setError('Failed to fetch weather data');
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="container">
      <h1>Health Tips and Weather</h1>
      <div className="weather">
        <h2>Weather</h2>
        {weather ? (
          <div>
            <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
            <p><strong>Weather:</strong> {weather.weather[0].description}</p>
          </div>
        ) : (
          <p>{error ? error : 'Loading weather...'}</p>
        )}
      </div>
      <div className="health-tips">
        <div className="health-tip">
          <h2>Pollen: High</h2>
          <p>Might affect certain allergies:
            - Common Cold
          </p>
        </div>
        <div className="health-tip">
          <h2>Dust: Low</h2>
          <p>Might affect certain allergies:
            - Cough</p>
        </div>
        <div className="health-tip">
          <h2>Mold: Medium</h2>
          <p>Might affect certain allergies:
            - Flu</p>
        </div>
        <div className="health-tip">
          <h2>Tip 1:Eat A balanced diet</h2>
          <p>Make sure to include plenty of fruits and vegetables in your diet.</p>
        </div>
        <div className="health-tip">
          <h2>Tip 2: Exercise Regularly</h2>
          <p>Try to get at least 30 minutes of exercise every day.</p>
        </div>
        <div className="health-tip">
          <h2>Tip 3: Get Enough Sleep</h2>
          <p>Aim for 7-9 hours of sleep per night to feel rested and rejuvenated.</p>
        </div>
        {/* Add more health tips as needed */}
      </div>
    </div>
  );
}

export default Health;
