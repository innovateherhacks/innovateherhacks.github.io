import React from 'react';
import './Sponsors.css';

import l3harris from './sponsor logos/LHX_BIG.png';
import chamberlain from './sponsor logos/chamberlain group.png';
import whpc from './sponsor logos/WHPC_LOGO.png';
import wolfram from './sponsor logos/WolframCorporateLogo.svg.png';
import caterpillar from './sponsor logos/CAT_BIG.png';
import mlh from './sponsor logos/mlh-logo-black.png';
import groq from './sponsor logos/Groq_logo.svg.png';
import purdue_cs from './sponsor logos/Purdue CS.png';
import lockheed from './sponsor logos/lockheed_martin_logo.png';
import oracle from './sponsor logos/oracle.png';
import badger from './sponsor logos/badger.jpg';
import stickers from './sponsor logos/stickers.png';
import capitalone from './sponsor logos/capitalone.png';
import whtech from './sponsor logos/W_HT_Women_Logo.png';

function Sponsors() {
  const sponsors = [
    { src: oracle, alt: 'Oracle' },
    { src: capitalone, alt: 'Capital One' },
    { src: lockheed, alt: 'Lockheed Martin' },
    { src: caterpillar, alt: 'Caterpillar' },
    { src: l3harris, alt: 'L3 Harris' },
    { src: chamberlain, alt: 'Chamberlain Group' },
    { src: whpc, alt: 'WHPC Purdue' },
    { src: wolfram, alt: 'Wolfram' },
    { src: mlh, alt: 'Major League Hacking' },
    { src: groq, alt: 'Groq' },
    { src: purdue_cs, alt: 'Purdue CS' },
    { src: badger, alt: 'Badger LLC' },
    { src: stickers, alt: 'Stickers', href: 'https://www.purebuttons.com/' },
    { src: whtech, alt: 'WHTech' }
  ];

  return (
    <div className="sponsors-container">
      <h2 className="sponsors-heading">SPONSORS</h2>
      <div className="sponsor-grid">
        {sponsors.map((s, index) => 
        s.href ? (
            <a
              key={index}
              href={s.href}
              target="_blank"
              rel="noreferrer"
            >
              <img src={s.src} alt={s.alt} className="sponsor-logo" />
            </a>
        ) : (
          <img key={index} src={s.src} alt={s.alt} className={s.alt === 'Capital One' ? 'sponsor-logo capital-one-logo' : 'sponsor-logo'} />
        ))}
      </div>
    </div>
  );
}

export default Sponsors;