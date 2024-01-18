import { useEffect , useState} from "react"

export const HomePage = () => {
const [currentWeatherState, setCurrentWeatherState] = useState({})
    useEffect(()=>{

        const handleCurrentWeather = async ()=>{
            const weatherData = await currentWeather()
            setCurrentWeatherState(weatherData)


        }
        handleCurrentWeather

    })
  return (
    <div>
        <h1>Home page</h1>
        <h2>{currentWeatherState.temp}</h2>
      
    </div>
  )
}

