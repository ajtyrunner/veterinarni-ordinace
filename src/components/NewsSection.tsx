// components/NewsSection.tsx
import React from 'react';

const NewsSection: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-12 border-t border-orange-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-6">
          📰 Novinky
        </h2>
        <div className="space-y-4 text-gray-700 text-base leading-relaxed">
          <div className="border-l-4 border-orange-400 pl-4">
            <p><strong>Otevírací doba o Velikonocích 2025</strong></p>
            <p>Čtvrtek 17.4. <strong>8–11 15–18</strong></p>
            <p>Pátek 18.4. <strong>zavřeno</strong></p>
            <p>Sobota 19.4. <strong>9–11</strong></p>
            <p>Neděle 20.4. <strong>zavřeno</strong></p>
            <p>Pondělí 21.4. <strong>zavřeno</strong></p>
            <p className="mt-2">Přejeme všem krásné Velikonoce! 🐣🐰🌷</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
