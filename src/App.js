import React from 'react'
import './App.css'
import AboutUs from './AboutUs'
import Tracks from './Tracks';
import ExecutiveBoard from './ExecutiveBoard'
import Links from './Links'
import FAQs from './FAQs'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <AboutUs/>
      <Tracks />
      <Links/>
      <ExecutiveBoard/>
      <FAQs/>
      <Footer/>
    </div>
  )
}

export default App;
