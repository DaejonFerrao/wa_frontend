import { useEffect , useState} from "react"
import { currentWeater } from "../../WeatherService"

export const HomePage = () => {
const [currentWeatherState, setCurrentWeatherState] = useState({})
    useEffect(()=>{

        const handleCurrentWeather = async ()=>{
            const weatherData = await currentWeater()
             
            setCurrentWeatherState(weatherData)


        }
        handleCurrentWeather()

    },[])
  return (
    <div>
        <h1>Home page</h1>
        <h2>{currentWeatherState.temp}</h2>
        <h3>{currentWeatherState.humidity}</h3>
        <h4>{currentWeatherState.speed}</h4>
        <h5>{currentWeatherState.country}</h5>
        <h6>{currentWeatherState.temp_min}</h6>
        <h7>{currentWeatherState.name}</h7>
    </div>
  )
}

