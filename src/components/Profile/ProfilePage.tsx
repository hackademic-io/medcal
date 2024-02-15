import React, { useState } from 'react';
import Link from 'next/link';
import AvailableDatesCal from './AvailableDatesCal';

const ProfilePage = () => {
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const newDate = new Date();

  return (
    <div>
      <h1 className="text-4xl font-bold">Profile page with user dashboard</h1>

      <div className="mt-4 flex justify-between items-center text-xl ">
        <div className="flex gap-6">
          <button
            onClick={() => setShowCalendar(!showCalendar)}
            className="blue_btn"
          >
            Set available dates
          </button>
          <Link href={'/patient-list'} className="blue_btn">
            Make an appointment for patient
          </Link>
        </div>
      </div>

      {showCalendar ? (
        <AvailableDatesCal setShowCalendar={setShowCalendar} />
      ) : null}

      <h1 className="text-4xl font-bold mt-4">Info about appointments</h1>
    </div>
  );
};

export default ProfilePage;
