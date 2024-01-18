
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './Components/Navbar/NavBar';
import { HomePage } from './Pages/HomePage/HomePage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>

      </Routes>
      
      </BrowserRouter>
      <NavBar />
    </div>
  );
}

export default App;
