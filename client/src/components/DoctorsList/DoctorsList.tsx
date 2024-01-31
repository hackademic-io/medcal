'use client';

import Link from 'next/link';
import React from 'react';
import NeedToLogIn from '../PrivateRoutes/NeedToLogIn';

const DoctorsList = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">List of doctors</h1>
      <div>
        <ul className="text-xl my-6">
          <li className="flex mb-4 items-center">
            <p className="mr-10">Doctor 1</p>
            <Link href={'/schedule'} className="border-2 p-2">
              Check available dates{' '}
            </Link>
          </li>
          <li className="flex items-center">
            <p className="mr-10">Doctor 2</p>
            <Link href={'/schedule'} className="border-2 p-2">
              Check available dates{' '}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NeedToLogIn(DoctorsList);
