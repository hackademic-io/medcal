'use client';

import Link from 'next/link';
import React from 'react';
import UserLoggedIn from '../PrivateRoutes/UserLoggedIn';

const MainPage = () => {
  return (
    <div className="h-full flex flex-col justify-center ">
      <div>
        <h1 className="text-6xl max-w-3xl leading-none mb-6">
          Welcome to <span className="font-bold text-blue-600">MedPoint</span>{' '}
          <br />
          Smart app to manage your medical appointments
        </h1>
        <span className="text-3xl">
          To continue, please{' '}
          <Link
            href={'/login'}
            className="font-bold text-blue-900 transition-all hover:text-blue-700 underline"
          >
            Log in
          </Link>{' '}
          or{' '}
          <Link
            href={'/sign-up'}
            className="font-bold text-blue-900 transition-all hover:text-blue-700 underline"
          >
            Sign up
          </Link>
        </span>
      </div>
    </div>
  );
};

export default UserLoggedIn(MainPage);
