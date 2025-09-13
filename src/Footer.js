import React from 'react';
import './Footer.css';
import { ReactComponent as InfoIcon } from './images/info.svg';
import { ReactComponent as EmailIcon } from './images/mail.svg';
import { ReactComponent as InstagramIcon } from './images/instagram.svg';
import DiskIcon from './images/floppyDisk.png';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-items">
          {/* Info / Code of Conduct */}
          <div className="footer-item">
            <span className="footer-icon footer-round">
              <InfoIcon />
            </span>
            <a
              href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
              className="footer-link"
              target="_blank" rel="noopener noreferrer"
            >
              MLH Code of Conduct
            </a>
          </div>
          {/* Email */}
          <div className="footer-item">
            <span className="footer-icon footer-round">
              <EmailIcon />
            </span>
             <a
              href="mailto:innovateherhacks@gmail.com"
              className="footer-link"
            >
              innovateherhacks@gmail.com
            </a>

          </div>
          {/* Instagram */}
          <div className="footer-item">
            <span className="footer-icon footer-round">
              <InstagramIcon />
            </span>
            <a
              href="https://www.instagram.com/innovateherhacks?utm_source=ig_web_button_share_sheet&igsh=Y2E4cGR5czdnbWxr"
              className="footer-link"
              target="_blank" rel="noopener noreferrer"
            >
              @innovateherhacks
            </a>
          </div>
        </div>
      <div className="footer-floppy">
        <img src={DiskIcon} alt="Floppy disk" className="footer-floppy-img" />
      </div>

      </div>
    </footer>
  );
}

