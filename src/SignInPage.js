import React, { useMemo } from 'react';
import './SignInPage.css';
import logo from './logo.svg';
import GenerativeWhiteBackground from './GenerativeWhiteBackground';

// --- ICONS ---
const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);

const LockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
);

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path></svg>
);

const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
);

const EyeOffIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
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

// --- SIGN IN PAGE COMPONENT ---
const SignInPage = ({ onNavigate }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [notification, setNotification] = React.useState(null);

  const handlePaymentClick = () => {
    setNotification('You need to sign in first before you can view the payments page');
    setTimeout(() => setNotification(null), 5000);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Sign In:', { email, password, rememberMe });
    // Navigate to home after sign in
    onNavigate('home');
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign in logic here
    console.log('Google Sign In');
    onNavigate('home');
  };

  return (
    <div className="signin-page-container">
      <header className="signin-header">
        <GenerativeBackground />
        
        <div className="signin-nav-bar">
          <div className="signin-logo-container">
            <div className="signin-logo-circle">
              <img src={logo} alt="Logo" className="signin-logo-img" />
            </div>
            <span className="signin-brand-name">Institute of Agriculture and Life Sciences</span>
          </div>
          <div className="signin-top-bar-buttons">
            <button className="signin-app-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
              <span>Get the App</span>
            </button>
            <button className="signin-signin-btn active" onClick={() => onNavigate('signin')}>Sign In</button>
            <button className="signin-signup-btn" onClick={() => onNavigate('signup')}>Sign Up</button>
          </div>
        </div>

        <nav className="signin-navbar">
          <button 
            className="signin-nav-item active" 
            onClick={() => onNavigate('home')}
          >
            Home
          </button>
          <button 
            className="signin-nav-item" 
            onClick={() => onNavigate('events')}
          >
            Events
          </button>
          <button 
            className="signin-nav-item"
            onClick={handlePaymentClick}
          >
            Payments
          </button>
          <button 
            className="signin-nav-item" 
            onClick={() => onNavigate('about')}
          >
            About Us
          </button>
          <button 
            className="signin-nav-item" 
            onClick={() => onNavigate('contact')}
          >
            Contact
          </button>
          <button 
            className="signin-nav-item" 
            onClick={() => onNavigate('activity')}
          >
            Activity Card
          </button>
        </nav>

        <div className="signin-curve-separator">
          <svg viewBox="0 0 1440 320" className="signin-wave-svg" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,192L80,186.7C160,181,320,171,480,186.7C640,203,800,245,960,245.3C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </header>

      <main className="signin-main-content">
        {notification && (
          <div className="signin-notification">
            {notification}
          </div>
        )}
        <GenerativeWhiteBackground particleCount={25} />
        <div className="signin-form-container">
          <div className="signin-card">
            <div className="signin-modal-logo">
              <img src={logo} alt="Logo" className="signin-modal-logo-img" />
            </div>
            <h1>Sign In</h1>
            
            <form onSubmit={handleSignIn} className="signin-form">
              {/* EMAIL INPUT */}
              <div className="form-group-signin">
                <label htmlFor="email">Email</label>
                <div className="input-wrapper">
                  <MailIcon />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* PASSWORD INPUT */}
              <div className="form-group-signin">
                <label htmlFor="password">Password</label>
                <div className="input-wrapper">
                  <LockIcon />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="password-toggle-btn"
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
              </div>

              {/* REMEMBER ME & FORGOT PASSWORD */}
              <div className="signin-options">
                <label className="remember-me-checkbox">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span>Remember Me</span>
                </label>
                <a href="#forgot" className="forgot-password-link">Forgot Password?</a>
              </div>

              {/* SIGN IN BUTTON */}
              <button type="submit" className="signin-submit-btn">
                Sign In
              </button>
            </form>

            {/* DIVIDER */}
            <div className="signin-divider">
              <span>or</span>
            </div>

            {/* GOOGLE SIGN IN BUTTON */}
            <button onClick={handleGoogleSignIn} className="google-signin-btn">
              <GoogleIcon />
              <span>Sign In with Google</span>
            </button>

            {/* SIGN UP LINK */}
            <div className="signin-signup-link">
              Don't have an account? <button 
                onClick={() => onNavigate('signup')}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                className="create-account-btn"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="signin-footer">
        <GenerativeBackground />

        <div className="signin-footer-curve">
          <svg viewBox="0 0 1440 320" className="signin-footer-wave-svg" preserveAspectRatio="none">
            <path fill="#1e5c25" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,112C1120,96,1280,96,1360,96L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>

        <div className="signin-footer-content">
          <div className="signin-footer-logo-wrapper">
             <div className="signin-logo-circle-footer">
                <img src={logo} alt="Logo" className="signin-logo-img-footer" />
             </div>
          </div>
          
          <p className="signin-footer-text">Institute of Agriculture and Life Sciences Student Organization</p>
          
          <div className="signin-footer-divider-line"></div>
          
          <p className="signin-footer-sub">© DOSCST 2016 • All Rights Reserved</p>
          
          <div className="signin-footer-links">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignInPage;
