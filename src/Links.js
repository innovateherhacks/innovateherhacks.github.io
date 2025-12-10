import React from 'react';
import './Links.css';

function Links() {
  const handleClick = (role) => {
    if (role === 'Participant') {
      window.open(
        'https://docs.google.com/forms/d/e/1FAIpQLSd10EgtCwXYKCL5bS-iTgR9OKEx8DV6fRsYHr50fS7UnjNZjQ/viewform',
        '_blank',
        'noopener,noreferrer'
      );
      return;
    } else if (role === 'Mentor') {
      window.open(
        'https://docs.google.com/forms/d/e/1FAIpQLSeJzBh-vcBuUJw-zsX7Q_pvdeP-ZB0L_l0C7vZYMbGTfEmh4Q/viewform?usp=header',
        '_blank',
        'noopener,noreferrer'
      );
      return;
    } else if (role === 'Volunteer') {
      window.open(
        'https://docs.google.com/forms/d/e/1FAIpQLSd6dqDv8DIkS88vzCbUoFfc_3GX9RQVPDdAovRItUBnlZLUDQ/viewform',
        '_blank',
        'noopener,noreferrer'
      );
      return;
    }
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
