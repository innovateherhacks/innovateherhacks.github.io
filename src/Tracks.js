import React from 'react';
import './Tracks.css';

import img1 from './images/Tracks/Purdue (1).png';
import img2 from './images/Tracks/Health (1).png';
import img3 from './images/Tracks/Geoconnections (1).png';
import img4 from './images/Tracks/Sustainability (1).png';
import img5 from './images/Tracks/FinancialLiteracy (1).png';

const tracks = [
  { name: 'Purdue', image: img1, className: 'track-card gold' },
  { name: 'Health & Fitness', image: img2, className: 'track-card red' },
  { name: 'Geoconnections', image: img3, className: 'track-card cream' },
  { name: 'Sustainability', image: img4, className: 'track-card cream' },
  { name: 'Financial Literacy', image: img5, className: 'track-card pink' },
];

export default function Tracks() {
  return (
    <section className="tracks-section">
      <h2 className="tracks-title">TRACKS</h2>
      <div className="tracks-grid">
        {tracks.map((track) => (
          <div className={track.className} key={track.name}>
            <img src={track.image} alt={track.name} className="track-img" />
            <div className="track-label">{track.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
