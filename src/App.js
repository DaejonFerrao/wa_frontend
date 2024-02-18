import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';

import NavBar from './Components/Navbar/NavBar';
import { HomePage } from './Pages/HomePage/HomePage';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import SearchBar from './Pages/SearchBar/SearchBar';
import Weather from './Components/Weather/Weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './Components/Api/Api';
import Forecast from './Components/Forecast/Forecast';
import AirQuality from './Pages/AirQuality/AirQuality';
import Health from './Pages/Health/Health';

function App() {
  const [weatherData, setCurrentWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const handleOnSearchChange = (searchData) => {
   const [lat, lon] = searchData.value.split("");

  const WeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`); 
  const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`); 

  Promise.all([WeatherFetch, forecastFetch])
    .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        console.log(forecastResponse)

        setCurrentWeatherData({city: searchData.label , ...weatherResponse});
        setForecastData({city: searchData.label, ...forecastResponse});

      })
      .catch((err) => console.log(err));
  }


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path="/Forecast" element={<Forecast />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/AirQuality" element={<AirQuality />} />
        <Route path="/Health" element={<Health />} />
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'/Home'} element={<HomePage/>}/>
        </Routes>
        <SearchBar onSearchChange={handleOnSearchChange} />
        {weatherData && <Weather data={weatherData} />}
        {forecastData && <Forecast data={forecastData}/>}
      </BrowserRouter>
    </div>
  );
}

export default App;
