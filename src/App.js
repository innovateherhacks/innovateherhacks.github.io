/*import React from 'react';
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
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/tracks" element={<TracksPage />} />
          <Route path="/links" element={<Links />} />
          <Route path="/executive-board" element={<ExecutiveBoard />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/teams/:teamId" element={<TeamLanding />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;*/

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


function App() {
  return (
    <div className="App"> 
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