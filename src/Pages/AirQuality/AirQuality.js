import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AirQuality.css';
import { currentWeater } from '../../WeatherService';

function AirQuality() {
  const [airQualityData, setAirQualityData] = useState(null);

  useEffect(() => {
    const fetchAirQualityData = async () => {
      try {
       const WEATHER_API_KEY = "bf2c20a1f20c38e0a1d11eb86ac5fe91";
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${currentWeater}&lon=${currentWeater}&appid=${WEATHER_API_KEY}`);
        console.log(response.data)
        setAirQualityData(response.data);
      } catch (error) {
        console.error('Error fetching air quality data:', error);
      }
    };

    fetchAirQualityData();
  }, []);

  

  return (
    <div className="air-quality-container">
      <h2 className="section-title">Air Quality Index</h2>
      {airQualityData ? (
        <div className="air-quality-data">
          <p><strong>Location:</strong> {airQualityData.location}</p>
          <p><strong>Current AQI:</strong> {airQualityData.currentAQI}</p>
          <p><strong>Category:</strong> {airQualityData.category}</p>
          <p><strong>Primary Pollutant:</strong> {airQualityData.primaryPollutant}</p>
        </div>
      ) : (
        <p className="loading-message">Loading air quality data...</p>
      )}
    </div>
  );
}

export default AirQuality;

