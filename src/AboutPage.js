import React, { useMemo } from 'react';
import './AboutPage.css';
import logo from './logo.svg';
import GenerativeWhiteBackground from './GenerativeWhiteBackground';

// --- ICONS ---
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
);

const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
);

const TargetIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
);

const RocketIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path><polyline points="16 5 4 11 4 19 20 19 20 11 8 5"></polyline></svg>
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

// --- ABOUT PAGE COMPONENT ---
const AboutPage = ({ onBack, onNavigate }) => {
  // Team members data
  const deanInfo = {
    name: 'Dr. Elena Cruz',
    title: 'Dean',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
  };

  const teamMembers = [
    {
      id: 1,
      name: 'Prof. Juan Reyes',
      title: 'Faculty',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
    },
    {
      id: 2,
      name: 'Ms. Ana Santos',
      title: 'Instructor',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
    },
    {
      id: 3,
      name: 'Mr. Mark Lim',
      title: 'Instructor',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
    },
    {
      id: 4,
      name: 'Dr. Maria Garcia',
      title: 'Faculty',
      image: 'https://images.unsplash.com/photo-1517849845537-1d51a20414de?w=150&h=150&fit=crop'
    },
    {
      id: 5,
      name: 'Prof. Juan Reyes',
      title: 'Faculty',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
    },
    {
      id: 6,
      name: 'Ms. Ana Santos',
      title: 'Instructor',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
    },
    {
      id: 7,
      name: 'Dr. Maria Garcia',
      title: 'Faculty',
      image: 'https://images.unsplash.com/photo-1517849845537-1d51a20414de?w=150&h=150&fit=crop'
    },
    {
      id: 8,
      name: 'Mr. Mark Lim',
      title: 'Instructor',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
    },
    {
      id: 9,
      name: 'Prof. Juan Reyes',
      title: 'Faculty',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
    },
    {
      id: 10,
      name: 'Ms. Ana Santos',
      title: 'Instructor',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
    },
    {
      id: 11,
      name: 'Dr. Maria Garcia',
      title: 'Faculty',
      image: 'https://images.unsplash.com/photo-1517849845537-1d51a20414de?w=150&h=150&fit=crop'
    },
    {
      id: 12,
      name: 'Mr. Mark Lim',
      title: 'Instructor',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
    }
  ];

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
          <button className="app-btn-about">
            <PhoneIcon />
            <span>Get the App</span>
          </button>
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
          <a href="#about" className="nav-item-about active">About Us</a>
          <button 
            className="nav-item-about" 
            onClick={() => onNavigate('contact')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 24px' }}
          >
            Contact
          </button>
          <div className="nav-item-about more about-dropdown">
            More <ChevronDown />
            <div className="about-dropdown-menu">
              <button 
                className="about-dropdown-item"
                onClick={() => onNavigate('activity')}
              >
                Activity Clearance Card
              </button>
            </div>
          </div>
        </nav>

        <div className="curve-separator-about">
          <svg viewBox="0 0 1440 320" className="wave-svg-about" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,192L80,186.7C160,181,320,171,480,186.7C640,203,800,245,960,245.3C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </header>

      {/* --- ABOUT CONTENT SECTION --- */}
      <main className="about-main-content">
        <GenerativeWhiteBackground particleCount={30} />
        {/* WHO WE ARE SECTION */}
        <div className="who-we-are-section">
          <div className="who-we-are-card">
            <div className="who-we-are-logo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="who-we-are-content">
              <h2>WHO WE ARE:</h2>
              <p>Cultivating knowledge, innovating agriculture, and empowering student leaders in life sciences.</p>
            </div>
          </div>
        </div>

        {/* VISION AND MISSION SECTION */}
        <div className="vision-mission-section">
          <div className="vision-card">
            <div className="vm-icon">
              <TargetIcon />
            </div>
            <h3>VISION:</h3>
            <p>To be a premier student-led hub fostering excellence in agricultural and life sciences education and research.</p>
          </div>

          <div className="mission-card">
            <div className="vm-icon">
              <RocketIcon />
            </div>
            <h3>MISSION:</h3>
            <p>To empower students through academic support, practical experiences, and leadership development in a collaborative environment.</p>
          </div>
        </div>

        {/* DEAN SECTION */}
        <div className="dean-section">
          <div className="dean-card">
            <div className="dean-image">
              <img src={deanInfo.image} alt={deanInfo.name} />
            </div>
            <div className="dean-info">
              <p className="dean-title">{deanInfo.title}:</p>
              <p className="dean-name">{deanInfo.name}</p>
            </div>
          </div>
        </div>

        {/* TEAM MEMBERS SECTION */}
        <div className="team-section">
          <h2>Our Leadership Team</h2>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-member-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <p className="member-title">{member.title}:</p>
                  <p className="member-name">{member.name}</p>
                </div>
              </div>
            ))}
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

export default AboutPage;
