import { useEffect, useState } from "react"
import { currentWeater } from "../../WeatherService"

import "./HomePage.css"

export const HomePage = () => {
  const [currentWeatherState, setCurrentWeatherState] = useState({})
  useEffect(() => {

    const handleCurrentWeather = async () => {
      const weatherData = await currentWeater()

      setCurrentWeatherState(weatherData)


    }
    handleCurrentWeather()

  }, [])
  return (

    <div>
      <h1>Home page</h1>
      <div className="weather-data-group">
        <input className="input" placeholder="Enter city name.." />
      <div className="weather-location-group">
        <h1>{currentWeatherState.country}</h1>
        <h1>{currentWeatherState.name}</h1>
      </div>

      <div className="temp-group">
        <span>Temp: </span><span>{currentWeatherState.temp}</span>
      </div>
        <span>Humidity: </span><span>{currentWeatherState.humidity}</span>
        <span>Speed: </span><span>{currentWeatherState.speed}</span>
        
        <span>Min Temp: </span><span> {currentWeatherState.temp_min}</span>
        
      </div>
    </div>
  )
}

