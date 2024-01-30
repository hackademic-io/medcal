import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div>
        <p className="mb-5 text-5xl">Page not found</p>
        <div className="flex justify-center mt-6">
          <Link href={'/profile'} className="blue_btn">
            Go to your profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
