import React from 'react';
import { HiSpeakerphone } from 'react-icons/hi';
import Link from 'next/link';

const NewsSection: React.FC = () => {
  return (
    <section className="bg-orange-50 py-8 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <HiSpeakerphone className="text-orange-500 w-6 h-6 shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-orange-600">Novinky</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 🐣 Velikonoce box */}
          <div className="bg-white border-l-4 border-orange-400 shadow-md rounded-md p-5">
            <p className="font-semibold text-orange-600 mb-2">Otevírací doba o Velikonocích 2025</p>
            <ul className="ml-4 list-none space-y-1 text-sm md:text-base text-gray-800">
              <li>Čtvrtek 17.4. <strong>8–11 15–18</strong></li>
              <li>Pátek 18.4. <strong className="text-red-600">zavřeno</strong></li>
              <li>Sobota 19.4. <strong>9–11</strong></li>
              <li>Neděle 20.4. <strong className="text-red-600">zavřeno</strong></li>
              <li>Pondělí 21.4. <strong className="text-red-600">zavřeno</strong></li>
            </ul>
            <p className="mt-2 text-sm md:text-base">Přejeme všem krásné Velikonoce! 🐣🐰🌷</p>
          </div>

          {/* 🧰 Vybavení box */}
          <div className="bg-white border-l-4 border-teal-500 shadow-md rounded-md p-5">
            <p className="font-semibold text-teal-600 mb-2">Nový pomocník při chirurgii měkkých tkání</p>
            <p className="text-sm md:text-base text-gray-800">
              Naši ordinaci jsme nově vybavili přístrojem <strong>Caiman Lektrafuse</strong> od firmy B.Braun-Aesculap. Tento přístroj umožňuje rychlé „svaření“ cév až do průměru 7 mm a jejich oddělení přímo mezi sváry.
            </p>
            <p className="mt-2 text-sm md:text-base text-gray-800">
              Šetří čas operace a snižuje množství cizorodého materiálu v těle pacienta.
            </p>
            <p className="mt-2">
              <Link
                href="/equipment#caiman"
                className="text-teal-700 underline hover:text-teal-600 transition"
              >
                Více o našem vybavení →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
