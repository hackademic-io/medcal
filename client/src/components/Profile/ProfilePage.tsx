import React from 'react';
import NeedToLogIn from '../PrivateRoutes/NeedToLogIn';
import { useAuthContext } from '@/context/auth-context';
import AdminList from '../AppointList/AdminList';
import PatientList from '../AppointList/PatientList';
import { IPatientData } from '@/types/user.interface';

const ProfilePage = () => {
  const { user } = useAuthContext();

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
      <div className="mt-4">
        <p className="text-xl">Your name: {user.name}</p>
        <p className="text-xl">Your last name: {user.last_name}</p>
        <p className="text-xl">Your email: {user.email}</p>
        <p className="text-xl">Your role: {user.role}</p>
      </div>
      <h1 className="text-4xl font-bold mt-4">Info about appointments</h1>
      {user.role === 'Patient' ? (
        <PatientList data={testPatientsData} />
      ) : (
        <AdminList data={testPatientsData} />
      )}
    </div>
  );
};

export default NeedToLogIn(ProfilePage);
