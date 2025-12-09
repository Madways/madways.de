import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import ConsentBanner from './components/ConsentBanner';

import Madways from './pages/Madways';
import Kompetenzen from './pages/Kompetenzen';
import Referenzen from './pages/Referenzen';
import Kontakt from './pages/Kontakt';
import Team from './pages/Team';
import Impressum from './pages/Impressum';
import Preisliste from './pages/Preisliste';
import Datenschutz from './pages/Datenschutz';
import Preisliste_25 from './pages/Preisliste_25';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [consentGiven, setConsentGiven] = useState(false); 

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const shouldShift = isDesktop;

  return (
    <Router>
      <ConsentBanner onAccept={setConsentGiven} /> 
      <Navbar isOpen={menuOpen} setIsOpen={setMenuOpen} isDesktop={isDesktop} />
      <div className={`main-content ${shouldShift ? 'shifted' : ''}`}>
        <Routes>
          <Route path="/" element={<Madways />} />
          <Route path="/kompetenzen/" element={<Kompetenzen />} />
          <Route path="/referenzen/" element={<Referenzen consentGiven={consentGiven} />} />
          <Route path="/team/" element={<Team />} />
          <Route path="/kontakt/" element={<Kontakt />} />
          <Route path="/impressum/" element={<Impressum />} />
          <Route path="/preisliste/" element={<Preisliste />} />
          <Route path="/preisliste_25/" element={<Preisliste_25 />} />
          <Route path="/datenschutz/" element={<Datenschutz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;