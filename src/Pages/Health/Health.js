import { useState, useEffect } from 'react';
import './Health.css';
import axios from 'axios';
import { currentWeater } from '../../WeatherService';

function Health() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [chosenLocation, setChosenLocation] = useState("London");

  useEffect(() => {
    const fetchWeatherByLocation = async (location) => {
      try {
        const WEATHER_API_KEY = "bf2c20a1f20c38e0a1d11eb86ac5fe91";
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WEATHER_API_KEY}&units=metric`);
        if (!response.ok) {
          throw new Error('Weather data not available');
        }
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        setError('Failed to fetch weather data');
      }
    };

    fetchWeatherByLocation(chosenLocation);
  }, [chosenLocation]);

  const handleLocationChange = (event) => {
    setChosenLocation(event.target.value);
  };



  return (
    <div className="container">
      <h1>Health Tips and Weather</h1>
      <div className='location-input'>
        <label htmlFor='location'><b>Choose a location:</b></label>
        <input
          type="text"
          id="location"
          value={chosenLocation}
          onChange={handleLocationChange}
        />
      </div>
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
          <h2>Pollen: {weather && weather.weather[0].main === 'Clear' ? 'Low' : 'High'}</h2>
          <p>Might affect certain allergies:
            {weather && weather.weather[0].main === 'Clear' ? '- None' : '- Common Cold'}
          </p>
        </div>
        <div className="health-tip">
          <h2>Dust: {weather && weather.weather[0].main === 'Clear' ? 'Low' : 'High'}</h2>
          <p>Might affect certain allergies:
            {weather && weather.weather[0].main === 'Clear' ? '- None' : '- Cough'}
          </p>
        </div>
        <div className="health-tip">
          <h2>Mold: {weather && weather.weather[0].main === 'Clear' ? 'Low' : 'Medium'}</h2>
          <p>Might affect certain allergies:
            {weather && weather.weather[0].main === 'Clear' ? '- None' : '- Asthma'}
          </p>
        </div>
        <div className="health-tip">
          <h2>Tree Pollen: {weather && weather.weather[0].main === 'Clear' ? 'Low' : 'Medium'}</h2>
          <p>Might affect certain allergies:
            {weather && weather.weather[0].main === 'Clear' ? '- None' : '- Flu'}
          </p>
          </div>
          <div className="health-tip">
          <h2>Grass Pollen: {weather && weather.weather[0].main === 'Clear' ? 'Low' : 'Medium'}</h2>
          <p>Might affect certain allergies:
            {weather && weather.weather[0].main === 'Clear' ? '- None' : '- Migraine'}
          </p>
          </div>
          <div className="health-tip">
          <h2>Dust & Dander: {weather && weather.weather[0].main === 'Clear' ? 'Low' : 'Medium'}</h2>
          <p>Might affect certain allergies:
            {weather && weather.weather[0].main === 'Clear' ? '- None' : '- Sinius Pressure'}
          </p>
          </div>
      </div>
    </div>
  );
};


export default Health;
