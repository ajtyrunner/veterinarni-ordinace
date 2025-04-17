import React from 'react';
import Image from 'next/image';

const Equipment = () => {
  const equipmentItems = [
    {
      id: 'caiman',
      title: 'Caiman Lektrafuse',
      description:
        'Přístroj pro chirurgii měkkých tkání od firmy B.Braun-Aesculap, který umožňuje rychlé „svaření“ cév a jejich oddělení přímo mezi sváry. Šetří čas operace a snižuje množství cizorodého materiálu v těle pacienta.',
      image: '/images/caiman.jpg', // Ujisti se, že je tento obrázek v /public/images/
      alt: 'Caiman Lektrafuse'
    },
    {
      title: 'Hematologický analyzátor',
      description:
        'Analyzátor krve, který zvládne vyšetřit víc parametrů u různých druhů zvířat.',
      image: '/images/hematalogie.jpg',
      alt: 'Hematologický analyzátor'
    },
    {
      title: 'Sterilizátor',
      description:
        'Autokláv MELAG SteriHero Vet je nejmodernějším nástrojem, který zajistí spolehlivou sterilizaci.',
      image: '/images/sterilizator.jpg',
      alt: 'Sterilizátor'
    },
    {
      title: 'Sonografické vyšetření',
      description: 'Pokročilý ultrazvukový přístroj pro detailní vyšetření.',
      image: '/images/sono.jpg',
      alt: 'Sonografické vyšetření'
    },
    {
      title: 'RTG vyšetření',
      description: 'Moderní rentgenové vybavení pro přesnou diagnostiku.',
      image: '/images/rtg.jpg',
      alt: 'RTG vyšetření'
    },
    {
      title: 'Inhalační anesteziologické jednotka',
      description:
        '2 inhalační anesteziologické jednotky pro bezpečné vedení anestezie, jedna na operačním sále a druhá na zubním sále.',
      image: '/images/iaj.jpg',
      alt: 'Inhalační anesteziologické jednotka'
    },
    {
      title: 'Pooperační péče',
      description:
        'Vyhřívané hospitalizační boxy pro drobné savce a plazy.',
      image: '/images/klec.jpg',
      alt: 'Pooperační péče'
    },
    {
      title: 'Štěrbinová lampa',
      description:
        'Štěrbinová lampa Kowa k oftamologickému vyšetření.',
      image: '/images/lampa.jpg',
      alt: 'Štěrbinová lampa'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {equipmentItems.map((item, index) => (
        <div
          key={index}
          id={item.id || undefined}
          className="equipment-item bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex justify-center">
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
