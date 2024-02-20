import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AirQuality.css';
import { currentWeater } from '../../WeatherService';

function AirQuality() {
  const [airQualityData, setAirQualityData] = useState(null);
  const APIKey = 'bf2c20a1f20c38e0a1d11eb86ac5fe91'
  const city = "london";
 
  
  useEffect(() => {
    const fetchAirQualityData = async () => {
      try {
        const current_Weather = await currentWeater(city)
        console.log(current_Weather)
        const {lon,lat} = current_Weather
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${APIKey}`);
        console.log(response.data)
        setAirQualityData(response.data);
        console.log(airQualityData)
      } catch (error) {
        console.error('Error fetching air quality data:', error);
      }
    };

    fetchAirQualityData();
  }, [city, APIKey]);

  

  return (
    <div className="air-quality-container">
      <h2 className="section-title">Air Quality Index</h2>
      {airQualityData ? (
        <div className="air-quality-data">
          <p><strong>Location:</strong> {airQualityData.location}</p>
          <p><strong>Current AQI:</strong> {airQualityData.currentAQI}</p>
          <p><strong>Category: </strong> {airQualityData.category}</p>
          <p><strong>Primary Pollutant:</strong> {airQualityData.primaryPollutant}</p>
        </div>
      ) : (
        <p className="loading-message">Loading air quality data...</p>
      )}
    </div>
  );
}

export default AirQuality;

