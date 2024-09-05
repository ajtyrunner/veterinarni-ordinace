import './globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next";
import CookieConsent from '@/components/CookieConsent';

export const metadata = {
  title: 'Veterina Svahy',
  description: 'Veterinární ordinace Jížní svahy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className="flex flex-col min-h-screen">
        {children}
        <SpeedInsights />
        <CookieConsent />
      </body>
    </html>
  );
}
