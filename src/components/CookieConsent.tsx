"use client";  // Mark this as a client component

import { useState, useEffect } from 'react';
import Script from 'next/script';  // Google Analytics script

export default function CookieConsent() {
  const [consentGiven, setConsentGiven] = useState<boolean | null>(null);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent) {
      setConsentGiven(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setConsentGiven(true);
  };

  return (
    <>
      {consentGiven && (
        <>
          {/* Load Google Analytics once consent is given */}
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      {/* Consent Banner */}
      {!consentGiven && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
          <div className="container mx-auto flex items-center justify-between">
            <p>Na této stránce používáme cookies pro zajištění co nejlepšího zážitku. Pokračováním potvrzujete, že s tím souhlasíte.</p>
            <button
              className="ml-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={handleAccept}
            >
              Souhlasím
            </button>
          </div>
        </div>
      )}
    </>
  );
}
