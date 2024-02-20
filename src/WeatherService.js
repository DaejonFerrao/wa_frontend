
import axios from 'axios'
const APIKey = 'bf2c20a1f20c38e0a1d11eb86ac5fe91'
const city = 'London'


export const currentWeater = async (city) =>{
     
     const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`
     const currentWeather = await axios.get(URL).then(response => response.data)
     // console.log(currentWeather)

     const {name, main:{humidity, temp, temp_max, temp_min}, sys:{country},wind:{speed},coord:{lon,lat}} = currentWeather
     
     // console.log(currentWeather)

     return {name,humidity, temp, temp_max, temp_min,country,speed,lon,lat} 
}


export const getForecast = async (city) => {
     const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`
     //get the url same as above
     // get the forecast
     //log it to console
     //return the 5 day forecast, preferably formatted but it might already be formatted.
}
