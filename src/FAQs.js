import React from 'react'
import './FAQs.css'


export default function FAQs() {
    return (
        <div className="faqs-container">
            <div className="faqs-inner-container">
                <h2>Rules of the Game</h2>

                <div className="faqs-question-card-row" style={{ paddingBottom: '5vh' }}>
                    <button>
                        <p>Question 1</p>
                    </button>
                    
                    <button>
                        <p>Question 2</p>
                    </button>

                    <button>
                        <p>Question 3</p>
                    </button>
                </div>

                <div className="faqs-question-card-row" style={{ paddingTop: '5vh' }}>
                    <button>
                        <p>Question 1</p>
                    </button>

                    <button>
                        <p>Question 2</p>
                    </button>

                    <button>
                        <p>Question 3</p>
                    </button>
                </div>

            </div>
        </div>
    )
  }