import { useEffect, useState } from "react"
import { currentWeater } from "../../WeatherService"

import "./HomePage.css"

export const HomePage = () => {
  const [currentWeatherState, setCurrentWeatherState] = useState({})

  const [city, setCity] = useState("London")


  const handleCurrentWeather = async () => {
    const weatherData = await currentWeater(city)
    setCurrentWeatherState(weatherData)

  }

  useEffect(() => {
    handleCurrentWeather()
  }, [])


  return (

    <div>
      <h1>Home page</h1>
      <div className="weather-data-group">

        <form onSubmit={(e) => {
          e.preventDefault()
          handleCurrentWeather()
        }
        }>
          <input className="input" placeholder="Enter city name.." onChange={(e) => setCity(e.target.value)} />
        </form>

        <div className="weather-location-group">
          <h1>{currentWeatherState.country}</h1>
          <h1>{currentWeatherState.name}</h1>
        </div>

        <div className="temp-group">
          <span>Temp: </span><span>{currentWeatherState.temp}</span>

          <span>Humidity: </span><span>{currentWeatherState.humidity}</span>
          <span>Speed: </span><span>{currentWeatherState.speed}</span>

          <span>Min Temp: </span><span> {currentWeatherState.temp_min}</span>
        </div>
      </div>
    </div>
  )
}

