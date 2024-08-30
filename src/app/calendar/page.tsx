import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OpeningHours from '@/components/OpeningHours';

export default function Calendar() {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto p-8 flex-grow">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Pracovní kalendář</h1>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=Europe%2FPrague"
            style={{ border: 0 }}
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
      </div>
      <OpeningHours />
      <Footer />
    </>
  );
}
