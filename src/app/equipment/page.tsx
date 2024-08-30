import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Equipment from '@/components/Equipment';
import OpeningHours from '@/components/OpeningHours';

const EquipmentPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto p-8 flex-grow">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Naše vybavení</h1>
          <Equipment />
        </div>
        <OpeningHours />
      </div>
      <Footer />
    </>
  );
};

export default EquipmentPage;
