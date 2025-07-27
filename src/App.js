import React from 'react';
import './App.css';
import AboutUs from './AboutUs';
import ExecutiveBoard from './ExecutiveBoard';
import Banner from './components/Banner.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <AboutUs />
      <ExecutiveBoard />
      <Navbar/>
      <Banner/>
    </div>
  );
}

export default App;
