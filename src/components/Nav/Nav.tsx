'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react';

const Nav = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="w-full flex justify-between mb-5 mt-5 ">
      <div>
        {pathname === '/' || pathname === '/profile' ? (
          <span className="text-4xl font-bold text-blue-600 cursor-default">
            MedPoint
          </span>
        ) : (
          <Link className="text-4xl font-bold text-blue-600" href={'/'}>
            MedPoint
          </Link>
        )}
        <a href="/api/auth/logout" className="blue_btn mt-6 w-1/3 h-20">
          Log out
        </a>{' '}
      </div>
    </nav>
  );
};

export default Nav;
