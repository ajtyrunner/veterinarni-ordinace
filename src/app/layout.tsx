import './globals.css';

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
      </body>
    </html>
  );
}
