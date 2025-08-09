import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import './FaqCard.css'

export default function FaqCard({ front, back, backColor }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      className={`faq-card-button ${flipped ? 'is-flipped' : ''}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="faq-card-container">
        <div className="faq-card-front">
          <FontAwesomeIcon className="faq-card-flip-icon" icon={faSyncAlt}/>
          <p>{front}</p>
        </div>

        <div className="faq-card-back" style={{ backgroundColor: backColor }}>
          <FontAwesomeIcon className="faq-card-flip-icon" icon={faSyncAlt}/>
          <p>{back}</p>
        </div>
      </div>
    </button>
  )
}