"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header-gradient">
      <div className="container mx-auto header-container">
        <div className="logo-title">
          <Link href="/" passHref>
            <Image 
              src="/logo.png" 
              alt="Veterina Svahy" 
              width={120} 
              height={120} 
              className="logo-image"
            />
          </Link>
          <h1 className="text-2xl font-bold text-white">Veterina Svahy</h1>
        </div>
        <div className="hamburger-btn" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
          </svg>
        </div>
        <nav className={`nav-links ${isOpen ? 'menu-open' : ''}`}>
          <Link href="/" className="nav-link">Domů</Link>
          <Link href="/services" className="nav-link">Služby</Link>
          <Link href="/equipment" className="nav-link">Vybavení</Link>
          <Link href="/team" className="nav-link">Tým</Link>
          <Link href="/contact" className="nav-link">Kontakt</Link>
          <Link href="/calendar" className="nav-link">Kalendář</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
