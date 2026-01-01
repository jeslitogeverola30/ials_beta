import React, { useMemo } from 'react';
import './EventPage.css';
import logo from './logo.svg';
import GenerativeWhiteBackground from './GenerativeWhiteBackground';

// --- ICONS ---
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
);

const CalendarSmall = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);

const LocationPin = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
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

// --- EVENT PAGE COMPONENT ---
const EventPage = ({ event, onBack, onNavigate }) => {
  // eslint-disable-next-line no-unused-vars
  const [notification, setNotification] = React.useState(null);

  const handlePaymentClick = () => {
    setNotification('You need to sign in first before you can view the payments page');
    onNavigate('signin');
    setTimeout(() => setNotification(null), 5000);
  };

  return (
    <div className="event-page-container">
      {/* --- HEADER SECTION --- */}
      <header className="event-header">
        <GenerativeBackground />

        <div className="event-top-bar">
          <div className="logo-container-event">
            <div className="logo-circle-small-event">
               <img src={logo} alt="Logo" className="logo-img-event" />
            </div>
            <span className="brand-name-event">Institute of Agriculture and Life Sciences</span>
          </div>
          <div className="event-top-bar-buttons">
            <button className="app-btn-event">
              <PhoneIcon />
              <span>Get the App</span>
            </button>
            <button className="event-signin-btn" onClick={() => onNavigate('signin')}>Sign In</button>
            <button className="event-signup-btn" onClick={() => onNavigate('signup')}>Sign Up</button>
          </div>
        </div>

        <nav className="navbar-event">
          <button 
            className="nav-item-event" 
            onClick={() => onNavigate('home')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 24px' }}
          >
            Home
          </button>
          <button 
            className="nav-item-event active"
            onClick={() => onNavigate('events')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 24px' }}
          >
            Events
          </button>
          <button 
            className="nav-item-event"
            onClick={handlePaymentClick}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 24px' }}
          >
            Payments
          </button>
          <button 
            className="nav-item-event" 
            onClick={() => onNavigate('about')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 24px' }}
          >
            About Us
          </button>
          <button 
            className="nav-item-event" 
            onClick={() => onNavigate('contact')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 24px' }}
          >
            Contact
          </button>
          <button 
            className="nav-item-event" 
            onClick={() => onNavigate('activity')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 24px' }}
          >
            Activity Card
          </button>
        </nav>

        <div className="curve-separator-event">
          <svg viewBox="0 0 1440 320" className="wave-svg-event" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,192L80,186.7C160,181,320,171,480,186.7C640,203,800,245,960,245.3C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </header>

      {/* --- EVENT DETAIL SECTION --- */}
      <main className="event-main-content">
        {notification && (
          <div className="event-notification">
            {notification}
          </div>
        )}
        <GenerativeWhiteBackground particleCount={60} />
        {event && (
          <div className="event-detail-wrapper">
            {/* Event Image */}
            <div className="event-image-section">
              <img src={event.image} alt={event.title} className="event-hero-image" />
              <div className="event-status-badge">{event.status}</div>
            </div>

            {/* Event Info Container */}
            <div className="event-info-container">
              <h1 className="event-title">{event.title}</h1>

              {/* Event Meta Info */}
              <div className="event-meta">
                <div className="meta-item">
                  <CalendarSmall />
                  <div>
                    <p className="meta-label">Date & Time</p>
                    <p className="meta-value">{event.date} • {event.time}</p>
                  </div>
                </div>

                <div className="meta-item">
                  <LocationPin />
                  <div>
                    <p className="meta-label">Location</p>
                    <p className="meta-value">{event.location}</p>
                  </div>
                </div>
              </div>

              {/* Event Description */}
              <div className="event-description">
                <h2>About this Event</h2>
                <p>{event.description}</p>
              </div>

              {/* Event Details */}
              <div className="event-details">
                <h2>Event Details</h2>
                <div className="details-grid">
                  <div className="detail-item">
                    <p className="detail-label">Organizer</p>
                    <p className="detail-value">{event.organizer}</p>
                  </div>
                  <div className="detail-item">
                    <p className="detail-label">Category</p>
                    <p className="detail-value">{event.category}</p>
                  </div>
                  <div className="detail-item">
                    <p className="detail-label">Capacity</p>
                    <p className="detail-value">{event.capacity}</p>
                  </div>
                  <div className="detail-item">
                    <p className="detail-label">Attendees</p>
                    <p className="detail-value">{event.attendees}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="event-actions">
                {event.status === 'Upcoming' ? (
                  <button className="btn-register">Register Now</button>
                ) : (
                  <button className="btn-view-details">View Details</button>
                )}
                <button className="btn-share">Share Event</button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* --- FOOTER --- */}
      <footer className="event-footer">
        <GenerativeBackground />

        <div className="event-footer-curve">
          <svg viewBox="0 0 1440 320" className="event-footer-wave-svg" preserveAspectRatio="none">
            <path fill="#1e5c25" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,112C1120,96,1280,96,1360,96L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>

        <div className="event-footer-content">
          <div className="event-footer-logo-wrapper">
             <div className="logo-circle-footer-event">
                <img src={logo} alt="Logo" className="logo-img-small-event" />
             </div>
          </div>
          
          <p className="event-footer-text">Institute of Agriculture and Life Sciences Student Organization</p>
          
          <div className="event-footer-divider-line"></div>
          
          <p className="event-footer-sub">© DOSCST 2016 • All Rights Reserved</p>
          
          <div className="event-footer-links">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EventPage;
