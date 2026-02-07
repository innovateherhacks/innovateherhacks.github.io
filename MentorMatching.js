import React from 'react';
import './MentorMatching.css';

export default function MentorMatching() {
  return (
    <div className="participant-guide-container">
      <h1>MENTOR MATCHING</h1>

      <div className="mentor-box-row">
        <div className="mentor-box participant-box">
          <h2>Participants</h2>
          <p>
            Fill out the form to be matched with a mentor who aligns with your
            goals and interests.
          </p>
          <a
            href="https://proj-innovateher-mentor-matching.onrender.com/mentee"
            target="_blank"
            rel="noopener noreferrer"
            className="mentor-box-link"
          >
            Find a Mentor
          </a>
        </div>

        <div className="mentor-box mentor-box-dark">
          <h2>Mentors</h2>
          <p>
            Sign up to mentor participants and help guide them through their
            journey.
          </p>
          <a
            href="https://proj-innovateher-mentor-matching.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mentor-box-link"
          >
            Become a Mentor
          </a>
        </div>
      </div>
    </div>
  );
}