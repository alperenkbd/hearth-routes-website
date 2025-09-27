import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="brand-name">Hearth Routes</span>
        </Link>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/invoices" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Invoices
          </Link>
          <Link to="/privacy" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Privacy
          </Link>
          <Link to="/terms" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Terms
          </Link>
          <Link to="/support" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Support
          </Link>
        </nav>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
