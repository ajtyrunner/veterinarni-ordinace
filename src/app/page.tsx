"use client"; // Tento řádek zajišťuje, že komponenta běží na klientské straně

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OpeningHours from '@/components/OpeningHours';
import AlertBadge from '@/components/AlertBadge';
import Image from 'next/image';

export default function Home() {
  const imageId = '14bnS2wf_VQ1AoSmaPRo4avErNeCVxO-m'; // Nahraďte skutečným ID souboru z Google Drive
  const [imageUrl, setImageUrl] = useState(`https://lh3.googleusercontent.com/d/${imageId}`);

  // Funkce pro aktualizaci obrázku každých 30 sekund
  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageUrl(`https://lh3.googleusercontent.com/d/${imageId}`);
    }, 300000); // 30 sekund

    // Vyčistíme interval při odchodu z komponenty
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Head>
        <title>Veterina Svahy - Komplexní péče o domácí zvířata</title>
        <meta name="description" content="Veterina Svahy poskytuje komplexní péči o malá domácí zvířata. Nabízíme očkování, odborné zákroky, prevenci a léčbu." />
        <meta name="keywords" content="veterina, zvířata, očkování, léčba, prevence, zákroky, veterinární ordinace, Zlín" />
        <meta property="og:title" content="Veterina Svahy - Komplexní péče o domácí zvířata" />
        <meta property="og:description" content="Veterina Svahy poskytuje komplexní péči o malá domácí zvířata." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.veterina-svahy.cz" />
        <meta property="og:image" content="https://www.veterina-svahy.cz/images/dogs.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="Cache-Control" content="no-store, no-cache, must-revalidate, max-age=0" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />        
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "VeterinaryCare",
            "name": "Veterina Svahy",
            "description": "Komplexní péče o malá domácí zvířata včetně očkování, odborných zákroků, prevence a léčby.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Středová 5668",
              "addressLocality": "Zlín",
              "postalCode": "760 05",
              "addressCountry": "CZ"
            },
            "telephone": "+420571118622",
            "mobile": "+420721049699",
            "email": "veterina-svahy@email.cz",
            "openingHours": "Mo,Tu,Th,Fr 08:00-11:00, 15:00-18:00 We 08:00-14:00 Sa 09:00-11:00",
            "url": "https://www.veterina-svahy.cz"
          }
          `}
        </script>
      </Head>
      <Header />
      <div className="home-container">
        <div className="container mx-auto p-8 flex-grow">
          <div className="home-content flex flex-col md:flex-row">
            <div className="home-text">
              <h1 className="text-4xl font-bold mb-4 home-header">O vašeho miláčka se postaráme</h1>
              <p className="mb-4">Komplexní péče o malá domácí zvířata</p>
              <ul className="mt-4 mb-8">
                <li>Očkování</li>
                <li>Odborné zákroky</li>
                <li>Profesionální prevence</li>
                <li>Diagnostika a účinná léčba</li>
                <li>Pohled do čekárny</li>                
              </ul>
              {/* Nový objekt na zobrazení obrázku */}
              <div className="snapshot-container mb-8">
                <div className="snapshot-image border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    unoptimized
                    src={imageUrl}
                    alt="Snapshot from Camera"
                    layout="responsive"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
              </div>              
            </div>
            <div className="home-image">
              {/* Tady zůstává pozadí s dogs.jpg */}
            </div>
          </div>
        </div>
        <AlertBadge />           
        <OpeningHours />
      </div>
      <Footer />   
    </>
  );
}
