'use client';

import { useAuthContext } from '@/context/auth-context';
import Link from 'next/link';
import React from 'react';

const SuccessPage = () => {
  const { user } = useAuthContext();
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className=" bg-gray-200 p-10">
        <p className="mb-5 text-5xl">
          Thank you for making an appointment with us!
        </p>
        <p className=" leading-tight text-3xl">
          Soon we will send you a confirm letter on{' '}
          <span className="font-bold ">{user.email}</span>
        </p>
        <div className="flex justify-center mt-6">
          <Link href={'/profile'} className="blue_btn">
            Go to your profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
