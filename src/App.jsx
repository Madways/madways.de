import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Madways from './pages/Madways';
import Kompetenzen from './pages/Kompetenzen';
import Referenzen from './pages/Referenzen';
import Kontakt from './pages/Kontakt';
import Team from './pages/Team';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const shouldShift = isDesktop;

  return (
    <Router>
      <Navbar isOpen={menuOpen} setIsOpen={setMenuOpen} isDesktop={isDesktop} />
      <div className={`main-content ${shouldShift ? 'shifted' : ''}`}>
        <Routes>
          <Route path="/" element={<Madways />} />
          <Route path="/kompetenzen" element={<Kompetenzen />} />
          <Route path="/referenzen" element={<Referenzen />} />
          <Route path="/team" element={<Team />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
