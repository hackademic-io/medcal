import React from 'react';
import NeedToLogIn from '../PrivateRoutes/NeedToLogIn';
import { useAuthContext } from '@/context/auth-context';
import AdminList from '../AppointList/AdminList';
import PatientList from '../AppointList/PatientList';

const ProfilePage = () => {
  const { user } = useAuthContext();

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
      {user.role === 'Patient' ? <PatientList /> : <AdminList />}
    </div>
  );
};

export default NeedToLogIn(ProfilePage);
