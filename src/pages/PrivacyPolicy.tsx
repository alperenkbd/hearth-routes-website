import React from 'react';
import './LegalPages.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="legal-page">
      <div className="container">
        <h1>Privacy Policy</h1>
        <div className="legal-content">
          <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2>1. Information We Collect</h2>
            <p>
              <span className="brand-name">Hearth Routes</span> collects information to provide better services to all our users. 
              We collect information in the following ways:
            </p>
            <ul>
              <li><strong>Personal Information:</strong> When you create an account, we may collect personal information such as your name, email address, and profile information.</li>
              <li><strong>Location Data:</strong> With your permission, we collect location data to help you plan and log your trips.</li>
              <li><strong>Trip Information:</strong> We store the trip plans, logs, and memories you create within the app.</li>
              <li><strong>Usage Data:</strong> We collect information about how you use our app to improve our services.</li>
            </ul>
          </section>

          <section>
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Help you organize and plan your trips</li>
              <li>Enable you to share your travel experiences with loved ones</li>
              <li>Send you updates about your trips and our services (with your consent)</li>
              <li>Protect against fraud and abuse</li>
            </ul>
          </section>

          <section>
            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
            </p>
            <ul>
              <li>When you choose to share your trip information with friends and family</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and the safety of our users</li>
              <li>With service providers who assist us in operating our app (under strict confidentiality agreements)</li>
            </ul>
          </section>

          <section>
            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. Your trip memories and personal data are important to us, and we treat 
              them with the same care you would.
            </p>
          </section>

          <section>
            <h2>5. Location Data</h2>
            <p>
              <span className="brand-name">Hearth Routes</span> uses location services to enhance your travel experience. 
              Location data helps us:
            </p>
            <ul>
              <li>Suggest nearby attractions and services</li>
              <li>Automatically log trip locations</li>
              <li>Provide location-based recommendations</li>
              <li>Enable sharing of travel routes with loved ones</li>
            </ul>
            <p>You can disable location services at any time through your device settings.</p>
          </section>

          <section>
            <h2>6. Children's Privacy</h2>
            <p>
              Our service is not directed to children under 13. We do not knowingly collect personal information from 
              children under 13. If you are a parent or guardian and believe your child has provided us with personal 
              information, please contact us.
            </p>
          </section>

          <section>
            <h2>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Export your trip data</li>
              <li>Opt out of promotional communications</li>
            </ul>
          </section>

          <section>
            <h2>8. Cookie Policy</h2>
            <p>
              We use cookies and similar technologies to improve your experience on our website and app. 
              Cookies help us understand how you use our services and remember your preferences.
            </p>
          </section>

          <section>
            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting 
              the new privacy policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us through 
              our <a href="/support">Support page</a>.
            </p>
            <p>
              Remember: Every route is a memory. Every memory is a legacy. We're committed to protecting the 
              privacy of your travel memories.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
