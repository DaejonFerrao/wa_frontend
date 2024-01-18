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

      <div className="weather-location-group">
        <h1>{currentWeatherState.country}</h1>
        <h1>{currentWeatherState.name}</h1>
      </div>

      <div className="temp-group">
        <span>Tempetature: </span><span>{currentWeatherState.temp}</span>
      </div>
        <h3>{currentWeatherState.humidity}</h3>
        <h4>{currentWeatherState.speed}</h4>
        
        <h6>{currentWeatherState.temp_min}</h6>
        
      </div>
    </div>
  )
}

