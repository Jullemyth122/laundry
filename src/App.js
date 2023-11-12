import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import './components/navbar/navbar.scss'
import Home from './components/Home';
import './components/home.scss'

import Lenis from "@studio-freight/lenis";
import { useEffect } from 'react';
import About from './components/About';
import Books from './components/Books';
import Contact from './components/Contact';
import Services from './components/Services';


function App() {

  useEffect(() => {
      const lenis = new Lenis({
          direction: "vertical", // vertical, horizontal
          gestureDirection: "vertical", // vertical, horizontal, both
          smooth: true,
          mouseMultiplier: 1.0, // sensibility
          smoothTouch: true, // Mobile
          touchMultiplier: 2, // sensibility on mobile
      })

      
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      
      requestAnimationFrame(raf)

  },[])

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/about' element={<About/>} ></Route>
          <Route path='/book' element={<Books/>} ></Route>
          <Route path='/service' element={<Services/>} ></Route>
          <Route path='/contact' element={<Contact/>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
