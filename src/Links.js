import React from 'react';
import './Links.css';

function Links() {
  const handleClick = (role) => {
    let message = '';

    if (role === 'Participant') {
      message = 'Sign-ups for Participants open on November 25th! Please check back then.';
    } else if (role === 'Mentor') {
      message = 'Sign-ups for Mentors open on December 1st! Please check back then.';
    } else if (role === 'Volunteer') {
      message = 'Sign-ups for Volunteers open on December 1st! Please check back then.';
    }

    alert(message);
  };

  return (
    <div className="links-container">
      <h2 className="links-heading">READY? CHOOSE YOUR MODE:</h2>
      <div className="links-boxes">
        <div className="link-item" onClick={() => handleClick('Participant')}>
          <img className="link-img" src="/Participants.png" alt="Participant" />
          <div className="box-label">Participant</div>
        </div>
        <div className="link-item" onClick={() => handleClick('Mentor')}>
          <img className="link-img" src="/Mentors.png" alt="Mentor" />
          <div className="box-label">Mentor</div>
        </div>
        <div className="link-item" onClick={() => handleClick('Volunteer')}>
          <img className="link-img" src="/Volunteers.png" alt="Volunteer" />
          <div className="box-label">Volunteer</div>
        </div>
      </div>
    </div>
  );
}

export default Links;