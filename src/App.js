import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react';

import NavBar from './Components/Navbar/NavBar';
import { HomePage } from './Pages/HomePage/HomePage';
import Register from './Pages/Register/Register';

function App() {

  const [currentForm, setCurrentForm] = useState("Login");

    const toggleForm = (formName) => {
      setCurrentForm(formName);
    }

  return (
    <div className="App">

      <BrowserRouter>
      <NavBar />
      {
        currentForm === "Login" ? <login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path='/Home' element={<HomePage/>}/>

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
