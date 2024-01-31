import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { AuthContextProvider, useAuthContext } from '@/context/auth-context';
import { useContext, useEffect } from 'react';
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
      <body className="relative overflow-hidden">
        <AuthContextProvider>
          <main className="app">
            <Nav />
            {children}
          </main>
        </AuthContextProvider>
      </body>
    </html>
  );
}
