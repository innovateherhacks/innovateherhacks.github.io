import React from 'react';
import './App.css';
import AboutUs from './AboutUs';
import TracksPage from './TracksPage';
import ExecutiveBoard from './ExecutiveBoard';
import Links from './Links';
import FAQs from './FAQs';
import Teams from './Teams';
import TeamLanding from './TeamLanding';
import Sponsors from './Sponsors';
import Footer from './Footer';

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
      <section id="tracks">
        <TracksPage />
      </section>
      <ExecutiveBoard />  
      <section id="applications">
        <Links />
      </section>
      <section id="faqs">
        <FAQs/>
      </section>
      <section id="team">
        <Teams />
      </section>
      <section id="sponsors">
        <Sponsors />
      </section>
      <Footer />
    </div>
  )
}

export default App;
