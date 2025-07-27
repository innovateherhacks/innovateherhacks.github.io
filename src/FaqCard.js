import React from 'react'
import { useState } from 'react'
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
          <p>{front}</p>
        </div>
        
        <div className="faq-card-back" style={{ backgroundColor: backColor }}>
          <p>{back}</p>
        </div>
      </div>
    </button>
  )
}