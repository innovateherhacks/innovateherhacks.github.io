import React from 'react';
import './App.css';
import AboutUs from './AboutUs';
import ExecutiveBoard from './ExecutiveBoard';
import Banner from './Banner.js';
import Navbar from './Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <AboutUs />
      <ExecutiveBoard />
    </div>
  );
}

export default App;
