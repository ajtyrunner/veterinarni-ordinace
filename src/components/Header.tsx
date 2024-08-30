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
              className="logo-image"
              width={120}  
              height={120} 
            />
          </Link>
          <h1 className="text-2xl font-bold text-white">Veterina Svahy</h1>
        </div>
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-white border-white hamburger-btn"
          onClick={toggleMenu}
        >
          <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <nav className={`${isOpen ? 'flex' : 'hidden'} nav-links md:flex md:items-center`}>
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
