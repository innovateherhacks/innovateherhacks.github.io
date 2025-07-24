import React from 'react'
import './FAQs.css'
import FaqCard from './FaqCard'


export default function FAQs() {
    return (
        <div className="faqs-container">
            <div className="faqs-inner-container">
                <h2>Rules of the Game</h2>

                <div className="faqs-question-card-row" style={{ paddingBottom: '5vh' }}>
                    <FaqCard front="Question 1" back="Answer 1" backColor="#B04467"/>
                    <FaqCard front="Question 2" back="Answer 2" backColor="#D59EB2"/>
                    <FaqCard front="Question 3" back="Answer 3" backColor="#B04467"/>
                </div>

                <div className="faqs-question-card-row" style={{ paddingTop: '5vh' }}>
                    <FaqCard front="Question 4" back="Answer 4" backColor="#D59EB2"/>
                    <FaqCard front="Question 5" back="Answer 5" backColor="#B04467"/>
                    <FaqCard front="Question 6" back="Answer 6" backColor="#D59EB2"/>
                </div>

            </div>
        </div>
    )
  }