import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import OpeningHours from '@/components/OpeningHours';

export default function Services() {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto p-8 flex-grow">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Naše služby</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Veterinární léčebná a preventivní činnost"
              description="Veterinární léčebná a preventivní činnost se zaměřením na psy, kočky, drobné savce a plazy. Vakcinace a odčervení."
            />
            <ServiceCard
              title="Cestovní dokumenty a mikročipy"
              description="Vydávání cestovních pasů, potvrzení zdravotního stavu, aplikace mikročipů."
            />
            <ServiceCard
              title="Ošetření drápků a análních žlázek"
              description="Kompletní ošetření drápků a análních žlázek pro zajištění zdraví a komfortu vašeho mazlíčka."
            />
            <ServiceCard
              title="Poradenství v oboru chovu a výživy zvířat"
              description="Poskytujeme odborné poradenství v oblasti chovu a výživy zvířat."
            />
            <ServiceCard
              title="Oftalmologie"
              description="Kompletní oftalmologické vyšetření a chirurgické zákroky na víčkách, spojivce, rohovce a předním očním segmentu."
            />
            <ServiceCard
              title="Stomatologie"
              description="Odstranění zubního kamene ultrazvukem, zaleštění zubů, extrakce trvalých a perzistentních mléčných zubů."
            />
            <ServiceCard
              title="Dermatologie"
              description="Vyšetření kůže a kožních derivátů (uši, drápky), diagnostika (parazitologické, bakteriologické, mykologické vyšetření, cytologie, biopsie kůže)."
            />
            <ServiceCard
              title="Gynekologie a urologie"
              description="Kompletní vyšetření moči, určení optimální doby krytí, RTG a USG vyšetření gravidity."
            />
            <ServiceCard
              title="Ultrasonografické vyšetření"
              description="Ultrasonografické vyšetření s možným tiskem nálezu."
            />
            <ServiceCard
              title="Rentgenologické vyšetření"
              description="Nepřímá digitalizace s možností archivace snímků, zhotovení oficiálních DKK a DKL, OCD snímků."
            />
            <ServiceCard
              title="Laboratorní vyšetření"
              description="Odběr krve pro biochemické a hematologické vyšetření, koprologické vyšetření trusu, cytologické vyšetření."
            />
            <ServiceCard
              title="Chirurgie"
              description="Chirurgie měkkých i tvrdých tkání."
            />
            <ServiceCard
              title="Doplňková činnost"
              description="Prodej krmiv, veterinárních diet, vitamínů a kloubní výživy včetně poradenství."
            />
          </div>
        </div>
        <OpeningHours />
      </div>
      <Footer />
    </>
  );
}
