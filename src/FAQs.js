import React from 'react'
import { useRef, useState, useEffect } from 'react'
import './FAQs.css'
import FaqCard from './FaqCard'
import faqsDice from './images/faqsDice.png'
import faqsPawn from './images/faqsPawn.png'

export default function FAQs() {
    const topContainerRef = useRef(null)
    const innerContainerRef = useRef(null)
    const squareSize = 130
    const [height, setHeight] = useState(null)
    const [numTop, setNumTop] = useState(null)
    const [numSide, setNumSide] = useState(null)
    const [topBorderSquareWidth, setTopBorderSquareWidth] = useState(null)

    const [cardsPerRow, setCardsPerRow] = useState(3)
    const [showBorder, setShowBorder] = useState(true)

    const faqs = [
        {question: "What is a women-centric hackathon?", answer: "In general, a hackathon is a collaborative event where people work together or alone to solve a problem or create a product in a short amount of time! They can vary in length, but they are usually more than 24 hours. Specifically, our hackathon focuses on creating solutions to women-oriented issues and empowering women and minorities in the tech industry."},
        {question: "Who can attend?", answer: "Our hackathon is open to all!"},
        {question: "Do I need to be a CS major or minor?", answer: "Nope, anyone can attend! Whether this is your first time coding or your 3rd hackathon, we'll have several resources (like workshops and technical mentors) to help you along the way!"},
        {question: "How are teams found? How many memembers can I have on my team?", answer: "At the beginning of the hackathon, we'll host workshops where you can meet other participants, connect with familiar faces, and join team-forming activities to find people you'd like to work with. If you're unable to form a team beforehand, don't worry! And there is always discord, to start chatting and find people you would want to be in a team with! Whether you're comming with a preformed team or starting fresh, there's plenty of opportunity to collaborate and meet new people! You can either choose to go solo or have up to 4 people in your team!"},
        {question: "Will there be resources for beginners or help in general?", answer: "During the hackathon, there will be a helpdesk staffed by other students with diverse skillsets who can assist with debugging, technical questions, or guidance at any stage of your project. Additionally, representatives from our sponsor companies will be present, walking around to offer their expertise and provide any guidance they can to help you succeed. Whether you're tackling a tricky problem or brainstorming ideas, support will always be close by!"},
        {question: "Will it be compulsory to attend in person?", answer: "Yes, this is an in-person event, especially for the opening and closing cerimonies, which are key parts of the experience. However, once hacking begins, you're free to drop in an out if you feel like you work better in a different environment. We encourage you to stay connected and take advantage of the resources and energy of the event space, but ultimately, your comfort and productivity will come first!"},
        {question: "When will applications open and close?", answer: "Applications will open November 25, 2025 and close January 21, 2026!"},
        {question: "Are there travel reimbursements or scholarships provided?", answer: "While we do not provide travel reimbursements or scholarships, the hackathon offers plenty of exiting prizes from our sponsor companies, exclusive swag, and valuable networking opportunities to make your experience worthwhile!"},
        {question: "What skills or experience would make someone a strong canidate for participating in this hackathon?", answer: "The most important qualities are a willingness to learn and excitement to create! We'll have plenty of beginner-friendly workshops to help those just getting started. Last year, we had participants from a variety of majors who walked away with new skills and experiences. While having a basic understanding for frontend or backend development can be helpful, it's not a requirement—bringing a create idea or project you're passionate about is more than enough to get started!"}
    ]

    useEffect(() => {
        function widthUpdate() {
            if (topContainerRef.current && innerContainerRef.current) {
                const width = topContainerRef.current.getBoundingClientRect().width

                if (width < 775) {
                    setShowBorder(false)
                }
                else {
                    setShowBorder(true)
                }

                if (width < 1025) {
                    setCardsPerRow(1)
                }
                else if (width < 1275) {
                    setCardsPerRow(2)
                }
                else {
                    setCardsPerRow(3)
                }
            }
        }

        widthUpdate()

        window.addEventListener('resize', widthUpdate)

        return () => window.removeEventListener('resize', widthUpdate)
    }, [])

    useEffect(() => {
        if (!innerContainerRef.current || !topContainerRef.current) return;

        const observer = new ResizeObserver(() => {
            const width = topContainerRef.current.getBoundingClientRect().width;
            const height = innerContainerRef.current.getBoundingClientRect().height;

            const numTop = Math.floor(width / squareSize);
            const numSide = Math.floor(height / squareSize);

            setHeight(height);
            setNumSide(numSide);
            setNumTop(numTop);
            setTopBorderSquareWidth(width / numTop);
        })

        observer.observe(innerContainerRef.current)

        return () => observer.disconnect()
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

       for (let i = 0; i < faqs.length; i += cardsPerRow) {
            rows.push(
            <div className="faqs-question-card-row" key={i} style={{justifyContent: cardsPerRow === 1 ? 'center' : 'space-between'}}>
                {faqs.slice(i, i + cardsPerRow).map((faq, idx) => (
                    <FaqCard
                        key={i + idx}
                        front={faq.question}
                        back={faq.answer}
                        backColor={getCardColor(i + idx)}
                    />
                ))}
            </div>
            )
        }

        return rows
    }

    function renderStar(size, color) {
        const points = [];
        const cx = size / 2;
        const cy = size / 2;
        const outerRadius = size / 2;
        const innerRadius = outerRadius * 0.5;

        for (let i = 0; i < 18; i++) {
            const angle = (Math.PI * 2 * i) / 18 - Math.PI / 2;
            const r = i % 2 === 0 ? outerRadius : innerRadius;
            const x = cx + r * Math.cos(angle);
            const y = cy + r * Math.sin(angle);
            points.push(`${x},${y}`);
        }

        return (
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            <polygon points={points.join(' ')} fill={color} />
            </svg>
        );
    }

    return (
        <div className="faqs-container" ref={topContainerRef}>
            {showBorder &&
                <img src={faqsDice} style={{position: "absolute", top: squareSize / 2, left: topBorderSquareWidth / 2}} alt=""/>
            }

            {showBorder &&
                <img src={faqsPawn} style={{position: "absolute", bottom: squareSize / 2, right: topBorderSquareWidth / 1.5}} alt=""/>
            }

            {showBorder && 
                <div className="faqs-top-border">
                    {Array.from({ length: numTop }, (_, i) => (
                        <div
                            key={i}
                            className="faqs-border-square"
                            style={{ height: squareSize, width: topBorderSquareWidth, backgroundColor: getBorderColor(i)}}
                        >
                            {i === 2 &&
                                renderStar(squareSize - 24, "#2F3F5E")
                            }
                        </div>
                    ))}
                </div>
            }

            <div className="faqs-middle-container">

                {showBorder &&
                    <div className="faqs-side-border" style={{height: height}}>
                        {Array.from({ length: numSide }, (_, i) => (
                            <div
                                key={i}
                                className="faqs-border-square"
                                style={{display: 'block', flex: 1, width: topBorderSquareWidth, backgroundColor: getBorderColor((2 * numTop) + (2 * numSide) - 1 - i)}}
                            />
                        ))}
                    </div>
                }

                <div className="faqs-inner-container" ref={innerContainerRef}>
                    <h2>Rules of the Game</h2>
                    <div>
                        {renderCards()}
                    </div>
                </div>
                
                {showBorder &&
                    <div className="faqs-side-border" style={{height: height}}>
                        {Array.from({ length: numSide }, (_, i) => (
                            <div
                                key={i}
                                className="faqs-border-square"
                                style={{display: 'block', flex: 1, width: topBorderSquareWidth, backgroundColor: getBorderColor(numTop + i)}}
                            />
                        ))}
                    </div>
                }
            </div>

            {showBorder && 
                <div className="faqs-top-border">
                    {Array.from({ length: numTop }, (_, i) => (
                        <div
                            key={i}
                            className="faqs-border-square"
                            style={{ height: squareSize, width: topBorderSquareWidth, backgroundColor: getBorderColor(numSide + (2 * numTop) - 1 - i)}}
                        >
                            {i !== numSide - 1 && (numSide + (2 * numTop) - 1 - i) % 5 === 0 &&
                                renderStar(squareSize - 24, "#D59EB2")
                            }
                        </div>
                    ))}
                </div>
            }
        </div>
    )
  }