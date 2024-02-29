import type { Metadata } from 'next';
import '../../styles/globals.css';
import Nav from '@/components/Nav/Nav';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import TanstackProvider from '@/components/Providers/TanstackProvider';

export const metadata: Metadata = {
  title: 'MedCal',
  description: 'Medical appointment system',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <TanstackProvider>
          <body className="relative">
            <main className="app">
              <Nav />
              {children}
            </main>
          </body>
        </TanstackProvider>
      </UserProvider>
    </html>
  );
}
