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
              Create lasting travel legacies!
            </p>
          </div>
          <div className="footer-section">
            <h4>Get the App</h4>
            <div className="footer-app-badges">
              <a href="https://apps.apple.com/app/idYOUR_APP_ID" target="_blank" rel="noopener noreferrer" className="footer-store-badge">
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                     alt="Download on the App Store" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=your.app.id" target="_blank" rel="noopener noreferrer" className="footer-store-badge">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                     alt="Get it on Google Play" />
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
