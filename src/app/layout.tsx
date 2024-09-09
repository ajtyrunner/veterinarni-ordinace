import './globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next";
import CookieConsent from '@/components/CookieConsent'; // Keep CookieConsent component

export const metadata = {
  title: 'Veterina Svahy',
  description: 'Veterinární ordinace Jižní svahy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <head>
        {/* Google Analytics will be conditionally loaded by the CookieConsent component */}
      </head>
      <body className="flex flex-col min-h-screen">
        {children}
        <CookieConsent />
        <SpeedInsights />
      </body>
    </html>
  );
}
