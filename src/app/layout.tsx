import './globals.css';

export const metadata = {
  title: 'Veterinární ordinace',
  description: 'Nejlepší veterinární péče pro vaše mazlíčky.',
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
