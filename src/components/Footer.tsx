import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldDog } from '@fortawesome/free-solid-svg-icons'; // Používáme ikonku psa

const Footer = () => {
  return (
    <footer className="footer-container">
      <p className="footer-text">
        &copy; 2024 Veterina Svahy. Všechna práva vyhrazena. Vytvořil<a href="mailto:milankopp@seznam.cz">
          <FontAwesomeIcon icon={faShieldDog} className="ml-2" /> {/* Ikonka psa */}
        </a>
      </p>
      <nav className="footer-nav">
        <a href="/" className="footer-link">Domů</a>
        <span className="footer-separator">|</span>
        <a href="/services" className="footer-link">Služby</a>
        <span className="footer-separator">|</span>
        <a href="/equipment" className="footer-link">Vybavení</a>
        <span className="footer-separator">|</span>
        <a href="/team" className="footer-link">Tým</a>
        <span className="footer-separator">|</span>
        <a href="/contact" className="footer-link">Kontakt</a>
        <span className="footer-separator">|</span>
        <a href="/calendar" className="footer-link">Kalendář</a>
      </nav>
    </footer>
  );
};

export default Footer;
