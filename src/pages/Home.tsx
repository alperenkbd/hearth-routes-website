import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section with Background Image */}
      <section className="hero">
        <div className="hero-background-image"></div>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
              Every route is a memory.<br />
              Every memory is a legacy.
            </h1>
            <p className="hero-subtitle">
              With <span className="brand-name">Hearth Routes</span>, save your memories, and share them with your loved ones. ❤️
            </p>
            <div className="hero-buttons">
              <a href="#" className="download-btn ios">
                <img src="/app-store-badge.svg" alt="Download on the App Store" className="store-badge" />
              </a>
              <a href="#" className="download-btn android">
                <img src="/google-play-badge.svg" alt="Get it on Google Play" className="store-badge" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">What We Offer to Our Travelers</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Organize Your Trip Plans</h3>
              <p>Comprehensive trip planning and organization tools to make every journey seamless and memorable.</p>
            </div>
            <div className="feature-card">
              <h3>Log Your Trip Details</h3>
              <p>Detailed trip logging and documentation features to capture every moment of your adventure.</p>
            </div>
            <div className="feature-card">
              <h3>Share Your Lists and Advice</h3>
              <p>Share your travel experiences, recommendations, and advice with friends, family, and future generations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
