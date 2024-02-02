'use client';

import { useAuthContext } from '@/context/auth-context';
import Link from 'next/link';
import React from 'react';

const CancelPage = () => {
  const { user } = useAuthContext();
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className=" bg-gray-200 p-10">
        <p className="mb-5 text-5xl">Your appointment has been canceled!</p>
        <p className=" leading-tight text-3xl">
          We will send you a confirm letter on{' '}
          <span className="font-bold ">{user.email}</span>
        </p>
        <div className="flex justify-center mt-6 gap-8">
          <Link href={'/profile'} className="blue_btn">
            Go to your profile
          </Link>
          <Link href={'/doctor-list'} className="blue_btn">
            Choose another date
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CancelPage;
