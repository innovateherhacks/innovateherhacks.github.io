import React from 'react';
import './App.css';
import AboutUs from './AboutUs';
import ExecutiveBoard from './ExecutiveBoard';
import Links from './Links';
import Sponsors from './Sponsors';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <AboutUs />
      <Links />
      <ExecutiveBoard />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
