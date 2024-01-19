import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react';

import NavBar from './Components/Navbar/NavBar';
import { HomePage } from './Pages/HomePage/HomePage';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';

function App() {



    

  return (
    <div className="App">

      <BrowserRouter>
      <NavBar />
  
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path='/Home' element={<HomePage/>}/>

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
