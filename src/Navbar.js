import './Navbar.css';

const Navbar = () => {

    return (
    <div className="navbar">
      <ul className="nav-items">
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#tracks">TRACKS</a></li>
        <li><a href="#faqs">FAQ</a></li>
        <li><a href="#team">TEAM</a></li>
        <li><a href="#sponsors">SPONSORS</a></li>
        <li><a href="#applications">APPLICATIONS</a></li>
      </ul>
    </div>
  );
};

export default Navbar;