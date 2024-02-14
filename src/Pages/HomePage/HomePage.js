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
      <div className="weather">

        <form onSubmit={(e) => {
          e.preventDefault()
          handleCurrentWeather()
        }
        }>
          <input className="input" placeholder="Enter city name.." onChange={(e) => setCity(e.target.value)} />
        </form>
        <div className="top">
        <div className="weather">
          <span className="city">{currentWeatherState.country}</span>
          <span className="desc">{currentWeatherState.name}</span>
        </div>
        </div>

        <div className="bottom">
          <div className="details">
          <span className="para-label">Temp: </span><span className="para-value">{currentWeatherState.temp}</span>

          <span className="para-label">Humidity: </span><span className="para-value">{currentWeatherState.humidity}</span>
          <span className="para-label">Speed: </span><span className="para-value">{currentWeatherState.speed}</span>

          <span className="para-label">Min Temp: </span><span className="para-value"> {currentWeatherState.temp_min}</span>
      </div>
      </div>
      </div>
    </div>
  )
}

