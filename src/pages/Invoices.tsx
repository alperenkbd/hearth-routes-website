import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Invoices.css';

const Invoices: React.FC = () => {
  return (
    <div className="invoices">
      <Helmet>
        <title>Invoices - Hearth Routes | Purchase History & Donation Records</title>
        <meta name="description" content="View your Hearth Routes purchase history and donation records. We donate 15% of income to orphaned children when you upgrade to premium." />
        <meta name="keywords" content="invoices, purchase history, donations, premium, Hearth Routes, charity" />
        <meta property="og:title" content="Invoices - Hearth Routes | Purchase History & Donation Records" />
        <meta property="og:description" content="View your Hearth Routes purchase history and donation records. We donate 15% of income to orphaned children when you upgrade to premium." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hearthroutes.com/invoices" />
      </Helmet>
      <div className="container">
        <div className="invoices-header">
          <h1 className="page-title">Invoices</h1>
          <p className="page-subtitle">Your purchase history and donation records</p>
        </div>

        <div className="invoices-content">
          <div className="donation-info-card">
            <div className="donation-icon">
              ❤️
            </div>
            <h2>Making a Difference Together</h2>
            <p className="donation-text">
              We haven't started donating yet, but we're excited to make a positive impact! 
              After we receive purchases from the App Store and Google Play Store, we will 
              begin donating a portion of our proceeds to meaningful causes.
            </p>
            <p className="donation-text">
              Your invoices and purchase history will be displayed here once you start 
              using our app. Every purchase you make helps us build a better platform 
              and contribute to charitable organizations.
            </p>
            <div className="donation-features">
              <div className="feature-item">
                <span className="feature-icon">📱</span>
                <span>App Store & Google Play purchases</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💝</span>
                <span>Automatic donation tracking</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📊</span>
                <span>Transparent impact reporting</span>
              </div>
            </div>
            <div className="coming-soon">
              <p>
                <strong>Coming Soon:</strong> Detailed invoice history, donation receipts, 
                and impact reports showing how your purchases are making a difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
