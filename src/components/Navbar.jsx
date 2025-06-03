import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = ({ isOpen, setIsOpen, isDesktop }) => {
  const closeMenu = () => !isDesktop && setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Verzögertes Anzeigen des Burger-Buttons nach dem Schließen
  const [showBurger, setShowBurger] = useState(true);

  useEffect(() => {
    if (!isOpen && !isDesktop) {
      setShowBurger(false);
      const timer = setTimeout(() => setShowBurger(true), 500);
      return () => clearTimeout(timer);
    } else {
      setShowBurger(false);
    }
  }, [isOpen, isDesktop]);

  return (
    <>
      {/* Burger-Button nur auf Mobile sichtbar, wenn Menü geschlossen */}
      {!isDesktop && showBurger && !isOpen && (
        <button className="burger-button" onClick={toggleMenu}>☰</button>
      )}

      {/* Overlay bei mobilem Menü */}
      {isOpen && !isDesktop && (
        <div className="navbar-overlay" onClick={closeMenu}></div>
      )}

      {/* Sidebar-Menü */}
      <aside className={`navbar ${isOpen || isDesktop ? 'open' : ''}`}>
        {/* Schließen (X) Button bei Mobile */}
        {!isDesktop && (
          <button className="close-button" onClick={closeMenu}>×</button>
        )}

        {/* Logo mit Link zur Startseite */}
        <NavLink to="/" className="logo-link" onClick={closeMenu}>
          <img src="/logo.svg" alt="Madways Logo" className="logo" />
        </NavLink>

        {/* Navigation */}
        <nav onClick={closeMenu}>
          <NavLink to="/" end>MADWAYS</NavLink>
          <NavLink to="/kompetenzen">KOMPETENZEN</NavLink>
          <NavLink to="/referenzen">REFERENZEN</NavLink>
          <NavLink to="/team">TEAM</NavLink>
        </nav>

        {/* Footer: GitHub & Kontakt */}
        <div className="navbar-footer">
          <a
            href="https://github.com/Madways"
            target="_blank"
            rel="noreferrer"
            className="github-icon"
          >
            <img src="/github.svg" alt="GitHub" />
          </a>
          <NavLink to="/kontakt" className="kontakt-link" onClick={closeMenu}>
            KONTAKT
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
