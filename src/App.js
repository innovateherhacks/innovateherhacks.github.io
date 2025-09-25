import React from 'react'
import './App.css'
import AboutUs from './AboutUs'
import TracksPage from './TracksPage';
import ExecutiveBoard from './ExecutiveBoard'
import Links from './Links'
import FAQs from './FAQs'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <AboutUs/>
      <TracksPage />
      <Links/>
      <ExecutiveBoard/>
      <FAQs/>
      <Footer/>
    </div>
  )
}

export default App;
