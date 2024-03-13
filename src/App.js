import logo from './logo.svg';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
// import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import About from './Routes/About';
import Event from './Routes/Event';
import Team from './Routes/Team';
import Newsletter from './Routes/Newsletter';
import Handbook from './Routes/Handbook';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/about' element={<About/>} ></Route>
          <Route path='/event' element={<Event/>} ></Route>
          <Route path='/team' element={<Team/>} ></Route>
          {/* <Route path='/gallery' element={<Gallery/>} ></Route> */}
          <Route path='/newsletter' element={<Newsletter/>} ></Route>
          <Route path='/handbook' element={<Handbook/>} ></Route>
        </Routes>
    </div>
  );
}

export default App;
