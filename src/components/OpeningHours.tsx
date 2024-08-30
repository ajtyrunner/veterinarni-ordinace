import React from 'react';

const OpeningHours = () => {
  return (
    <div className="opening-hours-container">
      <div className="opening-hours-section">
        <h2 className="text-3xl font-bold">Otevírací doba</h2>
        <p>Po 8-11  15-18</p>
        <p>Ut 8-11   15-18</p>
        <p>Stř 8-14</p>
        <p>Ctv 8-11 15-18</p>
        <p>Pa 8-11  15-18</p>
        <p>So 9-11</p>
        <p>Ne, svátky zavřeno</p>
      </div>
      <div className="opening-hours-section">
        <h2 className="text-3xl font-bold">Kde nás najdete</h2>
        <p>Veterinární ordinace Jížní svahy</p>
        <p>Středová 5668, 760 05 Zlín</p>
        <p>Email: <a href="mailto:veterina-svahy@email.cz" className="text-teal-600">veterina-svahy@email.cz</a></p>
        <p>Tel: 571 118 622, Mobil: 721 049 699</p>
      </div>
    </div>
  );
};

export default OpeningHours;
