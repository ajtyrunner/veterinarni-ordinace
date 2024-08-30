import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OpeningHours from '@/components/OpeningHours';
import Image from 'next/image';

export default function Home() {
  return (
    <>
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
              <Image
                src="/images/dogs.jpg"
                alt="Dogs"
                layout="responsive"
                width={640}
                height={480}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <OpeningHours />
      </div>
      <Footer />
    </>
  );
}
