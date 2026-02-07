import React, { useState } from 'react';
import './App.css';
import AboutUs from './AboutUs';
import TracksPage from './TracksPage';
import ExecutiveBoard from './ExecutiveBoard';
import Links from './Links';
import FAQs from './FAQs';
import Teams from './Teams';
import Sponsors from './Sponsors';
import Footer from './Footer';

import TitleCard from './TitleCard.js';
import Navbar from './Navbar.js';
import Announcements from './Announcements.js';
import AuthSection from './AuthSection';

import ParticipantGuide from './ParticipantGuide.js';
import MentorMatching from './MentorMatching.js';

function App() {
  const [accessToken, setAccessToken] = useState(null);
  return (
    <div className="App">
      <a
        id="mlh-trust-badge"
        className="mlh-badge"
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=gray"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-gray.svg"
          alt="Major League Hacking 2026 Hackathon Season"
        />
      </a> 
      <Navbar/>
      <TitleCard/>
      <section id="auth">
        <AuthSection onAccessToken={setAccessToken} />
      </section>
      <section id="announcements">
        <Announcements accessToken={accessToken} />
      </section>
      <section id="participantguide">
        <ParticipantGuide/>
      </section>
      <section id="mentormatching">
        <MentorMatching/>
      </section>
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