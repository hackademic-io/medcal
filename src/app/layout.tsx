import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Nav from '@/components/Nav/Nav';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MedPoint',
  description: 'Medical appointment system',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden">
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
