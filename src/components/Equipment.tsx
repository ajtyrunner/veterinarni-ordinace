import React from 'react';
import Image from 'next/image';

const Equipment = () => {
  const equipmentItems = [

    {
        title: 'Hematologický analyzátor',
        description: 'Analyzátor krve, který zvládne vyšetřit víc parametrů u různých druhů zvířat.',
        image: '/images/hematalogie.jpg', // Relativní cesta k obrázku
        alt: 'Hematologický analyzátor'
      },    
      {
          title: 'Sterilizátor',
          description: 'Autokláv MELAG SteriHero Vet je nejmodernějším nástrojem, který zajistí spolehlivou sterilizaci.',
          image: '/images/sterilizator.jpg', // Relativní cesta k obrázku
          alt: 'Sterilizátor'
        },          
    {
      title: 'Sonografické vyšetření',
      description: 'Pokročilý ultrazvukový přístroj pro detailní vyšetření.',
      image: '/images/sono.jpg', // Relativní cesta k obrázku
      alt: 'Sonografické vyšetření'
    },
    {
        title: 'RTG vyšetření',
        description: 'Moderní rentgenové vybavení pro přesnou diagnostiku.',
        image: '/images/rtg.jpg', // Relativní cesta k obrázku
        alt: 'RTG vyšetření'
      },  
      {
        title: 'Inhalační anesteziologické jednotka',
        description: '2 inhalační anesteziologické jednotky pro bezpečné vedení anestezie, jedna na operačním sále a druhá na zubním sále.',
        image: '/images/iaj.jpg', // Relativní cesta k obrázku
        alt: 'Inhalační anesteziologické jednotka'
      },
      {
          title: 'Pooperační péče',
          description: 'Vyhřívané hospitalizační boxy pro drobné savce a plazy.',
          image: '/images/klec.jpg', // Relativní cesta k obrázku
          alt: 'Pooperační péče'
        },
        {
            title: 'Štěrbinová lampa',
            description: 'Štěrbinová lampa Kowa k oftamologickému vyšetření.',
            image: '/images/lampa.jpg', // Relativní cesta k obrázku
            alt: 'Štěrbinová lampa'
          } 
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {equipmentItems.map((item, index) => (
        <div key={index} className="equipment-item bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-center"> {/* Flexbox pro centrování */}
            <Image
              src={item.image}
              alt={item.alt}
              width={400}
              height={300}
              className="rounded-lg mb-4 shadow-lg"
            />
          </div>
          <h2 className="text-2xl font-semibold text-teal-600 mt-4">{item.title}</h2>
          <p className="text-lg text-gray-700 mt-4">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Equipment;
