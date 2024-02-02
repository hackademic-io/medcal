import React, { useState } from 'react';
import NeedToLogIn from '../PrivateRoutes/NeedToLogIn';
import { useAuthContext } from '@/context/auth-context';
import AdminMenu from '../AppointMenu/AdminMenu';
import PatientMenu from '../AppointMenu/PatientMenu';
import { IPatientData } from '@/types/user.interface';
import Link from 'next/link';
import AvailableDatesCal from './AvailableDatesCal';

const ProfilePage = () => {
  const { user } = useAuthContext();
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const newDate = new Date();

  const testPatientsData: IPatientData[] = [
    {
      name: 'Vlad',
      last_name: 'Lychak',
      date: newDate,
      doctor: 'Doctor 1',
      time: '2:30 PM',
      email: 'test@gmail.com',
    },
    {
      name: 'David',
      last_name: 'Brown',
      date: newDate,
      doctor: 'Doctor 1',
      time: '5:30 PM',
      email: 'test@gmail.com',
    },
    {
      name: 'Josh',
      last_name: 'Clark',
      date: newDate,
      doctor: 'Doctor 1',
      time: '9:30 AM',
      email: 'test@gmail.com',
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold">Profile page with user dashboard</h1>
      {user.role === 'Patient' ? (
        <div className="mt-4">
          <p className="text-xl">Your name: {user.name}</p>
          <p className="text-xl">Your last name: {user.last_name}</p>
          <p className="text-xl">Your email: {user.email}</p>
          <p className="text-xl">Your role: {user.role}</p>
        </div>
      ) : (
        <div className="mt-4 flex justify-between items-center text-xl ">
          <p>
            You logged in as: {user.name} {user.last_name}
          </p>
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
      )}
      {showCalendar ? (
        <AvailableDatesCal setShowCalendar={setShowCalendar} />
      ) : null}

      <h1 className="text-4xl font-bold mt-4">Info about appointments</h1>
      {user.role === 'Patient' ? (
        <PatientMenu data={testPatientsData} />
      ) : (
        <AdminMenu data={testPatientsData} />
      )}
    </div>
  );
};

export default NeedToLogIn(ProfilePage);
