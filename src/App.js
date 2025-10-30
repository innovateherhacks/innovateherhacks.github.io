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

import Banner from './Banner.js';
import Navbar from './Navbar.js';

function App() {
  return (
    <div className="App"> 
      <Navbar/>
      <Banner/>
      <AboutUs />
      <TracksPage />
      <ExecutiveBoard />  
      <Links />
      <FAQs />
      <Teams />
      <Sponsors />
      <Footer />
    </div>
  )
}

export default App;
