import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Equipment from '@/components/Equipment';
import OpeningHours from '@/components/OpeningHours';

const EquipmentPage = () => {
  return (
    <>
      <Header />
      <Equipment />
      <OpeningHours />      
      <Footer />
    </>
  );
};

export default EquipmentPage;
