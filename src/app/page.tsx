import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="container mx-auto p-8 flex-grow">
          <div className="home-content">
            <div className="home-text">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">O vašeho miláčka se postaráme</h1>
              <p>Komplexní péče o malá domácí zvířata</p>
              <ul className="list-disc list-inside mt-4">
                <li>Očkování</li>
                <li>Odborné zákroky</li>
                <li>Profesionální prevence</li>
                <li>Diagnostika a účinná léčba</li>
              </ul>
            </div>
            <div className="home-image">
              <Image
                src="/images/dogs.jpg"
                alt="Dogs"
                layout="responsive"
                width={800}  // Šířka obrázku
                height={600} // Výška obrázku
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Kontejner s otevírací dobou a informacemi */}
        <div className="opening-hours-container">
          <div className="opening-hours-section">
            <h2 className="text-3xl font-bold">Otevírací doba</h2>
            <p>Po 8-11  15-18</p>
            <p>Ut 8-11   15-18</p>
            <p>Stř 8-14</p>
            <p>Ctv 8-11 15-18</p>
            <p>Pa 8-11. 15-18</p>
            <p>So  9-11</p>
            <p>Ne, svátky zavřeno</p>
          </div>
          <div className="opening-hours-section">
            <h2 className="text-3xl font-bold">Jak se k nám dostanete</h2>
            <p>Veterinární ordinace Jížní svahy</p>
            <p>Středová 5668, 760 05 Zlín</p>
            <p>Email: <a href="mailto:veterina-svahy@email.cz" className="text-teal-600">veterina-svahy@email.cz</a></p>
            <p>Tel: 571 118 622, Mobil: 721 049 699</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
