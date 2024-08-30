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
            src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FPrague&amp;src=c3ZhaHkudmV0ZXJpbmFAZ21haWwuY29t&amp;color=%23039BE5&amp;mode=WEEK&amp;showTabs=0&amp;showPrint=0&amp;showNav=1&amp;showTitle=0&amp;showCalendars=0&amp;showTz=0"
            style={{ border: 0 }}
            width="100%"
            height="800"
            frameBorder="0"
            scrolling="no"
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
        <OpeningHours />
      </div>

      <Footer />
    </>
  );
}
