import React from 'react'
import './App.css'
import AboutUs from './AboutUs'
import ExecutiveBoard from './ExecutiveBoard'
import Links from './Links'
import FAQs from './FAQs'
import Footer from './Footer'
import Banner from './Banner.js';
import Navbar from './Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TitleCard/>
      <section id="about">
        <AboutUs/>
      </section>
      <Links/>
      <section id="team">
        <ExecutiveBoard/>
      <FAQs/>
      </section>
      <Footer/>
    </div>
  )
}

export default App;
