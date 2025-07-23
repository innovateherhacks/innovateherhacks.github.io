import React from 'react';
import './ExecutiveBoard.css';

const execBoard = [
  { name: 'Adrienne Peters', role: 'Director / President', image: require('./images/AdriennePeters.JPG'),
    className: 'board-card red' },
  { name: 'Tanvi', role: 'Vice President / Secretary', image: require('./images/TanviDhawade.JPG'), 
    className: 'board-card cream' },
  { name: 'Elina', role: 'Finance Lead / Treasurer', image: require('./images/Elina.jpg'), 
    className: 'board-card pink' },
  { name: 'Oviya', role: 'Director of Membership Engagement / Club Operations Lead', image: require('./images/Oviya.jpg'), 
    className: 'board-card gold' },
  { name: 'Ramya', role: 'Director of Operations and Strategy', image: require('./images/Ramya.jpg'), 
    className: 'board-card gold' },
  { name: 'Sanika', role: 'Logistics Lead', image: require('./images/Sanika.jpg'), 
    className: 'board-card pink' },
  { name: 'Diana', role: 'Marketing Lead', image: require('./images/Diana.jpg'), 
    className: 'board-card red' },
  { name: 'Vanessa', role: 'Design Lead', image: require('./images/Vanessa.jpg'), 
    className: 'board-card cream' },
  { name: 'Saanvi', role: 'Development Co-Lead', image: require('./images/SaanviSharma.jpg'), 
    className: 'board-card cream' },
  { name: 'Khushi', role: 'Development Co-Lead', image: require('./images/Khushi.jpg'), className: 'board-card red' },
  { name: 'Suhani', role: 'Program Co-Lead', image: require('./images/SuhaniYadav.jpg'), 
    className: 'board-card gold' },
  { name: 'Sumukhi', role: 'Program Co-Lead', image: require('./images/SumukhiGupta.jpg'), className: 'board-card pink' },
];

export default function ExecutiveBoard() {
  return (
    <section className="exec-board-section">
      <h2 className="exec-board-title">Executive Board</h2>
      <div className="exec-board-grid">
        {execBoard.map((member, i) => (
          <div className={member.className} key={member.name}>
            <img src={member.image} alt={member.name} className="board-avatar-img" />
            <div className="board-name">{member.name}</div>
            <div className="board-role">{member.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

