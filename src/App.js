/*import React from 'react';
import './App.css';
import AboutUs from './AboutUs';
import ExecutiveBoard from './ExecutiveBoard';

function App() {
  return (
    <div className="App">
      <AboutUs />
      <ExecutiveBoard />
    </div>
  );
}

export default App;*/

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import AboutUs from './AboutUs';
import ExecutiveBoard from './ExecutiveBoard';
import Teams from './Teams'; //teams page added
import TeamLanding from './TeamLanding';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path="/" element={<Navigate to="/about" />} />

          {/* Main pages*/}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/executive-board" element={<ExecutiveBoard />} />
          <Route path="/teams" element={<Teams />} />

          {/* Dynamic team pages */}
          <Route path="/teams/:teamId" element={<TeamLanding />} />


          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

