import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import NavBar from './Components/Navbar/NavBar';
import { HomePage } from './Pages/HomePage/HomePage';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import { useState } from 'react';

function App() {

  const [currentForm, setCurrentForm] = useState("Login");

  return (
    <div className="App">

      <BrowserRouter>
      <NavBar />
      {
        currentForm === "login" ? <login /> : <Register />
      }
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path='/Home' element={<HomePage/>}/>

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
