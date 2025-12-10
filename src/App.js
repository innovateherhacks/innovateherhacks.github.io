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
      <a
        id="mlh-trust-badge"
        style={{
          display: 'block',
          maxWidth: '100px',
          minWidth: '60px',
          position: 'fixed',
          right: '50px',
          top: 0,
          width: '10%',
          zIndex: 10000
        }}
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=gray"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-gray.svg"
          alt="Major League Hacking 2026 Hackathon Season"
          style={{ width: '100%' }}
        />
      </a>
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
