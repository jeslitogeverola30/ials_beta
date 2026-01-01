import React, { useMemo, useState } from 'react';
import './App.css';
import logo from './logo.svg';
import EventPage from './EventPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import ActivityCard from './ActivityCard';
import GenerativeWhiteBackground from './GenerativeWhiteBackground';

// --- ICONS ---
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
);

const CalendarIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-icon"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);

const PesoIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-icon"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v12"></path><path d="M9 9h6a2 2 0 0 1 0 4H9"></path><path d="M9 15h6a2 2 0 0 1 0 4H9"></path></svg>
);

const QRIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-icon"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><rect x="17" y="17" width="4" height="4"></rect><rect x="13" y="17" width="2" height="2"></rect><rect x="17" y="13" width="2" height="2"></rect></svg>
);

const CheckIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-icon"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);

// --- NEW GENERATIVE BIO COMPONENTS ---

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
  // Logic to create random organic flowing shapes
  const particles = useMemo(() => {
    const count = 25; // More particles for a continuous flow
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      // Random horizontal position (0% to 100%)
      left: Math.random() * 100, 
      // Random size: small spores (10px) to large leaves (60px)
      size: 10 + Math.random() * 50, 
      // Random speed: 15 seconds to 45 seconds to cross the header
      duration: 15 + Math.random() * 30, 
      // CRITICAL: Negative delay ensures particles are already mid-flight on load
      delay: -(Math.random() * 45), 
      // 60% chance of leaf, 40% cell
      type: Math.random() > 0.4 ? 'leaf' : 'cell', 
      // Random starting rotation
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
          // Apply the infinite animation values
          animationDuration: `${p.duration}s`,
          animationDelay: `${p.delay}s`,
          // Add a random initial rotation to the SVG itself
          transform: `rotate(${p.rotation}deg)`,
          color: `rgba(255, 255, 255, ${0.1 + Math.random() * 0.2})` // Subtle watermark opacity (0.1-0.3)
        };
        
        return p.type === 'leaf' ? 
          <BioLeaf key={p.id} style={style} /> : 
          <BioCell key={p.id} style={style} />;
      })}
    </div>
  );
};

// --- MAIN APP COMPONENT ---

