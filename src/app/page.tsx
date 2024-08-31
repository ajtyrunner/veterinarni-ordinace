import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OpeningHours from '@/components/OpeningHours';

export default function Home() {
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
          <div className="home-content">
            <div className="home-text">
              <h1 className="text-5xl font-bold mb-4 home-header">O vašeho miláčka se postaráme</h1>
              <p>Komplexní péče o malá domácí zvířata</p>
              <ul className="mt-4">
                <li>Očkování</li>
                <li>Odborné zákroky</li>
                <li>Profesionální prevence</li>
                <li>Diagnostika a účinná léčba</li>
              </ul>
            </div>
            <div className="home-image">
              {/* Nahradíme Image komponentu divem s pozadím */}
            </div>
          </div>
        </div>
        <OpeningHours />
      </div>
      <Footer />
    </>
  );
}
