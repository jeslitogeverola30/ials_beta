import React, { useMemo } from 'react';
import './ContactPage.css';
import logo from './logo.svg';
import GenerativeWhiteBackground from './GenerativeWhiteBackground';

// --- ICONS ---
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
);

const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
);

const PhoneSmall = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);

const MapPinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
);

// --- GENERATIVE BIO COMPONENTS ---
const BioLeaf = ({ style }) => (
  <svg style={style} className="bio-particle" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,2C12,2 4,8 4,16C4,20.4 7.6,24 12,24C16.4,24 20,20.4 20,16C20,8 12,2 12,2ZM12,22C8.7,22 6,19.3 6,16C6,11 10,6.5 12,4.5C14,6.5 18,11 18,16C18,19.3 15.3,22 12,22Z" />
    <path d="M12,6 L12,20" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <path d="M12,10 L16,8" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <path d="M12,14 L8,12" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

const BioCell = ({ style }) => (
  <svg style={style} className="bio-particle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <circle cx="12" cy="12" r="8" opacity="0.6"/>
    <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.4"/>
  </svg>
);

const GenerativeBackground = () => {
  const particles = useMemo(() => {
    const count = 25;
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, 
      size: 10 + Math.random() * 50, 
      duration: 15 + Math.random() * 30, 
      delay: -(Math.random() * 45), 
      type: Math.random() > 0.4 ? 'leaf' : 'cell', 
      rotation: Math.random() * 360,
    }));
  }, []);

  return (
    <div className="bio-background-container">
      {particles.map((p) => {
        const style = {
          left: `${p.left}%`,
          width: `${p.size}px`,
          height: `${p.size}px`,
          animationDuration: `${p.duration}s`,
          animationDelay: `${p.delay}s`,
          transform: `rotate(${p.rotation}deg)`,
          color: `rgba(255, 255, 255, ${0.1 + Math.random() * 0.2})`
        };
        
        return p.type === 'leaf' ? 
          <BioLeaf key={p.id} style={style} /> : 
          <BioCell key={p.id} style={style} />;
      })}
    </div>
  );
};

// --- CONTACT PAGE COMPONENT ---
const ContactPage = ({ onBack, onNavigate }) => {
  const contactInfo = {
    phone: '0951 416 3458',
    email: 'ialsinstitute22@gmail.com',
    organization: 'FALS - Pythons Society',
    address: 'Faculty of Agriculture and Life Sciences, Davao Oriental State University',
    followers: '5.2K followers',
    following: '18 following'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="contact-page-container">
      {/* --- HEADER SECTION --- */}
      <header className="contact-header">
        <GenerativeBackground />

        <div className="contact-top-bar">
          <div className="logo-container-contact">
            <div className="logo-circle-small-contact">
               <img src={logo} alt="Logo" className="logo-img-contact" />
            </div>
            <span className="brand-name-contact">Institute of Agriculture and Life Sciences</span>
          </div>
          <button className="app-btn-contact">
            <PhoneIcon />
            <span>Get the App</span>
          </button>
        </div>

        <nav className="navbar-contact">
          <button 
            className="nav-item-contact" 
            onClick={() => onNavigate('home')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 24px' }}
          >
            Home
          </button>
          <button 
            className="nav-item-contact" 
            onClick={() => onNavigate('events')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 24px' }}
          >
            Events
          </button>
          <a href="#payments" className="nav-item-contact">Payments</a>
          <button 
            className="nav-item-contact" 
            onClick={() => onNavigate('about')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 24px' }}
          >
            About Us
          </button>
          <a href="#contact" className="nav-item-contact active">Contact</a>
          <div className="nav-item-contact more contact-dropdown">
            More <ChevronDown />
            <div className="contact-dropdown-menu">
              <button 
                className="contact-dropdown-item"
                onClick={() => onNavigate('activity')}
              >
                Activity Clearance Card
              </button>
            </div>
          </div>
        </nav>

        <div className="curve-separator-contact">
          <svg viewBox="0 0 1440 320" className="wave-svg-contact" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,192L80,186.7C160,181,320,171,480,186.7C640,203,800,245,960,245.3C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </header>

      {/* --- CONTACT CONTENT SECTION --- */}
      <main className="contact-main-content">
        <GenerativeWhiteBackground particleCount={30} />
        <div className="contact-wrapper">
          <h1>Get In Touch</h1>
          <p className="contact-subtitle">We'd love to hear from you. Send us a message!</p>

          <div className="contact-container">
            {/* CONTACT FORM */}
            <div className="contact-form-section">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required placeholder="Your full name" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required placeholder="your@email.com" />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required placeholder="Message subject" />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required placeholder="Your message here..."></textarea>
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>

            {/* CONTACT INFO SECTION */}
            <div className="contact-info-section">
              <div className="org-card">
                <div className="org-logo">
                  <img src={logo} alt="Organization Logo" />
                </div>
                <h2>{contactInfo.organization}</h2>
                <p className="org-subtitle">Faculty of Agriculture and Life Sciences</p>
              </div>

              <div className="contact-info-cards">
                {/* PHONE */}
                <div className="info-card">
                  <div className="info-icon">
                    <PhoneSmall />
                  </div>
                  <div className="info-content">
                    <p className="info-label">Phone</p>
                    <a href={`tel:${contactInfo.phone}`} className="info-link">{contactInfo.phone}</a>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="info-card">
                  <div className="info-icon">
                    <MailIcon />
                  </div>
                  <div className="info-content">
                    <p className="info-label">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="info-link">{contactInfo.email}</a>
                  </div>
                </div>

                {/* ADDRESS */}
                <div className="info-card">
                  <div className="info-icon">
                    <MapPinIcon />
                  </div>
                  <div className="info-content">
                    <p className="info-label">Address</p>
                    <p className="info-text">{contactInfo.address}</p>
                  </div>
                </div>

                {/* FOLLOW */}
                <div className="info-card">
                  <div className="info-icon">
                    <FacebookIcon />
                  </div>
                  <div className="info-content">
                    <p className="info-label">Follow Us</p>
                    <a href="https://www.facebook.com/alpypthonsociety" target="_blank" rel="noopener noreferrer" className="info-link">FALS - Pythons Society</a>
                    <p className="follow-stats">{contactInfo.followers} • {contactInfo.following}</p>
                  </div>
                </div>
              </div>

              {/* SOCIAL LINKS */}
              <div className="social-links">
                <a href="https://www.facebook.com/alpypthonsociety" target="_blank" rel="noopener noreferrer" className="social-btn facebook">
                  <FacebookIcon />
                  <span>Facebook</span>
                </a>
                <a href={`mailto:${contactInfo.email}`} className="social-btn email">
                  <MailIcon />
                  <span>Email</span>
                </a>
                <a href={`tel:${contactInfo.phone}`} className="social-btn phone">
                  <PhoneSmall />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="contact-footer">
        <GenerativeBackground />

        <div className="contact-footer-curve">
          <svg viewBox="0 0 1440 320" className="contact-footer-wave-svg" preserveAspectRatio="none">
            <path fill="#1e5c25" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,112C1120,96,1280,96,1360,96L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>

        <div className="contact-footer-content">
          <div className="contact-footer-logo-wrapper">
             <div className="logo-circle-footer-contact">
                <img src={logo} alt="Logo" className="logo-img-small-contact" />
             </div>
          </div>
          
          <p className="contact-footer-text">Institute of Agriculture and Life Sciences Student Organization</p>
          
          <div className="contact-footer-divider-line"></div>
          
          <p className="contact-footer-sub">© DOSCST 2016 • All Rights Reserved</p>
          
          <div className="contact-footer-links">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
