import React from 'react';
import Image from 'next/image';
import Link from 'next/link';  // Import Link pro klikatelné logo

const Header = () => {
  return (
    <header className="header-gradient">
      <div className="container mx-auto header-container">
        <div className="logo-title">
          <Link href="/" passHref>
            <Image 
              src="/logo.png" 
              alt="Veterina Svahy" 
              className="logo-image"
              width={120}  // Případně upravte šířku podle potřeby
              height={120} // Případně upravte výšku podle potřeby
            />
          </Link>
          <h1 className="text-2xl font-bold text-white">Veterina Svahy</h1>
        </div>
        <nav className="nav-links">
          <a href="/" className="nav-link">Domů</a>
          <a href="/services" className="nav-link">Služby</a>
          <a href="/equipment" className="nav-link">Vybavení</a>
          <a href="/team" className="nav-link">Tým</a>
          <a href="/contact" className="nav-link">Kontakt</a>
          <a href="/calendar" className="nav-link">Kalendář</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
