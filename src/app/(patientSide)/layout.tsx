import type { Metadata } from 'next';
import '../../styles/globals.css';
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
            <nav className="w-full flex justify-center items-center mb-5 mt-5 ">
              <span className="text-4xl font-bold text-blue-600 cursor-default">
                MedPoint
              </span>
            </nav>
            {children}
          </main>
        </body>
      </UserProvider>
    </html>
  );
}
