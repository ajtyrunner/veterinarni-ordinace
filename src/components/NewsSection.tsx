import React from 'react';
import { HiSpeakerphone } from 'react-icons/hi';

const NewsSection: React.FC = () => {
  return (
    <section className="bg-orange-50 py-8 px-4 md:px-12">
      <div className="max-w-3xl mx-auto bg-white border-l-4 border-orange-400 shadow-md rounded-md p-6">
        <div className="flex items-start gap-3">
          <HiSpeakerphone className="text-orange-500 w-7 h-7 mt-1" />
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-orange-600 mb-2">Novinky</h2>
            <div className="text-gray-800 leading-relaxed text-[15px] md:text-base">
              <p className="font-semibold">Otevírací doba o Velikonocích 2025</p>
              <ul className="ml-4 list-none space-y-1">
                <li>Čtvrtek 17.4. <strong>8–11 15–18</strong></li>
                <li>Pátek 18.4. <strong className="text-red-600">zavřeno</strong></li>
                <li>Sobota 19.4. <strong>9–11</strong></li>
                <li>Neděle 20.4. <strong className="text-red-600">zavřeno</strong></li>
                <li>Pondělí 21.4. <strong className="text-red-600">zavřeno</strong></li>
              </ul>
              <p className="mt-2">Přejeme všem krásné Velikonoce! 🐣🐰🌷</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
