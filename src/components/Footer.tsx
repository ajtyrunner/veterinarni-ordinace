import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>&copy; 2024 Veterina Svahy. Všechna práva vyhrazena.</p>
      <nav>
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
