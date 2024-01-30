import Link from 'next/link';
import React from 'react';

interface PatientDisplayProps {
  handleLogOut: () => void;
}

const PatientDisplay: React.FC<PatientDisplayProps> = ({ handleLogOut }) => {
  return (
    <div className="flex gap-4">
      <Link href={'/doctor-list'} className="blue_btn">
        Make an appointment
      </Link>
      <Link href={'/profile'} className="outline_btn">
        Profile
      </Link>
      <button onClick={handleLogOut} className="outline_btn">
        Log out
      </button>
    </div>
  );
};

export default PatientDisplay;
