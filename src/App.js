import React from 'react';
import './App.css';
import AboutUs from './AboutUs';
import ExecutiveBoard from './ExecutiveBoard';
import TitleCard from './TitleCard.js';
import Navbar from './Navbar.js';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TitleCard/>
      <section id="about">
        <AboutUs />
      </section>
      <section id="team">
        <ExecutiveBoard />
      </section>
      <Footer />
    </div>
  );
}

export default App;
