import React, { useState } from 'react';
import './Support.css';

const Support: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I get started with Hearth Routes?",
      answer: "Simply download the app from the App Store or Google Play, create your account, and start planning your first trip! Our intuitive interface will guide you through organizing your travel plans and logging your experiences."
    },
    {
      question: "Can I share my travel plans with family members?",
      answer: "Absolutely! Hearth Routes is designed for sharing. You can share your trip plans, travel advice, and memories with loved ones, creating a legacy that can be passed down to future generations, including your grandsons."
    },
    {
      question: "Does Hearth Routes work offline?",
      answer: "Yes! You can access your saved trip information offline. However, some features like real-time recommendations and sharing require an internet connection."
    },
    {
      question: "How do I log my travel experiences?",
      answer: "Use our detailed logging feature to record your experiences, add photos, notes, and location data. Your Arctic Tern guide will help you organize everything beautifully."
    },
    {
      question: "Is my travel data secure?",
      answer: "Your privacy and data security are our top priorities. We use industry-standard encryption and security measures to protect your travel memories. Please read our Privacy Policy for detailed information."
    },
    {
      question: "What makes the Arctic Tern special as our mascot?",
      answer: "Arctic Terns make the longest migration of any bird, traveling from Arctic to Antarctic annually - about 44,000 miles! This incredible journey perfectly symbolizes the epic adventures and wanderlust that drive every traveler."
    },
    {
      question: "Can I export my travel data?",
      answer: "Yes, you own your travel memories! You can export your trip data, photos, and experiences at any time through the app settings."
    },
    {
      question: "Do you offer premium features?",
      answer: "We may offer premium subscription options with enhanced features. Check the app for current subscription offerings and pricing."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription anytime through your device's subscription settings (iOS Settings > Apple ID > Subscriptions, or Google Play Store > Account > Subscriptions)."
    },
    {
      question: "I'm having technical issues. What should I do?",
      answer: "Try restarting the app first. If issues persist, check for app updates or contact our support team using the form below with details about your device and the problem."
    }
  ];

  return (
    <div className="support-page">
      <div className="container">
        <header className="support-header">
          <h1>How Can We Help You?</h1>
          <p>Your journey matters to us. Find answers to common questions or get in touch with our support team.</p>
        </header>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                >
                  {faq.question}
                  <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <h2>Still Need Help?</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p>
                Our support team is here to help you make the most of your <span className="brand-name">Hearth Routes</span> experience. 
                Whether you're planning your first adventure or need help sharing memories with loved ones, we're here for you.
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">📧</div>
                  <div>
                    <strong>Email Support</strong>
                    <p>support@hearthroutes.com</p>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="contact-icon">⏰</div>
                  <div>
                    <strong>Response Time</strong>
                    <p>We typically respond within 24 hours</p>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="contact-icon">🐦</div>
                  <div>
                    <strong>Follow Our Journey</strong>
                    <p>Stay updated with travel tips and app news</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h3>Send Us a Message</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" name="subject" required>
                    <option value="">Select a topic</option>
                    <option value="technical">Technical Issue</option>
                    <option value="account">Account Help</option>
                    <option value="subscription">Subscription Question</option>
                    <option value="feature">Feature Request</option>
                    <option value="feedback">General Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={6} 
                    placeholder="Tell us about your question or issue. Include any relevant details about your device or the problem you're experiencing."
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* App Download Section */}
        <section className="download-section">
          <h2>Don't Have the App Yet?</h2>
          <p>Download <span className="brand-name">Hearth Routes</span> and start creating your travel legacy today!</p>
          <div className="download-buttons">
          <a href="https://apps.apple.com/app/idYOUR_APP_ID" target="_blank" rel="noopener noreferrer" className="footer-store-badge">
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                     alt="Download on the App Store" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=your.app.id" target="_blank" rel="noopener noreferrer" className="footer-store-badge">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                     alt="Get it on Google Play" />
              </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Support;
