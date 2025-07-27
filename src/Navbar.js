import { useState, useEffect } from 'react';
import '../assets/style.css';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 60) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);    
        }

        setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
    <div className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}>
      <ul className="nav-items">
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">TRACKS</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">TEAM</a></li>
        <li><a href="#">SPONSORS</a></li>
        <li><a href="#">APPLICATIONS</a></li>
      </ul>
    </div>
  );
};

export default Navbar;