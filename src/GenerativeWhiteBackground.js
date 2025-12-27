import React, { useMemo } from 'react';
import './GenerativeWhiteBackground.css';

// --- GENERATIVE SHAPES FOR WHITE BACKGROUND ---

// Atom Component
const Atom = ({ style }) => (
  <svg style={style} className="bio-particle-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
    <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.6"/>
    <circle cx="12" cy="12" r="8" opacity="0.4"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" opacity="0.3" transform="rotate(0)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" opacity="0.3" transform="rotate(60)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" opacity="0.3" transform="rotate(120)"/>
  </svg>
);

// DNA Helix Component
const DNAHelix = ({ style }) => (
  <svg style={style} className="bio-particle-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
    <path d="M 12 2 Q 15 6 12 10 Q 9 14 12 18 Q 15 22 12 26" opacity="0.5"/>
    <path d="M 12 2 Q 9 6 12 10 Q 15 14 12 18 Q 9 22 12 26" opacity="0.5"/>
    <circle cx="6" cy="5" r="1.5" fill="currentColor" opacity="0.4"/>
    <circle cx="18" cy="5" r="1.5" fill="currentColor" opacity="0.4"/>
    <circle cx="6" cy="15" r="1.5" fill="currentColor" opacity="0.4"/>
    <circle cx="18" cy="15" r="1.5" fill="currentColor" opacity="0.4"/>
  </svg>
);

// Molecule Component
const Molecule = ({ style }) => (
  <svg style={style} className="bio-particle-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
    <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.6"/>
    <circle cx="6" cy="8" r="1.5" fill="currentColor" opacity="0.5"/>
    <circle cx="18" cy="8" r="1.5" fill="currentColor" opacity="0.5"/>
    <circle cx="6" cy="16" r="1.5" fill="currentColor" opacity="0.5"/>
    <circle cx="18" cy="16" r="1.5" fill="currentColor" opacity="0.5"/>
    <line x1="12" y1="12" x2="6" y2="8" opacity="0.4"/>
    <line x1="12" y1="12" x2="18" y2="8" opacity="0.4"/>
    <line x1="12" y1="12" x2="6" y2="16" opacity="0.4"/>
    <line x1="12" y1="12" x2="18" y2="16" opacity="0.4"/>
  </svg>
);

// Cell Component
const Cell = ({ style }) => (
  <svg style={style} className="bio-particle-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
    <circle cx="12" cy="12" r="9" opacity="0.4"/>
    <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.5"/>
    <circle cx="12" cy="6" r="1" fill="currentColor" opacity="0.3"/>
    <circle cx="16" cy="16" r="1" fill="currentColor" opacity="0.3"/>
    <circle cx="8" cy="14" r="1" fill="currentColor" opacity="0.3"/>
  </svg>
);

// Orbiting Electrons Component
const ElectronOrbit = ({ style }) => (
  <svg style={style} className="bio-particle-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6">
    <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
    <ellipse cx="12" cy="12" rx="8" ry="4" opacity="0.3"/>
    <circle cx="20" cy="12" r="1" fill="currentColor" opacity="0.5"/>
  </svg>
);

// --- MAIN GENERATIVE BACKGROUND COMPONENT ---

const GenerativeWhiteBackground = ({ particleCount = 30 }) => {
  const particles = useMemo(() => {
    const types = ['atom', 'dna', 'molecule', 'cell', 'electron'];
    const count = particleCount;
    
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 20 + Math.random() * 60,
      duration: 20 + Math.random() * 40,
      delay: -(Math.random() * 20),
      type: types[Math.floor(Math.random() * types.length)],
      rotation: Math.random() * 360,
    }));
  }, [particleCount]);

  const renderParticle = (p) => {
    const style = {
      left: `${p.left}%`,
      width: `${p.size}px`,
      height: `${p.size}px`,
      animationDuration: `${p.duration}s`,
      animationDelay: `${p.delay}s`,
      transform: `rotate(${p.rotation}deg)`,
      color: `rgba(42, 138, 61, ${0.15 + Math.random() * 0.15})`, // Visible green color
    };

    switch (p.type) {
      case 'atom':
        return <Atom key={p.id} style={style} />;
      case 'dna':
        return <DNAHelix key={p.id} style={style} />;
      case 'molecule':
        return <Molecule key={p.id} style={style} />;
      case 'cell':
        return <Cell key={p.id} style={style} />;
      case 'electron':
        return <ElectronOrbit key={p.id} style={style} />;
      default:
        return <Atom key={p.id} style={style} />;
    }
  };

  return (
    <div className="generative-white-bg-container">
      {particles.map((p) => renderParticle(p))}
    </div>
  );
};

export default GenerativeWhiteBackground;