const App = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'events', 'about', 'contact', 'signin', 'signup'
  // eslint-disable-next-line no-unused-vars
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [notification, setNotification] = useState(null);

  // Sample events data
  const events = [
    {
      id: 1,
      title: 'Annual Research Symposium',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=400&fit=crop',
      status: 'Upcoming',
      date: 'Oct 25',
      time: '9:00 AM',
      location: 'University Auditorium',
      description: 'Electrochemical science research and life sciences events. Join us for an engaging discussion on the latest research findings and innovations in agriculture and life sciences.',
      organizer: 'IALS-MS',
      category: 'Research',
      capacity: '500 attendees',
      attendees: '234 registered'
    },
    {
      id: 2,
      title: 'Agricaming Events',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=400&fit=crop',
      status: 'Upcoming',
      date: 'Oct 25',
      time: '9:00 AM',
      location: 'University Auditorium',
      description: 'Prescription of law of Agriculture and Life Sciences events. Enhance commitment in Agriculture artifacts and sustainability initiatives.',
      organizer: 'IALS-MS',
      category: 'Agricultural',
      capacity: '300 attendees',
      attendees: '156 registered'
    },
    {
      id: 3,
      title: 'IALS-MS Student Hub',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
      status: 'Upcoming',
      date: 'Oct 25',
      time: '9:00 AM',
      location: 'University Auditorium',
      description: 'Complete Agri-human research student. Connect with fellow researchers and participate in our student organization activities.',
      organizer: 'IALS-MS',
      category: 'Student Hub',
      capacity: '400 attendees',
      attendees: '289 registered'
    },
    {
      id: 4,
      title: 'IALS-MS Hath Events',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
      status: 'Completed',
      date: 'Oct 25',
      time: '9:00 AM',
      location: 'University Auditorium',
      description: 'Agriculture of Literature and Life Sciences Student Organization in materia. Celebrate the successful completion of our recent hath events.',
      organizer: 'IALS-MS',
      category: 'Student Events',
      capacity: '350 attendees',
      attendees: '342 attended'
    },
    {
      id: 5,
      title: 'Annual Research Events',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
      status: 'Completed',
      date: 'Oct 25',
      time: '9:00 AM',
      location: 'University Auditorium',
      description: 'Enhanced commitment in Agriculture artefacts and artefact for Agriculture. Review the key takeaways and outcomes from our annual research events.',
      organizer: 'IALS-MS',
      category: 'Research',
      capacity: '500 attendees',
      attendees: '487 attended'
    },
    {
      id: 6,
      title: 'Agriculture Green',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=400&fit=crop',
      status: 'Completed',
      date: 'Oct 25',
      time: '9:00 AM',
      location: 'University Auditorium',
      description: 'Profitable of Agriculture and Life Sciences Student Organization Institute. Learn about sustainable agricultural practices and green initiatives.',
      organizer: 'IALS-MS',
      category: 'Agriculture',
      capacity: '300 attendees',
      attendees: '298 attended'
    }
  ];

  const handlePaymentClick = () => {
    if (!isAuthenticated) {
      setNotification('You need to sign in first before you can view the payments page');
      setCurrentPage('signin');
      // Auto-dismiss notification after 5 seconds
      setTimeout(() => setNotification(null), 5000);
    }
  };

  if (selectedEvent) {
    return <EventPage event={selectedEvent} onBack={() => setSelectedEvent(null)} onNavigate={(page) => {
      setSelectedEvent(null);
      if (page === 'events') {
        setCurrentPage('events');
      } else {
        setCurrentPage(page);
      }
    }} />;
  }

  if (currentPage === 'events') {
    return (
      <div className="container">
        {/* --- HEADER SECTION --- */}
        <header className="header">
          <GenerativeBackground />

          <div className="top-bar">
            <div className="logo-container">
              <div className="logo-circle-small">
                 <img src={logo} alt="Logo" className="logo-img" />
              </div>
              <span className="brand-name">Institute of Agriculture and Life Sciences</span>
            </div>
            <div className="top-bar-buttons">
              <button className="app-btn">
                <PhoneIcon />
                <span>Get the App</span>
              </button>
              <button className="contact-signin-btn" onClick={() => setCurrentPage('signin')}>Sign In</button>
              <button className="contact-signup-btn" onClick={() => setCurrentPage('signup')}>Sign Up</button>
            </div>
          </div>

          <nav className="navbar">
            <button 
              className="nav-item" 
              onClick={() => setCurrentPage('home')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 24px' }}
            >
              Home
            </button>
            <button 
              className="nav-item active"
              onClick={() => setCurrentPage('events')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 24px' }}
            >
              Events
            </button>
            <button 
              className="nav-item"
              onClick={handlePaymentClick}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 24px' }}
            >
              Payments
            </button>
            <button 
              className={`nav-item ${currentPage === 'about' ? 'active' : ''}`}
              onClick={() => setCurrentPage('about')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 24px' }}
            >
              About Us
            </button>
            <button 
              className={`nav-item ${currentPage === 'contact' ? 'active' : ''}`}
              onClick={() => setCurrentPage('contact')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 24px' }}
            >
              Contact
            </button>
            <button 
              className={`nav-item ${currentPage === 'activity' ? 'active' : ''}`}
              onClick={() => setCurrentPage('activity')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 24px' }}
            >
              Activity Card
            </button>
          </nav>

          <div className="curve-separator">
            <svg viewBox="0 0 1440 320" className="wave-svg" preserveAspectRatio="none">
              <path fill="#ffffff" fillOpacity="1" d="M0,192L80,186.7C160,181,320,171,480,186.7C640,203,800,245,960,245.3C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
          </div>
        </header>

        {/* --- EVENTS PAGE MAIN CONTENT --- */}
        <main className="main-content">
          <div className="events-section" style={{ marginTop: '-100px' }}>
            <h2 style={{ color: 'white' }}>Events</h2>
            <p className="events-subtitle" style={{ color: 'white' }}>Stay updated with upcoming and past student activities</p>
            
            <div className="events-filters">
              <button className="filter-btn active">Upcoming</button>
              <button className="filter-btn">Past</button>
            </div>

            <div className="events-grid">
              {events.map((event) => (
                <div key={event.id} className="event-card" onClick={() => setSelectedEvent(event)}>
                  <div className="event-card-image">
                    <img src={event.image} alt={event.title} />
                    <span className="event-card-status">{event.status}</span>
                  </div>
                  <div className="event-card-content">
                    <h3>{event.title}</h3>
                    <div className="event-card-meta">
                      <span className="meta-item">📅 {event.date}, {event.time}</span>
                      <span className="meta-item">📍 {event.location}</span>
                    </div>
                    <p>{event.description.substring(0, 100)}...</p>
                    <button className="event-card-btn">
                      {event.status === 'Upcoming' ? 'Register' : 'View Details'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* --- FOOTER --- */}
        <footer className="footer">
          <GenerativeBackground />

          <div className="footer-curve">
            <svg viewBox="0 0 1440 320" className="footer-wave-svg" preserveAspectRatio="none">
              <path fill="#1e5c25" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,112C1120,96,1280,96,1360,96L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
          </div>

          <div className="footer-content">
            <div className="footer-logo-wrapper">
               <div className="logo-circle-footer">
                  <img src={logo} alt="Logo" className="logo-img-small" />
               </div>
            </div>
            
            <p className="footer-text">Institute of Agriculture and Life Sciences Student Organization</p>
            
            <div className="footer-divider-line"></div>
            
            <p className="footer-sub">© DOSCST 2016 • All Rights Reserved</p>
            
            <div className="footer-links">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  if (selectedEvent) {
    return <EventPage event={selectedEvent} onBack={() => setSelectedEvent(null)} onNavigate={(page) => {
      setSelectedEvent(null);
      if (page === 'events') {
        setCurrentPage('home');
      } else {
        setCurrentPage(page);
      }
    }} />;
  }

  if (currentPage === 'about') {
    return <AboutPage onBack={() => setCurrentPage('home')} onNavigate={(page) => {
      if (page === 'home') {
        setCurrentPage('home');
      } else if (page === 'events') {
        setCurrentPage('home');
      } else {
        setCurrentPage(page);
      }
    }} />;
  }

  if (currentPage === 'contact') {
    return <ContactPage onBack={() => setCurrentPage('home')} onNavigate={(page) => {
      if (page === 'home') {
        setCurrentPage('home');
      } else if (page === 'events') {
        setCurrentPage('home');
      } else {
        setCurrentPage(page);
      }
    }} />;
  }

  if (currentPage === 'signin') {
    return <SignInPage onNavigate={(page) => {
      if (page === 'home') {
        setCurrentPage('home');
      } else if (page === 'events') {
        setCurrentPage('home');
      } else {
        setCurrentPage(page);
      }
    }} />;
  }

  if (currentPage === 'signup') {
    return <SignUpPage onNavigate={(page) => {
      if (page === 'home') {
        setCurrentPage('home');
      } else if (page === 'events') {
        setCurrentPage('home');
      } else {
        setCurrentPage(page);
      }
    }} />;
  }

  if (currentPage === 'activity') {
    return <ActivityCard onBack={() => setCurrentPage('home')} onNavigate={(page) => {
      if (page === 'home') {
        setCurrentPage('home');
      } else if (page === 'events') {
        setCurrentPage('home');
      } else if (page === 'activity') {
        setCurrentPage('activity');
      } else {
        setCurrentPage(page);
      }
    }} />;
  }

  return (
    <div className="container">
      {/* --- HEADER SECTION --- */}
      <header className="header">
        
        {/* Insert the Generative Background Here */}
        <GenerativeBackground />

        <div className="top-bar">
          <div className="logo-container">
            <div className="logo-circle-small">
               <img src={logo} alt="Logo" className="logo-img" />
            </div>
            <span className="brand-name">Institute of Agriculture and Life Sciences</span>
          </div>
          <div className="top-bar-buttons">
            <button className="app-btn">
              <PhoneIcon />
              <span>Get the App</span>
            </button>
            <button className="contact-signin-btn" onClick={() => setCurrentPage('signin')}>Sign In</button>
            <button className="contact-signup-btn" onClick={() => setCurrentPage('signup')}>Sign Up</button>
          </div>
        </div>

        <nav className="navbar">
          <button 
            className={`nav-item ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentPage('home')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 24px' }}
          >
            Home
          </button>
          <button 
            className={`nav-item ${currentPage === 'events' ? 'active' : ''}`}
            onClick={() => setCurrentPage('events')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 24px' }}
          >
            Events
          </button>
          <button 
            className="nav-item"
            onClick={handlePaymentClick}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 24px' }}
          >
            Payments
          </button>
          <button 
            className={`nav-item ${currentPage === 'about' ? 'active' : ''}`}
            onClick={() => setCurrentPage('about')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 24px' }}
          >
            About Us
          </button>
          <button 
            className={`nav-item ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => setCurrentPage('contact')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 24px' }}
          >
            Contact
          </button>
          <button 
            className={`nav-item ${currentPage === 'activity' ? 'active' : ''}`}
            onClick={() => setCurrentPage('activity')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 24px' }}
          >
            Activity Card
          </button>
        </nav>

        {/* This SVG creates the curved separation */}
        <div className="curve-separator">
          <svg viewBox="0 0 1440 320" className="wave-svg" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,192L80,186.7C160,181,320,171,480,186.7C640,203,800,245,960,245.3C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <main className="main-content">
        <GenerativeWhiteBackground particleCount={60} />
        
        <div className="hero-logo-wrapper">
          <div className="main-logo">
             <div className="seal-outer">
               <div className="seal-inner">
                 <img src={logo} alt="Main Seal" className="seal-img" />
               </div>
             </div>
          </div>
        </div>

        <div className="hero-text">
          <h1>Welcome to <span className="highlight">IALS-MS</span>:<br/>Your Student Organization Hub</h1>
          <p className="subtitle">Manage events, payments, and clearance efficiently.</p>
        </div>

        <div className="auth-buttons">
          <button className="btn btn-primary" onClick={() => setCurrentPage('signin')}>Sign In</button>
          <button className="btn btn-outline" onClick={() => setCurrentPage('signup')}>Create Account</button>
        </div>

        {/* --- CARDS SECTION --- */}
        <div className="cards-container">
          <div className="card">
            <div className="icon-circle">
              <CalendarIcon />
            </div>
            <h3>Upcoming Events</h3>
            <p>Collaborate on how you are client in upcoming Events.</p>
          </div>

          <div className="card">
            <div className="icon-circle">
              <PesoIcon />
            </div>
            <h3>Payment & Fees</h3>
            <p>Manage events, payments and their Fees.</p>
          </div>

          <div className="card">
            <div className="icon-circle">
              <CheckIcon />
            </div>
            <h3>Activity Clearance</h3>
            <p>Clearance toward the activity and trustworthy.</p>
          </div>

          <div className="card">
            <div className="icon-circle">
              <QRIcon />
            </div>
            <h3>QR Attendance</h3>
            <p>Quick and easy attendance tracking with QR codes.</p>
          </div>
        </div>

      </main>

      {/* --- FOOTER --- */}
      <footer className="footer">
        {/* Insert the Generative Background Here */}
        <GenerativeBackground />

        {/* The Curve Separator (Transition from White Body to Green Footer) */}
        <div className="footer-curve">
          <svg viewBox="0 0 1440 320" className="footer-wave-svg" preserveAspectRatio="none">
            <path fill="#1e5c25" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,112C1120,96,1280,96,1360,96L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>

        <div className="footer-content">
          <div className="footer-logo-wrapper">
             <div className="logo-circle-footer">
                <img src={logo} alt="Logo" className="logo-img-small" />
             </div>
          </div>
          
          <p className="footer-text">Institute of Agriculture and Life Sciences Student Organization</p>
          
          {/* Added a subtle separator line for the copyright */}
          <div className="footer-divider-line"></div>
          
          <p className="footer-sub">© DOSCST 2016 • All Rights Reserved</p>
          
          <div className="footer-links">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;