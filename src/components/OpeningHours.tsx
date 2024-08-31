import React from 'react';

const OpeningHours = () => {
  return (
    <div className="opening-hours-container bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-stretch text-center space-y-4 md:space-y-0 md:space-x-48">
        <div className="opening-hours-section flex-1 h-full">
          <h2 className="text-3xl font-bold mb-4">Otevírací doba</h2>
          <p>Po 8-11  15-18</p>
          <p>Ut 8-11  15-18</p>
          <p>Stř 8-14</p>
          <p>Čt 8-11  15-18</p>
          <p>Pá 8-11  15-18</p>
          <p>So 9-11</p>
          <p>Ne, svátky zavřeno</p>
        </div>
        <div className="opening-hours-section flex-1 h-full">
          <h2 className="text-3xl font-bold mb-4">Kde nás najdete</h2>
          <p>Veterinární ordinace Jižní svahy</p>
          <p>Středová 5668, 760 05 Zlín</p>
          <p>Email: <a href="mailto:veterina-svahy@email.cz" className="text-teal-600">veterina-svahy@email.cz</a></p>
          <p>Tel: 571 118 622, Mobil: 721 049 699</p>
        </div>
      </div>
    </div>
  );
};

export default OpeningHours;
