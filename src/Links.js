import React from 'react';
import './Links.css';

function Links() {
  return (
    <div className="links-container">
      <h2 className="links-heading">READY? CHOOSE YOUR MODE:</h2>
      <div className="links-boxes">
        <a className="link-item" href="https://example.com/participant" target="_blank" rel="noopener noreferrer">
          <img className="link-img" src="/Participants.png" alt="Participant" />
          <div className="box-label">Participant</div>
        </a>
        <a className="link-item" href="https://example.com/mentor" target="_blank" rel="noopener noreferrer">
          <img className="link-img" src="/Mentors.png" alt="Mentor" />
          <div className="box-label">Mentor</div>
        </a>
        <a className="link-item" href="https://forms.gle/J5oG23hM2XbGd3X87" target="_blank" rel="noopener noreferrer">
          <img className="link-img" src="/Volunteers.png" alt="Volunteer" />
          <div className="box-label">Volunteer</div>
        </a>
      </div>
    </div>
  );
}

export default Links;