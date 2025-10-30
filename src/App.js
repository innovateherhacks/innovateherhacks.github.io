import React from 'react'
import './App.css'
import AboutUs from './AboutUs'
import ExecutiveBoard from './ExecutiveBoard'
import Links from './Links'
import FAQs from './FAQs'
import Footer from './Footer'
import TitleCard from './TitleCard.js';
import Navbar from './Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TitleCard/>
      <section id="about">
        <AboutUs/>
      </section>
      <section id="applications">
        <Links/>
      </section>
      <section id="team">
        <ExecutiveBoard/>
      </section>
      <section id="faqs">
        <FAQs/>
      </section>
      <Footer/>
    </div>
  )
}

export default App;
