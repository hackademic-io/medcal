'use client';

import { useAuthContext } from '@/context/auth-context';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react';
import AdminDisplay from './AdminDisplay';
import PatientDisplay from './PatientDisplay';

const Nav = () => {
  const { user, logout } = useAuthContext();
  const pathname = usePathname();
  const router = useRouter();

  let isUserAuth = Object.keys(user).length !== 0;

  async function handleLogOut() {
    await logout();
    router.push('/');
  }

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
      </div>
      {isUserAuth ? (
        user.role !== 'Patient' ? (
          <AdminDisplay handleLogOut={handleLogOut} />
        ) : (
          <PatientDisplay handleLogOut={handleLogOut} />
        )
      ) : pathname === '/' ? null : (
        <div className="flex gap-4">
          <Link href={'/login'} className="outline_btn">
            Log in
          </Link>
          <Link href={'/sign-up'} className="outline_btn">
            Sign up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
