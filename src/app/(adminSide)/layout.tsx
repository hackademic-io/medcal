import type { Metadata } from 'next';
import '../../styles/globals.css';
import Nav from '@/components/Nav/Nav';
import { UserProvider } from '@auth0/nextjs-auth0/client';

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
      <UserProvider>
        {' '}
        <body className="relative">
          <main className="app">
            <Nav />
            {children}
          </main>
        </body>
      </UserProvider>
    </html>
  );
}
