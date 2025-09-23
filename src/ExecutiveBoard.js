import React from 'react';
import './ExecutiveBoard.css';

const execBoard = [
  { name: 'Adrienne Peters', role: 'Director / President', image: require('./images/AdriennePeters.JPG'),
    className: 'board-card red' },
  { name: 'Tanvi Dhawade', role: 'Vice President / Secretary', image: require('./images/TanviDhawade.JPG'), 
    className: 'board-card cream' },
  { name: 'Elina Shah', role: 'Finance Lead / Treasurer', image: require('./images/Elina.jpg'), 
    className: 'board-card pink' },
  { name: 'Oviya Arulraj', role: 'Director of Membership Engagement / Club Operations Lead',
    image: require('./images/Oviya.jpg'), className: 'board-card gold' },
  { name: 'Ramya Rajaram', role: 'Director of Operations and Strategy', image: require('./images/Ramya.jpg'), 
    className: 'board-card cream' },
  { name: 'Sanika Manjrekar', role: 'Logistics Lead', image: require('./images/Sanika.jpg'), 
    className: 'board-card red' },
  { name: 'Diana He', role: 'Marketing Lead', image: require('./images/Diana.jpg'), 
    className: 'board-card gold' },
  { name: 'Vanessa Uy', role: 'Design Lead', image: require('./images/Vanessa.jpg'), 
    className: 'board-card pink' },
  { name: 'Saanvi Sharma', role: 'Development Co-Lead', image: require('./images/SaanviSharma.jpg'), 
    className: 'board-card red' },
  { name: 'Khushi Viramgami', role: 'Development Co-Lead', image: require('./images/Khushi.jpg'),
    className: 'board-card cream' },
  { name: 'Suhani Yadav', role: 'Program Co-Lead', image: require('./images/SuhaniYadav.jpg'), 
    className: 'board-card pink' },
  { name: 'Sumukhi Gupta', role: 'Program Co-Lead', image: require('./images/SumukhiGupta.jpg'),
    className: 'board-card gold' },
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

