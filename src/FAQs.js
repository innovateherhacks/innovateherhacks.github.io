import React from 'react'
import { useRef, useState, useEffect } from 'react'
import './FAQs.css'
import FaqCard from './FaqCard'

export default function FAQs() {
    const topContainerRef = useRef(null)
    const innerContainerRef = useRef(null)
    const squareSize = 150
    const [height, setHeight] = useState(null)
    const [numTop, setNumTop] = useState(null)
    const [numSide, setNumSide] = useState(null)
    const [topBorderSquareWidth, setTopBorderSquareWidth] = useState(null)

    const faqs = [
        {question: "What is a women-centric hackathon?", answer: "Answer"},
        {question: "Who can attend?", answer: "Answer"},
        {question: "Do I need to be a CS major or minor?", answer: "Answer"},
        {question: "How are temas found? How many memembers can I have on my team?", answer: "Answer"},
        {question: "Will there be resources for beginners or help in general?", answer: "Answer"},
        {question: "Will it be compulsory to attend in person?", answer: "Answer"}
    ]

    useEffect(() => {
        function updateDimensions() {
            if (topContainerRef.current && innerContainerRef.current) {
                const width = topContainerRef.current.getBoundingClientRect().width
                const height = innerContainerRef.current.getBoundingClientRect().height

                const numTop = Math.floor(width / squareSize)
                const numSide = Math.floor(height / squareSize)

                setNumTop(numTop);
                setTopBorderSquareWidth(width / numTop);
                setNumSide(numSide);
                setHeight(height);
            }
        }

        updateDimensions();

        window.addEventListener('resize', updateDimensions);

        return () => window.removeEventListener('resize', updateDimensions);
    }, [])

    function getBorderColor(index) {
        const colors = ['#B04467', '#CBAE51', '#506E9A', '#D59EB2', '#CBAE51']
        return colors[index % colors.length]
    }

    function getCardColor(index) {
        const colors = ['#B04467', '#D59EB2']
        return colors[index % colors.length]
    }
    
    function renderCards() {
        const rows = []

        for (let i = 0; i < faqs.length; i += 3) {
            rows.push(
                <div className="faqs-question-card-row">
                    <FaqCard front={faqs[i].question} back={faqs[i].answer} backColor={getCardColor(i)}/>

                    { faqs[i + 1] && (
                        <FaqCard front={faqs[i + 1].question} back={faqs[i + 1].answer} backColor={getCardColor(i + 1)}/>
                    )}

                    { faqs[i + 2] && (
                        <FaqCard front={faqs[i + 2].question} back={faqs[i + 2].answer} backColor={getCardColor(i + 2)}/>
                    )}
                </div>
            )
        }

        return rows
    }

    return (
        <div className="faqs-container" ref={topContainerRef}>
            <div className="faqs-top-border">
                {Array.from({ length: numTop }, (_, i) => (
                    <div
                        key={i}
                        className="faqs-border-square"
                        style={{ height: squareSize, width: topBorderSquareWidth, backgroundColor: getBorderColor(i)}}
                    />
                ))}
            </div>

            <div className="faqs-middle-container">
                <div className="faqs-side-border" style={{height: height}}>
                    {Array.from({ length: numSide }, (_, i) => (
                        <div
                            key={i}
                            className="faqs-border-square"
                            style={{display: 'block', flex: 1, width: topBorderSquareWidth, backgroundColor: getBorderColor((2 * numTop) + (2 * numSide) - 1 - i)}}
                        />
                    ))}
                </div>

                <div className="faqs-inner-container" ref={innerContainerRef}>
                    <h2>Rules of the Game</h2>
                    {/* <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem'}}>
                        {faqs.map((faq, index) => (
                            <FaqCard
                                key={index}
                                front={faq.question}
                                back={faq.answer}
                                backColor={getCardColor(index)}
                            />
                        ))}
                    </div> */}
                    <div>
                        {renderCards()}
                    </div>
                </div>

                <div className="faqs-side-border" style={{height: height}}>
                    {Array.from({ length: numSide }, (_, i) => (
                        <div
                            key={i}
                            className="faqs-border-square"
                            style={{display: 'block', flex: 1, width: topBorderSquareWidth, backgroundColor: getBorderColor(numTop + i)}}
                        />
                    ))}
                </div>
            </div>

            <div className="faqs-top-border">
                {Array.from({ length: numTop }, (_, i) => (
                    <div
                        key={i}
                        className="faqs-border-square"
                        style={{ height: squareSize, width: topBorderSquareWidth, backgroundColor: getBorderColor(numSide + (2 * numTop) - 1 - i)}}
                    />
                ))}
            </div>
        </div>
    )
  }