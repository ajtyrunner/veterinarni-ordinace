"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons"; // Přidání Facebook ikony

const Header = () => {
    const [active, setActive] = useState(false);

    const toggleNav = () => {
        setActive(!active);
    };

    return (
        <header className="header-gradient">
            {/* Kontaktni informace nad logem */}
            <div className="w-full bg-gradient-to-r from-[rgba(var(--header-start-color),1)] to-[rgba(var(--header-end-color),1)] p-2 text-center text-white flex justify-center items-center space-x-4 flex-wrap">
                <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faMobileAlt} />
                    <a href="tel:721049699" className="text-white">
                        Mobil: 721 049 699
                    </a>
                </div>
                <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <a href="mailto:veterina-svahy@email.cz" className="text-white">
                        veterina-svahy@email.cz
                    </a>
                </div>
                {/* Přidání odkazu na Facebook */}
                <div className="flex items-center space-x-2">
                    
                    <a href="https://www.facebook.com/people/Veterina-Svahy/100049515202415/" className="text-white" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </div>
            </div>
            <div className="container mx-auto px-6 h-24 flex justify-between items-center flex-wrap md:flex-nowrap">
                {/* Logo */}
                <div className="flex items-center flex-1">
                    <Link href="/" passHref>
                        <Image 
                            src="/logo.png" 
                            alt="Veterina Svahy" 
                            className="logo-image"
                            width={120}  
                            height={120} 
                        />
                    </Link>
                    <h1 className="text-white font-bold text-2xl ml-4">Veterina Svahy</h1>
                </div>

                {/* Hamburger Menu */}
                <div
                    className="hamburger-menu md:hidden block space-y-1"
                    onClick={toggleNav}
                >
                    <div className="h-1 w-6 bg-white rounded-lg"></div>
                    <div className="h-1 w-6 bg-white rounded-lg"></div>
                    <div className="h-1 w-6 bg-white rounded-lg"></div>
                </div>

                {/* Nav List for Desktop */}
                <nav className="hidden md:flex md:flex-row md:space-x-4">
                    <Link href="/" className="nav-link text-white/80 hover:text-white/90 transition-all duration-300">
                        Domů
                    </Link>
                    <Link href="/services" className="nav-link text-white/80 hover:text-white/90 transition-all duration-300">
                        Služby
                    </Link>
                    <Link href="/equipment" className="nav-link text-white/80 hover:text-white/90 transition-all duration-300">
                        Vybavení
                    </Link>
                    <Link href="/team" className="nav-link text-white/80 hover:text-white/90 transition-all duration-300">
                        Tým
                    </Link>
                    <Link href="/contact" className="nav-link text-white/80 hover:text-white/90 transition-all duration-300">
                        Kontakt
                    </Link>
                    <Link href="/calendar" className="nav-link text-white/80 hover:text-white/90 transition-all duration-300">
                        Kalendář
                    </Link>
                </nav>
            </div>

            {/* Nav List for Mobile */}
            <div
                className={
                    active
                        ? "flex flex-col space-y-4 bg-gradient-to-r from-[rgba(var(--header-start-color),1)] to-[rgba(var(--header-end-color),1)] w-full p-5 md:hidden"
                        : "hidden"
                }
            >
                <Link href="/" className="nav-link text-white/80 hover:text-white/90 transition-all duration-300">
                    Domů
                </Link>
                <Link href="/services" className="nav-link text-white/80 hover:text-white/90 transition-all duration-300">
                    Služby
                </Link>
                <Link href="/equipment" className="nav-link text-white/80 hover:text-white/90 transition-all duration-300">
                    Vybavení
                </Link>
                <Link href="/team" className="nav-link text-white/80 hover:text-white/90 transition-all duration-300">
                    Tým
                </Link>
                <Link href="/contact" className="nav-link text-white/80 hover:text-white/90 transition-all duration-300">
                    Kontakt
                </Link>
                <Link href="/calendar" className="nav-link text-white/80 hover:text-white/90 transition-all duration-300">
                    Kalendář
                </Link>
            </div>
        </header>
    );
};

export default Header;
