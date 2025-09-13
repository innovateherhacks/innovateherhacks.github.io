import React, { useRef, useEffect, useState } from 'react';
import './AboutUs.css';
import img1 from './images/share1.jpg';
import img2 from './images/learn3.jpg';
import img3 from './images/share2.jpg';

const AboutUs = () => {
  const textRef = useRef(null);
  const [gridHeight, setGridHeight] = useState(400);

  // Dynamically set the grid and image size to match text height
  useEffect(() => {
    function updateHeight() {
      if (textRef.current) {
        let height = textRef.current.offsetHeight;
        // Minimum size for aesthetic and usability
        setGridHeight(Math.max(height, 280));
      }
    }
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // Calculate square size for each image cell and gap
  const gap = 16;
  const squareSize = (gridHeight - gap) / 2; // height of each left square
  const rightImgSize = gridHeight;           // right image is gridHeight x gridHeight

  return (
    <div className="aboutus-container">
      <div className="aboutus-header-section">
        <div className="aboutus-text" ref={textRef}>
          <h1>ABOUT US</h1>
          <p>
            We are the inaugural hackathon at Purdue University specifically for and by students of underrepresented identities in tech.<br /><br />
            <strong>InnovateHer is a 36-hour event open to all college students.</strong> Our purpose is to foster a warm, inclusive environment for everyone.<br /><br />
            We are committed to inspiring everyone to acknowledge and create solutions for challenges that underrepresented groups in tech encounter, while highlighting their extraordinary contributions to the tech field.
          </p>
        </div>
        <div
          className="aboutus-image-grid"
          style={{
            height: gridHeight,
            width: gridHeight,
            /*minHeight: 200,*/
            display: 'grid',
            gridTemplateRows: `${squareSize}px ${squareSize}px`,
            gridTemplateColumns: `${squareSize}px ${rightImgSize - squareSize - gap}px`,
            gap: `${gap}px`,
            alignItems: 'start',
            justifyItems: 'end',
          }}
        >
          {/* Top-left square */}
          <img
            src={img1}
            alt="Hackathon group 1"
            style={{
              gridRow: '1 / 2',
              gridColumn: '1 / 2',
              width: squareSize,
              height: squareSize,
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
          {/* Big square right */}
          <img
            src={img2}
            alt="Hackathon group 2"
            style={{
              gridRow: '1 / 3',
              gridColumn: '2 / 3',
              width: rightImgSize - squareSize - gap,
              height: gridHeight,
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
          {/* Bottom-left square */}
          <img
            src={img3}
            alt="Hackathon group 3"
            style={{
              gridRow: '2 / 3',
              gridColumn: '1 / 2',
              width: squareSize,
              height: squareSize,
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
        </div>
      </div>
      <div className="aboutus-stats-bar-fullwidth">
        <div className="aboutus-stats-bar-inner">
          <div>
            <span>
              <strong className="stats-number">36</strong> <span className="aboutus-stats-label">HOURS</span>
            </span>
          </div>
          <div>
            <span>
              <strong className="stats-number">30+</strong> <span className="aboutus-stats-label">PROJECTS</span>
            </span>
          </div>
          <div>
            <span>
              <strong className="stats-number">260+</strong> <span className="aboutus-stats-label">PARTICIPANTS</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

