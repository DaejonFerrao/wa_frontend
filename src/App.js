import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';

import NavBar from './Components/Navbar/NavBar';
// import { HomePage } from './Pages/HomePage/HomePage';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import About from './Pages/About/About';
import SearchBar from './Pages/SearchBar/SearchBar';
import Weather from './Components/Weather/Weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './Components/Api/Api';
import Forecast from './Components/Forecast/Forecast';

function App() {
  const [WeatherFetch, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
   const [lat, lon] = searchData.value.split("");

  const WeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`); 
  const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`); 

    Promise.all([WeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({city: searchData.label , ...weatherResponse});
        setForecast({city: searchData.label, ...forecastResponse});

      })
      .catch((err) => console.log(err));
  }

    console.log(WeatherFetch);
    console.log(forecast);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path="/Forecast" element={<Forecast />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        {/* <Route path='/Home' element={<HomePage/>}/> */}
        </Routes>
        <SearchBar onSearchChange={handleOnSearchChange} />
        {Weather && <Weather data={WeatherFetch} />}
        {Forecast && <Forecast data={forecast}/>}
      </BrowserRouter>
    </div>
  );
}

export default App;
