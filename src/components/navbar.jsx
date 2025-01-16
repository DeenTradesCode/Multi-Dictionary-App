import React, {useState} from "react";
import {Link} from 'react-router-dom'


function NavBar() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu =() => {
        setIsMenuOpen(!isMenuOpen);
    };

return (
    <nav>
    <button onClick={toggleMenu} className="hamburger-menu">
      ☰
    </button>
    <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/random-words">Random Words</Link></li>
      <li><Link to="/search">Search</Link></li>
    </ul>
  </nav>
);

}
export default NavBar