import React from 'react';
import './LegalPages.css';

const TermsOfService: React.FC = () => {
  return (
    <div className="legal-page">
      <div className="container">
        <h1>Terms of Service</h1>
        <div className="legal-content">
          <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using the <span className="brand-name">Hearth Routes</span> mobile application, 
              you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2>2. Description of Service</h2>
            <p>
              <span className="brand-name">Hearth Routes</span> is a travel planning and memory-sharing application that allows users to:
            </p>
            <ul>
              <li>Organize and plan trip itineraries</li>
              <li>Log detailed trip information and experiences</li>
              <li>Share travel lists, advice, and memories with loved ones</li>
              <li>Create lasting travel legacies for future generations</li>
              <li>Access travel recommendations and tour packages</li>
            </ul>
          </section>

          <section>
            <h2>3. User Accounts and Registration</h2>
            <p>
              To use certain features of <span className="brand-name">Hearth Routes</span>, you must create an account. You are responsible for:
            </p>
            <ul>
              <li>Providing accurate and complete information</li>
              <li>Maintaining the security of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>
          </section>

          <section>
            <h2>4. User Content and Conduct</h2>
            <p>You are solely responsible for the content you create, share, or upload through our service. You agree not to:</p>
            <ul>
              <li>Share false, misleading, or inappropriate travel information</li>
              <li>Violate any laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Upload malicious code or viruses</li>
              <li>Spam or harass other users</li>
              <li>Use the service for commercial purposes without permission</li>
            </ul>
          </section>

          <section>
            <h2>5. Premium Subscription</h2>
            <p>
              <span className="brand-name">Hearth Routes</span> may offer premium subscription services with additional features:
            </p>
            <ul>
              <li><strong>Billing:</strong> Subscriptions are billed in advance on a recurring basis</li>
              <li><strong>Auto-renewal:</strong> Subscriptions automatically renew unless cancelled</li>
              <li><strong>Cancellation:</strong> You may cancel your subscription at any time through your device's subscription settings</li>
              <li><strong>Refunds:</strong> Refunds are processed according to the app store's refund policy</li>
            </ul>
          </section>

          <section>
            <h2>6. Intellectual Property</h2>
            <p>
              The <span className="brand-name">Hearth Routes</span> app, including its design, functionality, and content, 
              is owned by us and protected by intellectual property laws. You retain ownership of your travel content, 
              but grant us a license to use it to provide our services.
            </p>
          </section>

          <section>
            <h2>7. Third-Party Services</h2>
            <p>
              Our app may integrate with third-party services (maps, weather, booking platforms). We are not responsible 
              for the availability, accuracy, or content of these third-party services.
            </p>
          </section>

          <section>
            <h2>8. Location Services</h2>
            <p>
              <span className="brand-name">Hearth Routes</span> uses location services to enhance your travel experience. 
              By using location features, you consent to the collection and use of location data as described in our Privacy Policy.
            </p>
          </section>

          <section>
            <h2>9. Limitation of Liability</h2>
            <p>
              <span className="brand-name">Hearth Routes</span> is provided "as is" without warranties. We are not liable for:
            </p>
            <ul>
              <li>Travel decisions made based on app recommendations</li>
              <li>Loss of data or travel information</li>
              <li>Interruptions to service</li>
              <li>Third-party actions or content</li>
            </ul>
            <p>
              Always verify travel information independently and exercise caution when traveling.
            </p>
          </section>

          <section>
            <h2>10. Privacy and Data Protection</h2>
            <p>
              Your privacy is important to us. Please review our <a href="/privacy">Privacy Policy</a> to understand 
              how we collect, use, and protect your information.
            </p>
          </section>

          <section>
            <h2>11. Service Availability</h2>
            <p>
              We strive to provide reliable service but cannot guarantee uninterrupted access. We may modify, 
              suspend, or discontinue features with reasonable notice.
            </p>
          </section>

          <section>
            <h2>12. Termination</h2>
            <p>
              You may stop using our service at any time. We may terminate or suspend accounts for violations 
              of these terms. Upon termination, your right to use the service ceases immediately.
            </p>
          </section>

          <section>
            <h2>13. Changes to Terms</h2>
            <p>
              We may modify these terms from time to time. Continued use of the service after changes constitutes 
              acceptance of the new terms. We will notify users of significant changes.
            </p>
          </section>

          <section>
            <h2>14. Governing Law</h2>
            <p>
              These terms are governed by applicable laws. Any disputes will be resolved through appropriate legal channels.
            </p>
          </section>

          <section>
            <h2>15. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us through our <a href="/support">Support page</a>.
            </p>
            <p>
              Thank you for choosing <span className="brand-name">Hearth Routes</span> to create and share your travel memories. 
              Every route is a memory. Every memory is a legacy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
