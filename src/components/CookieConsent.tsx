"use client"; // Tímto označíte komponentu jako klientskou

import { useState, useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function CookieConsent() {
  const [consentGiven, setConsentGiven] = useState<boolean | null>(null);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent) {
      setConsentGiven(true);
      loadGoogleAnalytics();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setConsentGiven(true);
    loadGoogleAnalytics();
  };

  // Opravená verze funkce gtag
  const loadGoogleAnalytics = () => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      const gtag = (...args: any[]) => {
        window.dataLayer.push(args);
      };
      gtag('js', new Date());
      gtag('config', 'G-EHQ8T6HDD3', {
        page_path: window.location.pathname,
      });
    }
  };

  if (consentGiven) {
    return (
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-EHQ8T6HDD3`}
        strategy="afterInteractive"
      />
    );
  }

  return (
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
  );
}
