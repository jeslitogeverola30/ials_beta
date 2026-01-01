import React, { useMemo } from 'react';
import './ActivityCard.css';
import logo from './logo.svg';
import GenerativeWhiteBackground from './GenerativeWhiteBackground';

// --- ICONS ---
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
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

// --- ACTIVITY CARD PAGE COMPONENT ---
const ActivityCard = ({ onBack, onNavigate }) => {
  // Sample student data
  const student = {
    name: 'Juan Dela Cruz',
    program: 'BS Biology',
    year: 'Year 3',
    id: '2023-00123',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
  };

  const activities = [
    { name: 'General Assembly', cleared: false },
    { name: 'Dept. Orientation', cleared: false },
    { name: 'Midterm Forum', cleared: false },
    { name: 'Research Symposium', cleared: true },
    { name: 'Midterm Forum', cleared: false },
    { name: 'Leadership Seminar', cleared: false },
    { name: 'Sports Fest', cleared: true },
    { name: 'Year-End Party', cleared: true },
  ];

  const semester = 'Semester 1';
  const academicYear = 'A.Y. 2025-2026';

 return (
    <div className="about-page-container">
      {/* --- HEADER SECTION --- */}
      <header className="about-header">
        <GenerativeBackground />

        <div className="about-top-bar">
          <div className="logo-container-about">
            <div className="logo-circle-small-about">
               <img src={logo} alt="Logo" className="logo-img-about" />
            </div>
            <span className="brand-name-about">Institute of Agriculture and Life Sciences</span>
          </div>
          <div className="about-top-bar-buttons">
            <button className="app-btn-about">
              <PhoneIcon />
              <span>Get the App</span>
            </button>
            <button className="about-signin-btn" onClick={() => onNavigate('signin')}>Sign In</button>
            <button className="about-signup-btn" onClick={() => onNavigate('signup')}>Sign Up</button>
          </div>
        </div>

        <nav className="navbar-about">
          <button 
            className="nav-item-about" 
            onClick={() => onNavigate('home')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 24px' }}
          >
            Home
          </button>
          <button 
            className="nav-item-about" 
            onClick={() => onNavigate('events')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 24px' }}
          >
            Events
          </button>
          <a href="#payments" className="nav-item-about">Payments</a>
          <button 
            className="nav-item-about" 
            onClick={() => onNavigate('about')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 24px' }}
          >
            About Us
          </button>
          <button 
            className="nav-item-about" 
            onClick={() => onNavigate('contact')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 24px' }}
          >
            Contact
          </button>
          <button 
            className="nav-item-about active" 
            onClick={() => onNavigate('activity')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 24px' }}
          >
            Activity Card
          </button>
        </nav>

        <div className="curve-separator-about">
          <svg viewBox="0 0 1440 320" className="wave-svg-about" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,192L80,186.7C160,181,320,171,480,186.7C640,203,800,245,960,245.3C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="activity-card-main-content">
        <GenerativeWhiteBackground particleCount={30} />
        <div className="activity-card-wrapper">
          {/* Card Container with Header and Student */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Card Header */}
            <div className="activity-card-header-section">
              <div className="activity-card-header-left">
                <div className="activity-card-logo-org">
                  <img src={logo} alt="IALS-MS" className="activity-card-logo-org-img" />
                </div>
                <div className="activity-card-header-text">
                  <h3>ACTIVITY CLEARANCE CARD</h3>
                  <p>{semester} • {academicYear}</p>
                </div>
              </div>
            </div>

            {/* Student Info and Activities Container */}
            <div style={{ display: 'flex', gap: '0', width: '100%', minHeight: '400px' }}>
              {/* Student Info - Left Side */}
              <div className="activity-card-student-section" style={{ flex: '0 0 auto', borderRight: '2px solid #e0d5c5', paddingRight: '30px' }}>
                <div className="activity-card-student-info" style={{ flexDirection: 'column' }}>
                  <img src={student.photo} alt={student.name} className="activity-card-student-photo" />
                  <div className="activity-card-student-details">
                    <h2>{student.name}</h2>
                    <p>{student.program} - {student.year}</p>
                    <p className="activity-card-student-id">{student.id}</p>
                  </div>
                </div>
              </div>

              {/* Activities and Status - Right Side */}
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                {/* Activities Grid */}
                <div className="activity-card-activities-section">
                  <div className="activity-card-activities-grid">
                    {activities.map((activity, index) => (
                      <div key={index} className="activity-card-activity-item">
                        <div className="activity-card-calendar-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                          </svg>
                        </div>
                        <p>{activity.name}</p>
                        {activity.cleared && (
                          <div className="activity-card-cleared-stamp">
                            <svg viewBox="0 0 100 100" className="activity-card-stamp">
                              <circle cx="50" cy="50" r="48" fill="none" stroke="#2a8a3d" strokeWidth="3"/>
                              <circle cx="50" cy="50" r="45" fill="none" stroke="#2a8a3d" strokeWidth="2" strokeDasharray="5,3"/>
                              <text x="50" y="55" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#2a8a3d">CLEARED</text>
                            </svg>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Overall Clearance Status */}
                <div className="activity-card-status-section">
                  <div className="activity-card-status-badge">
                    <svg viewBox="0 0 100 100" className="activity-card-status-stamp">
                      <circle cx="50" cy="50" r="48" fill="none" stroke="#2a8a3d" strokeWidth="3"/>
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#2a8a3d" strokeWidth="2" strokeDasharray="5,3"/>
                      <text x="50" y="40" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#2a8a3d">OFFICIALLY</text>
                      <text x="50" y="62" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#2a8a3d">CLEARED</text>
                    </svg>
                    <div className="activity-card-check-mark">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* --- FOOTER --- */}
       <footer className="about-footer">
        <GenerativeBackground />

        <div className="about-footer-curve">
          <svg viewBox="0 0 1440 320" className="about-footer-wave-svg" preserveAspectRatio="none">
            <path fill="#1e5c25" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,112C1120,96,1280,96,1360,96L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>

        <div className="about-footer-content">
          <div className="about-footer-logo-wrapper">
             <div className="logo-circle-footer-about">
                <img src={logo} alt="Logo" className="logo-img-small-about" />
             </div>
          </div>
          
          <p className="about-footer-text">Institute of Agriculture and Life Sciences Student Organization</p>
          
          <div className="about-footer-divider-line"></div>
          
          <p className="about-footer-sub">© DOSCST 2016 • All Rights Reserved</p>
          
          <div className="about-footer-links">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ActivityCard;
