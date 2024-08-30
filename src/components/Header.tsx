"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
              width={120}  
              height={120} 
            />
          </Link>
          <h1 className="text-2xl font-bold text-white">Veterina Svahy</h1>
        </div>
        <nav className="nav-links md:flex md:items-center">
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
