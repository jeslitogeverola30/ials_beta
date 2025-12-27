import React, { useState } from 'react';
import './SignUpPage.css';
import logo from './logo.svg';
import GenerativeWhiteBackground from './GenerativeWhiteBackground';

// --- ICONS ---

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);

const IdIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><line x1="16" y1="11" x2="16" y2="11.01"></line></svg>
);

const BookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
);

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);

const GenerativeBackground = () => {
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

  const particles = [
    { id: 0, left: 10, size: 20, duration: 25, delay: -10, type: 'leaf', rotation: 45 },
    { id: 1, left: 20, size: 30, duration: 30, delay: -15, type: 'cell', rotation: 90 },
    { id: 2, left: 30, size: 25, duration: 28, delay: -12, type: 'leaf', rotation: 180 },
    { id: 3, left: 40, size: 35, duration: 32, delay: -20, type: 'cell', rotation: 270 },
    { id: 4, left: 50, size: 22, duration: 26, delay: -8, type: 'leaf', rotation: 45 },
    { id: 5, left: 60, size: 28, duration: 29, delay: -18, type: 'cell', rotation: 135 },
    { id: 6, left: 70, size: 24, duration: 27, delay: -14, type: 'leaf', rotation: 225 },
    { id: 7, left: 80, size: 32, duration: 31, delay: -22, type: 'cell', rotation: 315 },
    { id: 8, left: 90, size: 26, duration: 30, delay: -16, type: 'leaf', rotation: 90 },
  ];

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

const SignUpPage = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    studentId: '',
    program: 'Bachelor of Science in Biology',
    yearLevel: '1st Year',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    // Handle account creation logic here
    console.log('Creating account with:', formData);
    // For now, just navigate to home or signin
    alert('Account created successfully!');
  };

  return (
    <div className="signup-container">
      {/* --- HEADER SECTION --- */}
      <header className="signup-header">
        <GenerativeBackground />

        <div className="signup-top-bar">
          <div className="signup-logo-container">
            <div className="signup-logo-circle">
              <img src={logo} alt="Logo" className="signup-logo-img" />
            </div>
            <span className="signup-brand-name">Institute of Agriculture and Life Sciences</span>
          </div>
          <button className="signup-app-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            <span>Get the App</span>
          </button>
        </div>

        <nav className="signup-navbar">
          <button 
            className="signup-nav-item active" 
            onClick={() => onNavigate('home')}
          >
            Home
          </button>
          <button 
            className="signup-nav-item" 
            onClick={() => onNavigate('events')}
          >
            Events
          </button>
          <a href="#payments" className="signup-nav-item">Payments</a>
          <button 
            className="signup-nav-item" 
            onClick={() => onNavigate('about')}
          >
            About Us
          </button>
          <button 
            className="signup-nav-item" 
            onClick={() => onNavigate('contact')}
          >
            Contact
          </button>
          <div className="signup-nav-item more signup-dropdown">
            More
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
            <div className="signup-dropdown-menu">
              <button 
                className="signup-dropdown-item"
                onClick={() => onNavigate('activity')}
              >
                Activity Clearance Card
              </button>
            </div>
          </div>
        </nav>

        <div className="signup-curve-separator">
          <svg viewBox="0 0 1440 320" className="signup-wave-svg" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,192L80,186.7C160,181,320,171,480,186.7C640,203,800,245,960,245.3C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="signup-main-content">
        <GenerativeWhiteBackground particleCount={25} />
        <div className="signup-form-wrapper">
          <div className="signup-form-card">
            <h1 className="signup-title">Create Account</h1>

            <form onSubmit={handleCreateAccount} className="signup-form">
              {/* Full Name Field */}
              <div className="signup-form-group">
                <label className="signup-label">Full Name</label>
                <div className="signup-input-wrapper">
                  <UserIcon />
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="signup-input"
                    required
                  />
                </div>
              </div>

              {/* Student ID Field */}
              <div className="signup-form-group">
                <label className="signup-label">Student ID Number</label>
                <div className="signup-input-wrapper">
                  <IdIcon />
                  <input
                    type="text"
                    name="studentId"
                    placeholder="Student ID Number"
                    value={formData.studentId}
                    onChange={handleInputChange}
                    className="signup-input"
                    required
                  />
                </div>
              </div>

              {/* Program Field */}
              <div className="signup-form-group">
                <label className="signup-label">Program</label>
                <div className="signup-select-wrapper">
                  <BookIcon />
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="signup-select"
                  >
                    <option>Bachelor of Science in Biology</option>
                    <option>Bachelor of Science in Agriculture</option>
                    <option>Bachelor of Science in Environmental Science</option>
                    <option>Bachelor of Science in Life Sciences</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Year Level Field */}
              <div className="signup-form-group">
                <label className="signup-label">Year Level</label>
                <div className="signup-select-wrapper">
                  <CalendarIcon />
                  <select
                    name="yearLevel"
                    value={formData.yearLevel}
                    onChange={handleInputChange}
                    className="signup-select"
                  >
                    <option>1st Year</option>
                    <option>2nd Year</option>
                    <option>3rd Year</option>
                    <option>4th Year</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="signup-btn">Create Account</button>
            </form>

            <p className="signup-signin-link">
              Already have an account? <button 
                onClick={() => onNavigate('signin')}
                style={{ background: 'none', border: 'none', color: '#1d7522', cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold' }}
              >Sign In</button>
            </p>
          </div>
        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="signup-footer">
        <GenerativeBackground />

        <div className="signup-footer-curve">
          <svg viewBox="0 0 1440 320" className="signup-footer-wave-svg" preserveAspectRatio="none">
            <path fill="#1e5c25" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,112C1120,96,1280,96,1360,96L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>

        <div className="signup-footer-content">
          <div className="signup-footer-logo-wrapper">
            <div className="signup-logo-circle-footer">
              <img src={logo} alt="Logo" className="signup-logo-img-small" />
            </div>
          </div>
          
          <p className="signup-footer-text">Institute of Agriculture and Life Sciences Student Organization</p>
          
          <div className="signup-footer-divider-line"></div>
          
          <p className="signup-footer-sub">© DOSCST 2016 • All Rights Reserved</p>
          
          <div className="signup-footer-links">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignUpPage;
