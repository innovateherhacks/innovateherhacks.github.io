import React from 'react';
import './App.css';
import AboutUs from './AboutUs';
import TracksPage from './TracksPage';
import ExecutiveBoard from './ExecutiveBoard';
import Links from './Links';
import Sponsors from './Sponsors';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <AboutUs />
      <TracksPage />
      <Links />
      <ExecutiveBoard />
      <FAQs/>
      <Sponsors />
      <Footer />
    </div>
  )
}

export default App;
