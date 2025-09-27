import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Helmet>
        <title>Hearth Routes - Every Route is a Memory, Every Memory is a Legacy</title>
        <meta name="description" content="With Hearth Routes, save your memories, and share them with your loved ones. Create lasting travel legacies that inspire future generations." />
        <meta name="keywords" content="travel, memories, legacy, family, journey, routes, Hearth Routes" />
        <meta property="og:title" content="Hearth Routes - Every Route is a Memory, Every Memory is a Legacy" />
        <meta property="og:description" content="With Hearth Routes, save your memories, and share them with your loved ones. Create lasting travel legacies that inspire future generations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hearthroutes.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hearth Routes - Every Route is a Memory, Every Memory is a Legacy" />
        <meta name="twitter:description" content="With Hearth Routes, save your memories, and share them with your loved ones. Create lasting travel legacies that inspire future generations." />
      </Helmet>
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
              With <span className="brand-name">Hearth Routes</span>, save your memories,<br /> and share them with your loved ones. ❤️
            </p>
            <div className="hero-buttons">
              <a href="https://apps.apple.com/app/idYOUR_APP_ID" target="_blank" rel="noopener noreferrer" className="store-badge">
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                     alt="Download on the App Store" width="150"/>
              </a>
              <a href="https://play.google.com/store/apps/details?id=your.app.id" target="_blank" rel="noopener noreferrer" className="store-badge">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                     alt="Get it on Google Play" width="150"/>
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
