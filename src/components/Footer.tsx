import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="brand-name">Hearth Routes</h3>
            <p className="footer-tagline">
              Every route is a memory. Every memory is a legacy. ❤️
            </p>
            <p className="footer-tagline">
              Create lasting travel legacies that inspire future generations.
            </p>
          </div>
          <div className="footer-section">
            <h4>Get the App</h4>
            <div className="download-buttons">
              <a href="#" className="download-btn ios">
                <img src="/app-store-badge.svg" alt="Download on the App Store" className="store-badge" />
              </a>
              <a href="#" className="download-btn android">
                <img src="/google-play-badge.svg" alt="Get it on Google Play" className="store-badge" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 <span className="brand-name">Hearth Routes</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
