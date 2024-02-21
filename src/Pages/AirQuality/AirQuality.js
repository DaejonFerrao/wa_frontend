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

  
  console.log(airQualityData)
  return (
    <div className="air-quality-container">
    <h2 className="section-title">Air Quality Index</h2>
    {airQualityData ? (
      <div className="air-quality-data">
        <div className='air-poll'>
          <span className="para-label"><strong>Location:</strong> 
            {`${airQualityData.coord.lat}, ${airQualityData.coord.lon}`}
          </span>   
        </div>
        <div className='air-poll'>      
          <span className='para-label'><strong>CO:</strong> 
            {Math.round(airQualityData.list[0].components.co)}
          </span>
        </div>
        <div className='air-poll'>
          <span><strong>nh3:</strong> 
            {airQualityData.list[0].components.nh3}
          </span>
        </div>
        <div className='air-poll'>
          <span><strong>no: </strong> 
            {airQualityData.list[0].components.no}
          </span>
        </div>
          <div className='air-poll'>
          <span><strong>no2:</strong> 
          {airQualityData.list[0].components.no2}</span>
          </div>
          <div className='air-poll'>
          <span><strong>03:</strong> 
          {Math.round(airQualityData.list[0].components.o3)}</span>
          </div>
          <div className='air-poll'>
          <span><strong>pm2_5:</strong> 
          {airQualityData.list[0].components.pm2}</span>
          </div>
          <div className='air-poll'>
          <span><strong>pm10:</strong> 
          {airQualityData.list[0].components.pm10}</span>
          </div>
          <div className='air-poll'>
          <span><strong>so2:</strong> 
          {airQualityData.list[0].components.so2}</span>
          </div>
       </div>
      ) : (
        <p className="loading-message">Loading air quality data...</p>
      )}
    </div>
  );
}

export default AirQuality;

