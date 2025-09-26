// src/components/TracksPage.js

import React from 'react';
import './TracksPage.css';

import img1 from './images/Tracks/purdue.png';
import img2 from './images/Tracks/healthfitness.png';
import img3 from './images/Tracks/geoconnections.png';
import img4 from './images/Tracks/sustainability.png';
import img5 from './images/Tracks/financial_lit.png';

const tracks = [
  { name: 'Purdue', image: img1, className: 'track-card gold' },
  { name: 'Health & Fitness', image: img2, className: 'track-card red' },
  { name: 'Geoconnections', image: img3, className: 'track-card cream' },
  { name: 'Sustainability', image: img4, className: 'track-card cream' },
  { name: 'Financial Literacy', image: img5, className: 'track-card pink' },
];

export default function TracksPage() {
  return (
    <section className="tracks-page">
      <h2 className="tracks-title">TRACKS</h2>
      <div className="tracks-grid">
        {tracks.map((track) => (
          <div className={`track-item ${track.colorClass}`} key={track.name}>
            {/* Use imported image as src */}
            <img src={track.image} alt={track.name} className="track-icon" />
            <div className="track-label">{track.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
