import Link from 'next/link';
import React from 'react';

const SuccessPage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div>
        <p className="mb-10 text-6xl font-bold text-center">
          The appointment was successfully booked!
        </p>
        <div className="flex justify-center mt-6 gap-10">
          <Link href={'/dashboard'} className="blue_btn h-14">
            Go to your dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
