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

        {/* <div className="temp-group"> */}
          <span className="temp">Temp: </span><span className="temp-num">{currentWeatherState.temp}</span>

          <span className="Humidity">Humidity: </span><span className="temp-num">{currentWeatherState.humidity}</span>
          <span className="Speed">Speed: </span><span className="temp-num">{currentWeatherState.speed}</span>

          <span className="Min">Min Temp: </span><span className="temp-num"> {currentWeatherState.temp_min}</span>
        {/* </div> */}
      </div>
    </div>
  )
}

