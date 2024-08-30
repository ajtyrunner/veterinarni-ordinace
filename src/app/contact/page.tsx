import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import OpeningHours from '@/components/OpeningHours';

export default function Contact() {
  return (
    <>
      <Header />
      <div className="contact-page">
        <div className="container mx-auto p-8 flex-grow">
          <h1 className="contact-header">Kontakt</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="contact-info">
              <h2 className="text-2xl font-semibold text-teal-600 mb-4">Veterina Svahy</h2>
              <p className="mb-2">MVDr. Lucia Friedlaenderová</p>
              <p className="mb-2">Středová 5668, 760 05 Zlín</p>
              <p className="mb-2">Tel: 571 118 622</p>
              <p className="mb-2">Mobil: 721 049 699</p>
              <p className="mb-2">
                Email: <a href="mailto:veterina-svahy@email.cz" className="text-teal-600">veterina-svahy@email.cz</a>
              </p>
              <p className="mb-8">
                Web: <a href="http://www.veterina-svahy.cz" className="text-teal-600">www.veterina-svahy.cz</a>
              </p>
              <div className="mt-8">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.475632799685!2d17.68810521521787!3d49.2233765793237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713e53101f89089%3A0x1b5e1be14c2c4d8!2sSt%C5%99edov%C3%A1%205668%2C%20760%2005%20Zl%C3%ADn!5e0!3m2!1scs!2scz!4v1690970120734!5m2!1scs!2scz"
                  width="100%" 
                  height="450" 
                  style={{border: 0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
            <div className="contact-image-container">
              <Image
                src="/images/veterina-building.jpg"
                alt="Budova Veterina Svahy"
                layout="fill"
                className="contact-image rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <OpeningHours />
      <Footer />
    </>
  );
}