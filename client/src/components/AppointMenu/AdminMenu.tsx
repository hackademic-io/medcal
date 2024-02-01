import { IPatientData } from '@/types/user.interface';
import React from 'react';
import PatientCard from './PatientCard';

interface AdminMenuProps {
  data: IPatientData[];
}

const AdminMenu: React.FC<AdminMenuProps> = ({ data }) => {
  return (
    <div className="mt-4 flex justify-between w-full">
      {' '}
      <div className="flex flex-col w-full">
        {data.map((appointmentData, index) => (
          <PatientCard
            data={appointmentData}
            manage={true}
            key={index}
            showEmail={true}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminMenu;
