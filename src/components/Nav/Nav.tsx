'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Nav = () => {
  const pathname = usePathname();
  const { user } = useUser();

  const pathSegments = pathname.split('/');
  const isAppointmentPage =
    pathSegments[3] === 'confirmed' || pathSegments[3] === 'canceled';

  if (isAppointmentPage)
    return (
      <nav className="w-full flex justify-center items-center mb-5 mt-5 ">
        <span className="text-4xl font-bold text-blue-600 cursor-default">
          MedPoint
        </span>
      </nav>
    );
  else
    return (
      <nav className="w-full flex justify-between items-center mb-5 mt-5 ">
        <div>
          {pathname === '/' || pathname === '/dashboard' ? (
            <span className="text-4xl font-bold text-blue-600 cursor-default">
              MedPoint
            </span>
          ) : (
            <Link className="text-4xl font-bold text-blue-600" href={'/'}>
              MedPoint
            </Link>
          )}
        </div>
        {user ? (
          <a href="/api/auth/logout" className="blue_btn">
            Log out
          </a>
        ) : null}
      </nav>
    );
};

export default Nav;
